---
id: schema-format
title: Wikibase schema format
sidebar_label: Wikibase schema format
---

# Wikibase schema format

The [schema alignment](../../manual/wikibase/schema-alignment) of the Wikibase extension describes how the rows of an OpenRefine project are converted into edits on a Wikibase instance such as Wikidata or Wikimedia Commons.
Schemas can be exported and imported from the "Wikibase" menu at the top right of the project, and they are also stored in the project itself.
In both cases they are serialized as JSON, in the format described on this page.

This format is the one currently used by the extension. It is not versioned: when new features are added to the schema, new fields or new expression types are added, and older schemas can still be read by newer versions of OpenRefine.
Fields that are not recognized are ignored when a schema is read.

A [JSON Schema](https://json-schema.org/) describing the format is available at [`/schemas/wikibase-schema.json`](pathname:///schemas/wikibase-schema.json).
It only checks the structure of the JSON document. It cannot check that the schema is consistent with a given project (for instance that the columns it refers to exist) or that values such as dates are well formed: OpenRefine does that when the schema is loaded for a project.

The easiest way to get an example is to build a schema in the OpenRefine interface and export it.

## Overall structure

A schema is a JSON object with the following fields:

| Field | Description |
|-------|-------------|
| `siteIri` | The concept URI prefix of the Wikibase instance, such as `http://www.wikidata.org/entity/`. |
| `mediaWikiApiEndpoint` | The URL of the MediaWiki API of the Wikibase instance. Defaults to the Wikidata API if omitted. |
| `entityTypeSiteIRI` | An object mapping entity types (such as `mediainfo`) to the concept URI prefix to use for them, when it differs from `siteIri`. May be empty. |
| `entityEdits` | A list of [entity edits](#entity-edits). Each of them describes the edit to make on one entity, for each row of the project. |

Older versions of OpenRefine stored the list of edits under the name `itemDocuments`. This is still accepted when reading a schema, and its entries are read as item edits.

```json
{
  "siteIri": "http://www.wikidata.org/entity/",
  "mediaWikiApiEndpoint": "https://www.wikidata.org/w/api.php",
  "entityTypeSiteIRI": {},
  "entityEdits": [
    {
      "type": "wbitemeditexpr",
      "subject": { "type": "wbentityvariable", "columnName": "item" },
      "nameDescs": [
        {
          "name_type": "LABEL_IF_NEW",
          "value": {
            "type": "wbmonolingualexpr",
            "language": { "type": "wblanguageconstant", "id": "en", "label": "English" },
            "value": { "type": "wbstringvariable", "columnName": "name" }
          }
        }
      ],
      "statementGroups": [
        {
          "property": {
            "type": "wbpropconstant",
            "pid": "P571",
            "label": "inception",
            "datatype": "time"
          },
          "statements": [
            {
              "value": { "type": "wbdatevariable", "columnName": "inception" },
              "mode": "add_or_merge",
              "mergingStrategy": {
                "type": "qualifiers",
                "valueMatcher": { "type": "strict" },
                "pids": []
              },
              "qualifiers": [],
              "references": [
                {
                  "snaks": [
                    {
                      "prop": {
                        "type": "wbpropconstant",
                        "pid": "P854",
                        "label": "reference URL",
                        "datatype": "url"
                      },
                      "value": { "type": "wbstringvariable", "columnName": "reference" }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

## Expressions

Most of the nodes of a schema are *expressions*: JSON objects with a `type` field that determines how they are evaluated for a given row.
Constant expressions always return the same value. Variable expressions read their value from the cell of a given column, identified by its name in the `columnName` field.
If a column is renamed in the project, the schema is updated accordingly.

The expression types are the following:

| `type` | Other fields | Value returned |
|--------|--------------|----------------|
| `wbstringconstant` | `value`: the string | A string. |
| `wbstringvariable` | `columnName` | A string. |
| `wbitemconstant` | `qid`: the item identifier, `label`: a label used for display (optional) | An item. |
| `wbitemvariable` | `columnName` | An item, read from a reconciled cell. |
| `wbentityvariable` | `columnName` | An entity of any type, read from a reconciled cell. |
| `wbentityidvalueconstant` | `id`: the entity identifier, `label`: a label used for display (optional) | An entity of any type. |
| `wbpropconstant` | `pid`: the property identifier, `label` (optional), `datatype`: the Wikibase datatype of the property (optional) | A property. |
| `wbdateconstant` | `value`: the date, for instance `2018-02-28` | A date. The precision is inferred from the format. The special value `TODAY` stands for the current date. |
| `wbdatevariable` | `columnName` | A date, parsed from the cell with the same formats as `wbdateconstant`. |
| `wblocationconstant` | `value`: the coordinates, as `latitude,longitude` or `latitude,longitude,precision` | A globe coordinates value on Earth. |
| `wblocationvariable` | `columnName` | A globe coordinates value, parsed from the cell. |
| `wblanguageconstant` | `id`: the language code, `label`: its name (optional) | A language code. |
| `wblanguagevariable` | `columnName` | A language code, read from the cell. |
| `wbmonolingualexpr` | `language`: a language expression, `value`: a string expression | A monolingual text. |
| `wbquantityexpr` | `amount`: a string expression, `unit`: an item expression, or `null` for no unit | A quantity. |

Which expressions are accepted depends on where they are used, as detailed below. For instance the `property` of a statement group must be a `wbpropconstant`, and the `language` of a monolingual text a language expression.
Variable expressions also support two special cell values, which make a statement or snak use "no value" (`#NOVALUE#`) or "unknown value" (`#SOMEVALUE#`) instead of a regular value.

If an expression cannot be evaluated for a given row (for instance because the cell is empty), the enclosing element is skipped for that row.

## Entity edits

Each element of `entityEdits` has a `type`, which determines the kind of entity being edited. All of them have the following fields:

| Field | Description |
|-------|-------------|
| `subject` | An item, entity or entity identifier expression, returning the entity to edit. Reconciling a column to new entities makes it possible to create entities. |
| `nameDescs` | A list of [labels, descriptions and aliases](#labels-descriptions-and-aliases). |
| `statementGroups` | A list of [statement groups](#statement-groups). |

### Items

Items have the type `wbitemeditexpr`. The `subject` must evaluate to an item, otherwise the edit is reported as invalid when previewing.
For compatibility with older schemas, entries which do not have a `type` field are read as item edits.

### MediaInfo entities

Structured data on Wikimedia Commons files is edited with the type `wbmediainfoeditexpr`. The `subject` must evaluate to a MediaInfo entity. Only labels (`LABEL` and `LABEL_IF_NEW`) are supported in `nameDescs`. Additional fields control the upload of files:

| Field | Description |
|-------|-------------|
| `filePath` | A string expression (or `null`) giving the path or URL of a file to upload. |
| `fileName` | A string expression (or `null`) giving the name of the file on the wiki. Characters that are not allowed in file names are replaced. |
| `wikitext` | A string expression (or `null`) giving the wikitext of the file page. |
| `overrideWikitext` | A boolean (default `false`) which determines whether the wikitext of an existing file page should be replaced. |

## Labels, descriptions and aliases

Each element of `nameDescs` has the following fields:

| Field | Description |
|-------|-------------|
| `name_type` | One of `LABEL`, `LABEL_IF_NEW`, `DESCRIPTION`, `DESCRIPTION_IF_NEW` or `ALIAS`. The `_IF_NEW` variants only apply when the entity is created by the edit. |
| `value` | A `wbmonolingualexpr` expression giving the language and the text. |

## Statement groups

A statement group gathers the statements to make on an entity with the same property. It has two fields:

| Field | Description |
|-------|-------------|
| `property` | A `wbpropconstant` expression. |
| `statements` | A list of statements. |

Each statement is an object with the following fields:

| Field | Description |
|-------|-------------|
| `value` | The main value of the statement: any value expression (strings, items, entities, dates, locations, monolingual texts and quantities). It can only be omitted when deleting statements with the `property` merging strategy. |
| `qualifiers` | A list of snaks. |
| `references` | A list of references. |
| `mode` | What to do with the statement: `add` only adds it if no matching statement exists, `add_or_merge` (the default) merges it with the first matching statement or adds it, and `delete` deletes the matching statements. |
| `mergingStrategy` | How existing statements are matched with this one, see [below](#merging-strategies). Defaults to the `qualifiers` strategy with the `strict` matcher and no qualifiers. |

A *snak* is an object with a `prop` field (a `wbpropconstant` expression) and a `value` field (any value expression).
A *reference* is an object with a single field `snaks`, which is a list of snaks.

### Merging strategies

The `mergingStrategy` is an object whose `type` can be:

* `snak`: an existing statement matches if it has the same main value. It has a `valueMatcher` field.
* `property`: any existing statement with the same property matches, whatever its value.
* `qualifiers`: an existing statement matches if it has the same main value, and the same values for the qualifiers whose properties are listed in the `pids` field (a list of property identifiers). It also has a `valueMatcher` field.

The `valueMatcher` is an object whose `type` is either `strict`, where values must be identical to match, or `lax`, where small differences such as trailing whitespace, or the scheme (`http` or `https`) and trailing slash of URLs, are ignored.

## Validation

When a schema is loaded in a project, it is validated against the columns of the project. Problems such as missing columns, missing fields, or dates that cannot be parsed are reported in the schema alignment tab, and edits cannot be uploaded until they are fixed.
