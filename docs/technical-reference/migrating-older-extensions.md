---
id: migrating-older-extensions
title: Migrating older extensions
sidebar_label: Migrating older extensions
---

This page lists changes in OpenRefine that require significant adaptations from extensions.

## Migrating from Ant to Maven {#migrating-from-ant-to-maven}

### Why are we doing this change? {#why-are-we-doing-this-change}

Ant is a fairly old (antique?) build system that does not incorporate any dependency management.
By migrating to Maven we are making it easier for developers to extend OpenRefine with new libraries, and  stop having to ship dozens of .jar files in the repository. Using the Maven repository also encourages developers to add dependencies to released versions of libraries instead of custom snapshots that are hard to update.

### When was this change made? {#when-was-this-change-made}

The migration was done between 3.0 and 3.1-beta with this commit:
https://github.com/OpenRefine/OpenRefine/commit/47323a9e750a3bc9d43af606006b5eb20ca397b8

### How to migrate an extension {#how-to-migrate-an-extension}

You will need to write a `pom.xml` in the root folder of your extension to configure the compilation process with Maven. Sample `pom.xml` files for extensions can be found in the extensions that are shipped with OpenRefine (`gdata`, `database`, `jython`, `pc-axis` and `wikidata`). A sample extension (`sample`) is also provided, with a minimal build file.

For any library that your extension depends on, you should try to find a matching artifact in the Maven Central repository. If you can find such an artifact, delete the `.jar` file from your extension and add the dependency in your `pom.xml` file. If you cannot find such an artifact, it is still possible to incorporate your own `.jar` file using `maven-install-plugin` that you can configure in your `pom.xml` file as follows:

```xml
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-install-plugin</artifactId>
  <version>2.5.2</version>
  <executions>
    <execution>
      <id>install-wdtk-datamodel</id>
      <phase>process-resources</phase>
      <configuration>
        <file>${basedir}/lib/my-proprietary-library.jar</file>
        <repositoryLayout>default</repositoryLayout>
        <groupId>com.my.company</groupId>
        <artifactId>my-library</artifactId>
        <version>0.5.3-SNAPSHOT</version>
        <packaging>jar</packaging>
        <generatePom>true</generatePom>
      </configuration>
      <goals>
        <goal>install-file</goal>
      </goals>
    </execution>
    <!-- if you need to add more than one jar, add more execution blocks here -->
  </executions>
</plugin>
```

And add the dependency to the `<dependencies>` section as usual:

```xml
<dependency>
  <groupId>com.my.company</groupId>
  <artifactId>my-library</artifactId>
  <version>0.5.3-SNAPSHOT</version>
</dependency>
```

## Migrating to Wikimedia's i18n jQuery plugin {#migrating-to-wikimedias-i18n-jquery-plugin}

### Why are we doing this change? {#why-are-we-doing-this-change-1}

This adds various important localization features, such as the ability to handle plurals or interpolation. This also restores the language fallback (displaying strings in English if they are not available in the target language) which did not work with the previous set up.

### When was the migration made? {#when-was-the-migration-made}

The migration was made between 3.1-beta and 3.1, with this commit: https://github.com/OpenRefine/OpenRefine/commit/22322bd0272e99869ab8381b1f28696cc7a26721

### How to migrate an extension {#how-to-migrate-an-extension-1}

You will need to update your translation files, merging nested objets in one global object, concatenating keys. You can do this by running the following Python script on all your JSON translation files:

```python
import json
import sys

with open(sys.argv[1], 'r') as f:
    j = json.loads(f.read())

result = {}
def translate(obj, path):
    res = {}
    if type(obj) == str:
        result['/'.join(path)] = obj
    else:
        for k, v in obj.items():
            new_path = path + [k]
            translate(v, new_path)

translate(j, [])

with open(sys.argv[1], 'w') as f:
    f.write(json.dumps(result, ensure_ascii=False, indent=4))
```

Then your javascript files which retrieve the translated strings should be updated: `$.i18n._('core-dialogs')['cancel']` becomes `$.i18n('core-dialogs/cancel')`. You can do this with the following `sed` script:

     sed -i "s/\$\.i18n._(['\"]\([A-Za-z0-9/_\\-]*\)['\"])\[['\"]\([A-Za-z0-9\-\_]*\)[\"']\]/$.i18n('\1\/\2')/g" my_javascript_file.js

You can then chase down the places where you are concatenating translated strings, and replace that with more flexible patterns using [the plugin's features](https://github.com/wikimedia/jquery.i18n#jqueryi18n-plugin).

## Migrating from org.json to Jackson {#migrating-from-orgjson-to-jackson}

### Why are we doing this change? {#why-are-we-doing-this-change-2}

The org.json (or json-java) library has multiple drawbacks.
* First, it has limited functionality - all the serialization and deserialization has to be done explicitly - an important proportion of OpenRefine's code was dedicated to implementing these;
* Second, its implementation is not optimized for speed - multiple projects have reported speedups when migrating to more modern JSON libraries;
* Third, and this was the decisive factor to initiate the migration: [its license](https://json.org/license) is the MIT license with an additional condition which makes it non-free. Getting rid of this dependency was required by the Software Freedom Conservancy as a prerequisite to become a fiscal sponsor for the project.

### When was the migration made? {#when-was-the-migration-made-1}

This change was made between 3.1 and 3.2-beta, with this commit: https://github.com/OpenRefine/OpenRefine/commit/5639f1b2f17303b03026629d763dcb6fef98550b

### How to migrate an extension or fork {#how-to-migrate-an-extension-or-fork}

You will need to use the Jackson library to serialize the classes that implement interfaces or extend classes exposed by OpenRefine.
The interface `Jsonizable` was deleted. Any class that used to implement this now needs to be serializable by Jackson, producing the same format as the previous serialization code. This applies to any operation, facet, overlay model or GREL function. If you are new to Jackson, have a look at [this tutorial](https://www.baeldung.com/jackson) to learn how to annotate your class for serialization. Once this is done, you can remove the `void write(JSONWriter writer, Properties options)` method from your class. Note that it is important that you do this migration for all classes implementing the `Jsonizable` interface that are exposed to OpenRefine's core.

We encourage you to migrate out of org.json completely, but this is only required for the classes that interact with OpenRefine's core.

#### General notes about migrating {#general-notes-about-migrating}

OpenRefine's ObjectMapper is available at `ParsingUtilities.mapper`. It is configured to only serialize the fields and getters that have been explicitly marked with `@JsonProperty` (to avoid accidental JSON format changes due to refactoring). On deserialization it will ignore any field in the JSON payload that does not correspond to a field in the Java class. It has serializers and deserializers  for `OffsetDateTime` and `LocalDateTime`.

Useful snippets to use in tests:
* deserialize an instance: `MyClass instance = ParsingUtilities.mapper.readValue(jsonString, MyClass.class);` (replaces calls to `Jsonizable.write`);
* serialize an instance: `String json = ParsingUtilities.mapper.writeValueAsString(myInstance);` (replaces calls to static methods such as `load`, `loadStreaming` or `reconstruct`);
* the equivalent of `JSONObject` is `ObjectNode`, the equivalent of `JSONArray` is `ArrayNode`;
* create an empty JSON object: `ParsingUtilities.mapper.createObjectNode()` (replaces `new JSONObject()`);
* create an empty JSON array: `ParsingUtilities.mapper.createArrayNode()` (replaces `new JSONArray()`).

Before undertaking the migration, we recommend that you write some tests which serialize and deserialize your objects. This will help you make sure that the JSON format is preserved during the migration. One way to do this is to collect some sample JSON representations of your objects, and check in your tests that deserializing these JSON payloads and serializing them back to JSON preserves the JSON payload. Some utilities are available to help you with that in [`TestUtils`](https://github.com/OpenRefine/OpenRefine/blob/master/main/tests/server/src/com/google/refine/tests/util/TestUtils.java) (we had [some to test org.json serialization](https://github.com/OpenRefine/OpenRefine/blob/3.1/main/tests/server/src/com/google/refine/tests/util/TestUtils.java) before we got rid of the dependency, feel free to copy them).

#### For functions {#for-functions}

Before the migration, you had to explicitly define JSON serialization of functions with a `write` method. You should now override the getters returning the various documentation fields.

Example: `Cos` function [before](https://github.com/OpenRefine/OpenRefine/blob/3.1/main/src/com/google/refine/expr/functions/math/Cos.java) and [after](https://github.com/OpenRefine/OpenRefine/blob/master/main/src/com/google/refine/expr/functions/math/Cos.java).

#### For operations {#for-operations}

Before the JSON migration we refactored engine-dependent operations so that the engine configuration is represented by an `EngineConfig` object instead of a `JSONObject`. Therefore the constructor for your operation should be updated to use this new class. Your constructor should also be annotated to be used during deserialization.

Note that you do not need to explicitly serialize the operation type, this is already done for you by `AbstractOperation`.

Example: `ColumnRemovalOperation` [before](https://github.com/OpenRefine/OpenRefine/blob/3.1/main/src/com/google/refine/operations/column/ColumnRemovalOperation.java) and [after](https://github.com/OpenRefine/OpenRefine/blob/master/main/src/com/google/refine/operations/column/ColumnRemovalOperation.java).

#### For changes {#for-changes}

Changes are serialized in plain text but often relies on JSON serialization for parts of the data. Just use the methods above with `ParsingUtilities.mapper` to maintain this behaviour.

Example: `ReconChange` [before](https://github.com/OpenRefine/OpenRefine/blob/3.1/main/src/com/google/refine/model/changes/ReconChange.java) and [after](https://github.com/OpenRefine/OpenRefine/blob/master/main/src/com/google/refine/operations/column/ColumnRemovalOperation.java).

#### For importers {#for-importers}

The importing options have been migrated from `JSONObject` to `ObjectNode`. Your compiler should help you propagate this change. Utility functions in `JSONUtilities` have been migrated to Jackson so you should have minimal changes if you used them.

Example: `TabularImportingParserBase` [before](https://github.com/OpenRefine/OpenRefine/blob/3.1/main/src/com/google/refine/importers/TabularImportingParserBase.java) and [after](https://github.com/OpenRefine/OpenRefine/blob/master/main/src/com/google/refine/importers/TabularImportingParserBase.java).

#### For overlay models {#for-overlay-models}

Migrate serialization and deserialization as for other objects.

Example: `WikibaseSchema` [before](https://github.com/OpenRefine/OpenRefine/blob/3.1/extensions/wikidata/src/org/openrefine/wikidata/schema/WikibaseSchema.java#L203) and [after](https://github.com/OpenRefine/OpenRefine/blob/master/extensions/wikidata/src/org/openrefine/wikidata/schema/WikibaseSchema.java#L60)

#### For preference values {#for-preference-values}

Any class that is stored in OpenRefine's preference now needs to implement the `com.google.refine.preferences.PreferenceValue` interface. The static `load` method and the `write` method used previously for deserialization should be deleted and regular Jackson serialization and deserialization should be implemented instead. Note that you do not need to explicitly serialize the class name, this is already done for you by the interface.

Example: `TopList` [before](https://github.com/OpenRefine/OpenRefine/blob/3.1/main/src/com/google/refine/preference/TopList.java) and [after](https://github.com/OpenRefine/OpenRefine/blob/master/main/src/com/google/refine/preference/TopList.java)

## Changes for 4.0

Version 4.0 features [better support for large datasets and long-running operations](https://github.com/OpenRefine/OpenRefine/wiki/Changes-for-4.0).

Most changes for 4.0 happen in the backend. The frontend code remains mostly the same.
* If your extension only makes frontend changes, you might be able to migrate it without much trouble (perhaps it already works out of the box?). It is worth checking the section on frontend architecture changes and the HTTP API changes if you are making
  calls to the backend yourself.
* If your extension includes backend functionality, there might be more work involved. Although an incremental migration (starting from your existing code) might be possible, it might be easier to rewrite those features mostly from scratch following our guide for
  extension developers.

### Migrating from in-memory project data storage to the runner architecture

### Changes in project serialization format

### Changes in package names

### Changes in Maven module structure

### Changes in the HTTP API offered by OpenRefine's backend

#### The `get-rows` command

The `get-rows` command offered by the backend to fetch batches of rows or records has changed. In 3.x, the command expected:
* `engine`: the configuration of the engine, indicating whether the rows or records mode should be used, as well as the active facets;
* `limit`: a page size;
* `start`: the number of filtered rows/records before the page.

Note that the `start` parameter is not always the id of the first row or record to return: if facets are applied, there might be rows/records filtered out before the requested page, in which case the first row id returned will be greater than the `start`
parameter. For the backend, this is inefficient: this means that all rows before the requested page must be processed to check whether they match the facets or not. This was also the source of UX issues as the scrolling position in the grid could often
not be preserved after some operation was applied.

In the new architecture, the command now expects:
* `engine`: the configuration of the engine, as before;
* `limit`: a page size, as before;
* exactly one of:
  * `start`: a lower bound on the first row/record id to return
  * `end`: an upper bound on the last row/record id to return

If no facets are applied, the combination of `start` and `limit` will give the same results as in the previous version, with the first row id returned being given by the value of the `start` parameter. But when facets are applied, the behaviour differs:
the backend will start inspecting the row/record at the given `start` offset, and return the first `limit` matching rows/records.

The format of the response has changed too. In 3.x, the contents of reconciliation objects used to be stored separately, in a `pool` object. Those reconciliation objects are now stored directly in the cell objects they belong to, and the reconciliation
pool was removed.

Corresponding issues: [#3562](https://github.com/OpenRefine/OpenRefine/issues/3562), PR [#5411](https://github.com/OpenRefine/OpenRefine/pull/5411).

#### The `get-models` command

The output of the `get-models` command has been impacted in several ways:
* The `recordsModel` field was removed
* Its `hasRecord` field was moved to the `columnModel` field.

The `hasRecords` field has also changed meaning. It used to be set to `true` when the grid contained more rows than records. Both for performance reasons and UX considerations, we have changed this to indicate whether the importer and operations leading to
the current project state created a record structure by design. This should be a more faithful indication of whether the records mode should be offered to the user in this project state.

Corresponding issues: [#5661](https://github.com/OpenRefine/OpenRefine/issues/5661) and commit [64c552bb1](https://github.com/OpenRefine/OpenRefine/commit/64c552bb1503031fea07e0a299831a0f5b73fee5).

#### Applying operations

In 3.x, each operation that the user can run on a project came with the following Java classes in the backend:
* an Operation class, which holds the metadata for the operation and is responsible for its JSON serialization (which is exposed in the history tab, among others)
* a Change class (often reused by different operations), which is responsible for actually applying the operation to the project (carrying out the corresponding transformation)
* a Command class, which exposes an HTTP API to initiate the operation on a project.

Therefore, each operation came with its own HTTP endpoint to apply it, and the frontend can call that endpoint when the user clicks on some menu item or validates some dialog, for instance.

In 4.x, those dedicated HTTP enpdoints were removed in favour of using the generic `apply-operations` command, which was used by the Undo/Redo tab to let the user apply
a sequence of operations defined by a JSON array.

In the frontend, a new utility method was introduced: `Refine.postOperation`. This method can be used to apply an operation by supplying the same JSON represetation one would find in the history tab. Under the hood, it calls the `apply-operations` command.
If an extension used the Javascript functions `Refine.postProcess` or `Refine.postCoreProcess`, we recommend you migrate it to use `Refine.postOperation` instead. Note that the JSON serialization of the operation and the parameters expected by the
dedicated command in 3.x do not always match perfectly, so it is worth double-checking the syntax when doing the migration. See PR [#5559](https://github.com/OpenRefine/OpenRefine/pull/5559/files#diff-865c93310c384b82a3d586f825aa52005a7a4705320d6a7f96219dc4bc029979) for examples of migrations in the core tool.

Corresponding issues: [#5539](https://github.com/OpenRefine/OpenRefine/issues/5539), PR [#5559](https://github.com/OpenRefine/OpenRefine/pull/5559)

#### Support for sampling in facet evaluation

The `compute-facets` command supports sampling, to evaluate facets only on a subset of rows or records as a way of speeding up the computation.
This feature can be enabled by adding an `aggregationLimit` field to the engine configuration JSON passed to the backend, as follows:

```json
{
  "mode": "record-based",
  "facets": [
    {
      "type": "list",
      "name": "country",
      "columnName": "country",
      "expression": "value",
      "omitBlank": false,
      "omitError": false,
      "selection": [],
      "selectBlank": false,
      "selectError": false,
      "invert": false
    }
  ],
  "aggregationLimit": 10000
}
```

This will cap the evaluation of facets to the given limit. The number of rows or records actually processed might vary and is returned in the response, using the following parameters:
* `agregatedCount`: number of rows or records which were actually processed;
* `filteredCount`: out of those processed rows or records, how many matched the filters defined by the facets;
* `limitReached`: true when the aggregation stopped because of the `aggregationLimit` set in the request, false when the entire dataset was processed.

#### Options of the CSV/TSV importer

The CSV/TSV importer has got a new option: `multiLine`. This boolean option should be set to `true` when each row of the project is known to correspond to a single line in the source file. This implies that cells are known not to contain unescaped newline
characters.

For backwards compatibility, `multiLine` is considered `false` if it is not present in the importing options. But it is enabled by default by the new UI, since it enables significant performance improvements.

Extensions or third-party tools should consider adding `multiLine: true` to the importing options they pass to OpenRefine when creating a project, since this will make it possible to process significantly larger datasets.


