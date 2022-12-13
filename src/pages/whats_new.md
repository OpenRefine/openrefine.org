---
title: External resources
description: Tutorials and other materials contributed by the community.
hide_table_of_contents: false
---

# Release notes

## Version 3.7

### New features
* Most text exposed to users in OpenRefine's UI can now be translated. Some strings (generated server-side) were not translatable so far. To help translators catch up on this backlog, do not hesitate to [join us on Weblate](https://hosted.weblate.org/engage/openrefine/). ([#5030](https://github.com/OpenRefine/OpenRefine/pull/5030))
* New media files can be uploaded to Wikibase instances such as Wikimedia Commons. The wikitext of existing files can also be edited thanks to the new fields introduced. ([#4682](https://github.com/OpenRefine/OpenRefine/issues/4682))
* A button "Discover Wikibase instances…" was added on the dialog which lists the registered Wikibase instances ([#5007](https://github.com/OpenRefine/OpenRefine/issues/5007)), whose design was improved ([#5009](https://github.com/OpenRefine/OpenRefine/issues/5009))
* In the Wikibase schema editor, statements with non-standard datatypes (such as EDTF dates or musical notations) are now supported, assuming they use strings as underlying representation ([#3263](https://github.com/OpenRefine/OpenRefine/issues/3263))
* The Wikibase issues tab now makes it possible to locate which rows are responsible for certain issues, using facets ([#5033](https://github.com/OpenRefine/OpenRefine/issues/5033))
* The default throttle delay for the "Add column by fetching URLs" operation was reduced to 500ms and the error reporting for this field was improved ([#5188](https://github.com/OpenRefine/OpenRefine/issues/5188))
* Wikibase templates (incomplete Wikibase schemas) can be saved and shared, as a way of helping contributors use the same way of structuring data in a Wikibase instance ([#5043](https://github.com/OpenRefine/OpenRefine/issues/5043), [#5303](https://github.com/OpenRefine/OpenRefine/pull/5303))
* The line-based importer now supports a custom delimiter, instead of only newlines ([#4103](https://github.com/OpenRefine/OpenRefine/issues/4103))
* The Excel importer can be configured to import all cells as text, disabling the use of other datatypes supported by OpenRefine ([#4838](https://github.com/OpenRefine/OpenRefine/issues/4838))
* The "some value" and "no value" Wikibase values can now be uploaded by OpenRefine ([#5360](https://github.com/OpenRefine/OpenRefine/pull/5360))
* The Excel importer will also avoid coercing cell values to OpenRefine datatypes which do not fully fit them, such as representing a date as a date with time ([#5389](https://github.com/OpenRefine/OpenRefine/issues/5389), [#5390](https://github.com/OpenRefine/OpenRefine/issues/5390)).


### GREL changes
* Improved error handling in number formatting with the GREL `toString` function ([#816](https://github.com/OpenRefine/OpenRefine/issues/816))
* The behaviour of the GREL function `wholeText()` has changed slightly in the way it handles newlines, following [an upstream change in the jsoup library](https://jsoup.org/news/release-1.15.1) (jsoup issue [#1636](https://github.com/jhy/jsoup/issues/1636))
* A new `parent` GREL function, to obtain the parent element of an XML element, was added ([#5176](https://github.com/OpenRefine/OpenRefine/issues/5176))

### Bug fixes
* The layout of the dialog to select a reconciliation match was improved so that the auto-complete widget does not hide the other options ([#4821](https://github.com/OpenRefine/OpenRefine/issues/4821))
* Better in-tool documentation around the way the scatterplot facet detects numerical columns ([#4890](https://github.com/OpenRefine/OpenRefine/issues/4890))
* The detection of URLs in cell values was fixed ([#4546](https://github.com/OpenRefine/OpenRefine/issues/4546))
* The error message displayed when trying to add a Wikibase manifest with a manifest version that is too old or recent was improved ([#4847](https://github.com/OpenRefine/OpenRefine/issues/4847))
* Errors returned by Jython expressions are more readable ([#3012](https://github.com/OpenRefine/OpenRefine/issues/3012))
* The ODS exporter no longer creates a default sheet "Sheet1" in the documents it creates ([#4864](https://github.com/OpenRefine/OpenRefine/issues/4864))
* Longer descriptions in auto-completion widget are not cut off anymore ([#4988](https://github.com/OpenRefine/OpenRefine/issues/4988))
* The interface for editing cell values was improved to better explain how to input dates ([#3082](https://github.com/OpenRefine/OpenRefine/issues/3082))
* The Windows `refine.bat` script was made more consistent with the Unix `refine` script ([#4949](https://github.com/OpenRefine/OpenRefine/pull/4949), [#5404](https://github.com/OpenRefine/OpenRefine/pull/5404))
* The "Search for Match" dialog was rearranged so that the dropdown does not cover the buttons ([#4945](https://github.com/OpenRefine/OpenRefine/pull/4945))
* Error handling in the scatterplot facet was improved ([#4893](4893))
* The "Collapse consecutive whitespaces" operation now handles unicode whitespace correctly ([#4898](https://github.com/OpenRefine/OpenRefine/pull/4898))
* ([#4991](https://github.com/OpenRefine/OpenRefine/pull/4991))
* The handling of GZIP-compressed files without `.gz` extension was improved in the importing pipeline ([#547](https://github.com/OpenRefine/OpenRefine/pull/547))
* ([#5153](https://github.com/OpenRefine/OpenRefine/pull/5153))
* The "Add column based on this column dialog" can be submitted by pressing "Enter" in the column field ([#5143](https://github.com/OpenRefine/OpenRefine/issues/5143))
* The editing of redirected Wikibase items was fixed ([#5162](https://github.com/OpenRefine/OpenRefine/issues/5162))
* The user experience was improved in the case of incomplete Wikibase schemas ([#5131](https://github.com/OpenRefine/OpenRefine/issues/5131))
* The memory usage display was improved to show the used memory instead of the total memory, and was made more precise ([#5222](https://github.com/OpenRefine/OpenRefine/pull/5222))
* The association of labels to form inputs was improved, enhancing the accessibility of the interface ([#5239](https://github.com/OpenRefine/OpenRefine/pull/5239), [#5242](https://github.com/OpenRefine/OpenRefine/pull/5242), [#5249](https://github.com/OpenRefine/OpenRefine/pull/5249), [#5284](https://github.com/OpenRefine/OpenRefine/pull/5284))
* An overflow issue in the reconciliation dialog was fixed ([#5285](https://github.com/OpenRefine/OpenRefine/issues/5285))
* The Wikibase manifests now properly support locally-running reconciliation endpoints ([#5035](https://github.com/OpenRefine/OpenRefine/issues/5285))
* The aspect ratio of Wikibase logos is now properly preserved ([#5306](https://github.com/OpenRefine/OpenRefine/issues/5306))
* The SQL exporter interface was improved ([#5224](https://github.com/OpenRefine/OpenRefine/issues/5224))
* The cell edit popup and dialogs with textbox inputs became resizable ([#5330](https://github.com/OpenRefine/OpenRefine/pull/5330))
* When marking a set of cells as "New" in an unreconciled column, the user is prompted for the reconciliation service to use ([#4985](https://github.com/OpenRefine/OpenRefine/issues/4985))
* More quality assurance checks were introduced in the Wikibase extension, such as checking for identical label and description in new Wikibase items ([#4980](https://github.com/OpenRefine/OpenRefine/issues/4980))
* The caching of auto-completion results in the Wikibase extension was fixed ([#5190](https://github.com/OpenRefine/OpenRefine/issues/5190))
* The Wikidata extension was fully renamed to "Wikibase extension" ([#4525](https://github.com/OpenRefine/OpenRefine/issues/4525))
* The controls of the cluster and edit dialog are greyed out while clustering is taking place ([#5369](https://github.com/OpenRefine/OpenRefine/pull/5369))
* The handling of unicode whitespace was improved throughout the application ([#5105](https://github.com/OpenRefine/OpenRefine/issues/5105))
* Our MacOS packages (.DMG) are now properly signed and notarized, which should make their installation easier ([#4586](https://github.com/OpenRefine/OpenRefine/issues/4586)). Also, the presentation of the DMG image was made more user-friendly by including the customary link to the Applications folder. ([#5509](https://github.com/OpenRefine/OpenRefine/issues/5509))
* The parsing of the unary minus sign in GREL was fixed ([#5465](https://github.com/OpenRefine/OpenRefine/issues/5465))

### For developers

* Some column metadata fields, which had never been exposed in the UI, have been removed ([#5276](https://github.com/OpenRefine/OpenRefine/pull/5276))
* A new [extension point to customize cell rendering](https://openrefine.org/docs/technical-reference/writing-extensions#cell-renderers) was introduced ([#5154](https://github.com/OpenRefine/OpenRefine/issues/5154))

## Version 3.6

Starting with version 3.6, OpenRefine requires Java 11 or later.

### New features
* The user is now warned when applying the "Fill down" or "Blank down" operations with a pending sorting criterion ([#3256](https://github.com/OpenRefine/OpenRefine/issues/3256))
* The import preview refreshing can be disabled ([#4009](https://github.com/OpenRefine/OpenRefine/issues/4009))
* Menu items to reveal collapsed columns were added to the column menus ([#4067](https://github.com/OpenRefine/OpenRefine/issues/4067))
* The path to the `refine.ini` configuration file can now be changed on the command line ([#4113](https://github.com/OpenRefine/OpenRefine/issues/4113))
* It is now possible to download the JSON representation of the operation history, without resorting to copy and paste ([#4498](https://github.com/OpenRefine/OpenRefine/issues/4498))
* It is now possible to work with Wikibase instances with federation enabled ([#4287](https://github.com/OpenRefine/OpenRefine/issues/4287))
* The merge strategy for statements can be configured in the Wikibase schema editor. This also adds support for deleting statements. Beware that schemas created with earlier versions of OpenRefine will still use the original merge strategy. ([#3383](https://github.com/OpenRefine/OpenRefine/issues/3383), [#2116](https://github.com/OpenRefine/OpenRefine/issues/2116), [#4130](https://github.com/OpenRefine/OpenRefine/issues/4130))
* OpenRefine can edit MediaInfo entities and not just Items ([#4270](https://github.com/OpenRefine/OpenRefine/issues/4270))
* It is possible to disable the new version notification by setting the configuration variable `refine.display.new.version.notice=false` ([#4410](https://github.com/OpenRefine/OpenRefine/issues/4410))
* The dialog to reorder and delete columns was improved to easily delete most columns ([#4557](https://github.com/OpenRefine/OpenRefine/pull/4557))
* The maximum editing speed and the Wikibase tag to apply to all Wikibase edits is now configurable for each Wikibase instance via its manifest ([#3359](https://github.com/OpenRefine/OpenRefine/issues/3359))
* Extra URL fields in the starting page can be removed thanks to a new button ([#4606](https://github.com/OpenRefine/OpenRefine/issues/4606))
* The "Use values as identifiers" operation now warns that it does not validate the identifiers ([#3172](https://github.com/OpenRefine/OpenRefine/issues/3172))

### GREL changes

* A new GREL function, `parent`, was introduced to obtain the parent element of an XML element ([#4181](https://github.com/OpenRefine/OpenRefine/issues/4181))
* A new GREL function, `scriptText`, was introduced to obtain the text contained in a `<script>` or `<style>` element in HTML ([#4189](https://github.com/OpenRefine/OpenRefine/issues/4189))
* The `random` (previously `randomNumber`) GREL function was improved ([#3143](https://github.com/OpenRefine/OpenRefine/issues/3143))
* A new GREL function `parseUri` was introduced ([#1857](https://github.com/OpenRefine/OpenRefine/issues/1857))
* A new GREL function `detectLanguage` was introduced ([#642](https://github.com/OpenRefine/OpenRefine/issues/642))
* New GREL functions `encode` and `decode` were introduced ([#148](https://github.com/OpenRefine/OpenRefine/issues/148))
* The error handling of the `pow` and `exp` functions was improved ([#3062](https://github.com/OpenRefine/OpenRefine/issues/3062))
* The division operator returns NaN when computing 0/0 ([#377](https://github.com/OpenRefine/OpenRefine/issues/377))
* A function `timeSinceUnixEpochToDate` was introduced, to convert a duration since Epoch to a date object ([#608](https://github.com/OpenRefine/OpenRefine/issues/608))
* A function `replaceEach` was introduced, to replace multiple substrings in one go ([#2606](https://github.com/OpenRefine/OpenRefine/issues/2606))

### Bug fixes

* XML and JSON importers now correctly create File and Archive columns when requested ([#3462](https://github.com/OpenRefine/OpenRefine/issues/3462))
* Casing in UI text in English was made more consistent ([#3363](https://github.com/OpenRefine/OpenRefine/issues/3363))
* Zip files with an unsupported compression method are correctly rejected by the UI at import time ([#4112](https://github.com/OpenRefine/OpenRefine/issues/4112))
* Date parsing for Excel and ODS importers was fixed to avoid off-by-one errors due to changes in Daylight Saving Time ([#4294](https://github.com/OpenRefine/OpenRefine/issues/4294))
* Labels of checkboxes in text filters are correctly bound to the corresponding checkboxes ([#4243](https://github.com/OpenRefine/OpenRefine/issues/4243))
* The templating exporter correctly reports when a template contains errors ([#3382](https://github.com/OpenRefine/OpenRefine/issues/3382))
* The dialog to add a Wikibase instance gives better error messages when the manifest's JSON structure is invalid ([#4324](https://github.com/OpenRefine/OpenRefine/issues/4324))
* The missing separators when using the templating exporter in records mode have been fixed ([#3955](https://github.com/OpenRefine/OpenRefine/issues/3955))
* The handling of curly braces inside export templates has been fixed ([#3381](https://github.com/OpenRefine/OpenRefine/issues/3381))
* The options to parse column names in the CSV/TSV exporter have been turned into radio buttons ([#4299](https://github.com/OpenRefine/OpenRefine/issues/4299))
* The project metadata dialog was improved to avoid being cut off when containing large values ([#4119](https://github.com/OpenRefine/OpenRefine/issues/4119))
* The tabular exporter dialog was fixed to respect column order changes ([#4271](https://github.com/OpenRefine/OpenRefine/issues/4271))
* The duplicates facet was fixed, it now works for all column names ([#4233](https://github.com/OpenRefine/OpenRefine/issues/4233))
* Links from the tool to the documentation were improved ([#3578](https://github.com/OpenRefine/OpenRefine/issues/3578))
* The XML importer correctly populates project metadata with import options ([#4566](https://github.com/OpenRefine/OpenRefine/issues/4566))
* When running OpenRefine on Windows without Java, the user is now redirected to our docs about setting up Java ([#4511](https://github.com/OpenRefine/OpenRefine/issues/4511))
* The alignment of OK/Cancel buttons was normalized to the right-hand side of all dialogs ([#4564](https://github.com/OpenRefine/OpenRefine/issues/4564))
* The sizing of the SQL exporter dialog was fixed ([#4579](https://github.com/OpenRefine/OpenRefine/issues/4579))
* Menu items which open a dialog end with a text ellipsis ([#4585](https://github.com/OpenRefine/OpenRefine/issues/4585))
* Renaming a column is now done via a proper dialog and not a Javascript prompt ([#4590](https://github.com/OpenRefine/OpenRefine/issues/4590))
* When creating a project by downloading the content of one or more URLs, all URLs are validated in the UI ([#2687](https://github.com/OpenRefine/OpenRefine/issues/2687))
* A tooltip falsely indicating that project tags could be edited was removed ([#3979](https://github.com/OpenRefine/OpenRefine/issues/3979))
* The spacing between the OK and Cancel buttons on some dialogs was fixed ([#4622](https://github.com/OpenRefine/OpenRefine/issues/4622))
* Spell-checking was disabled on many text inputs where it does not make sense ([#3004](https://github.com/OpenRefine/OpenRefine/issues/3004))
* The style of forms in the UI was made more consistent ([#4639](https://github.com/OpenRefine/OpenRefine/issues/4639))
* The borders of dialogs was made uniform across the tool ([#4662](https://github.com/OpenRefine/OpenRefine/issues/4662))
* The SQL exporter avoids adding invalid characters in its column names ([#1940](https://github.com/OpenRefine/OpenRefine/issues/1940))
* The interface remembers whether the last reconciliation applied to a single cell or to all similar cells ([#2316](https://github.com/OpenRefine/OpenRefine/issues/2316))
* Encoding issues in operation notifications have been fixed ([#4540](https://github.com/OpenRefine/OpenRefine/issues/4540))
* The parsing of empty ODS files was fixed ([#2465](https://github.com/OpenRefine/OpenRefine/issues/2465))
* The documentation around clustering was improved ([#3033](https://github.com/OpenRefine/OpenRefine/issues/3033))
* Proxy settings are now respected by reconciliation operations ([#3919](https://github.com/OpenRefine/OpenRefine/issues/3919))
* Encoding issues in project metadata fields were fixed ([#3919](https://github.com/OpenRefine/OpenRefine/issues/4402))
* The dialog to select a Wikibase instance was improved ([#3824](https://github.com/OpenRefine/OpenRefine/issues/3824))
* A bug causing workspace corruption when saving projects was fixed ([#3719](https://github.com/OpenRefine/OpenRefine/issues/3719), [#3277](https://github.com/OpenRefine/OpenRefine/issues/3277), [#1418](https://github.com/OpenRefine/OpenRefine/issues/1418))
* The positioning of dialogs was improved ([#4906](https://github.com/OpenRefine/OpenRefine/pull/4906))
* (from 3.6-rc1 on) The checks for Java versions in our start scripts have been updated to reflect that we support Java 11 to 17. ([#4930](https://github.com/OpenRefine/OpenRefine/issues/4930))
* (from 3.6-rc1 on) The "Collapse consecutive whitespace" operation correctly recognizes all Unicode whitespace as spaces ([#4883](https://github.com/OpenRefine/OpenRefine/issues/4883))
* (from 3.6-rc1 on) Menu items with ellipsis were fixed ([#5003](https://github.com/OpenRefine/OpenRefine/pull/5003))
* (from 3.6.1 on) The editing of redirected Wikibase entities was fixed ([#5162](https://github.com/OpenRefine/OpenRefine/issues/5162))
* (from 3.6.1 on) A bug with selection of clusters in the clustering dialog was fixed ([#5138](https://github.com/OpenRefine/OpenRefine/issues/5138))
* (from 3.6.1 on) Date handling in the Google data extension was fixed ([#5107](https://github.com/OpenRefine/OpenRefine/issues/5107))
* (from 3.6.1 on) A packaging issue in MacOS was tentatively fixed ([#5160](https://github.com/OpenRefine/OpenRefine/issues/5160))
* (from 3.6.2 on) An overflow issue with the reconciliation dialog was fixed ([#5286](https://github.com/OpenRefine/OpenRefine/issues/5286))

### For extension developers

* (from 3.6-rc1 on) We migrated to jQuery 3.6.0. If you are using jQuery in your extension, some jQuery syntaxes that have been deprecated earlier might have been removed. If your extension runs with OpenRefine 3.5.2, you can check the web developer console for warning messages when the extension is used: fixing those should be enough for your extension to be compatible with OpenRefine 3.6 ([#4891](https://github.com/OpenRefine/OpenRefine/pull/4891))

## Version 3.5

### New in 3.5.1
* Log4j was upgraded to version 2.16.0
* OpenRefine is compatible with Java versions 8 to 17 ([#4106](https://github.com/OpenRefine/OpenRefine/issues/4106))

### New features

* Wikidata support has been generalized to arbitrary Wikibase instances. ([#1640](https://github.com/OpenRefine/OpenRefine/issues/1640))
* The `cross` function now accepts implicit project and column names ([#2504](https://github.com/OpenRefine/OpenRefine/issues/2504))
* The left panel can be collapsed ([#1038](https://github.com/OpenRefine/OpenRefine/issues/1038)) and resized ([#2771](https://github.com/OpenRefine/OpenRefine/issues/2771))
* Support for more Wikidata constraints was added (multi-value, difference within range, conflicts with, and citation needed constraints) ([#2354](https://github.com/OpenRefine/OpenRefine/issues/2354))
* Splitting multi-valued cells is now possible by transition between uppercase/lowercase ([#2238](https://github.com/OpenRefine/OpenRefine/issues/2238))
* When importing multiple archive files, importers can store the filename of the archive file each row was extracted from ([#1963](https://github.com/OpenRefine/OpenRefine/issues/1963))
* It is now possible to go to a page of the project table directly ([#2638](https://github.com/OpenRefine/OpenRefine/issues/2638))
* The pagination sizes offered by the UI can now be configured by setting the `ui.browsing.pageSize` preference to values such as `[100,500,1000,2000]` ([#2624](https://github.com/OpenRefine/OpenRefine/issues/2624))
* Format detection at the import stage was improved ([#2805](https://github.com/OpenRefine/OpenRefine/issues/2805), [#2800](https://github.com/OpenRefine/OpenRefine/issues/2800))
* The split/join multivalued cells dialogs now remember the last separator used ([#2197](https://github.com/OpenRefine/OpenRefine/issues/2197))
* The `forEach` GREL function works on JSON objects ([#3149](https://github.com/OpenRefine/OpenRefine/issues/3149))
* A new GREL function `wholeText` can be used to extract all the text inside an XML element (including in its children) ([#3180](https://github.com/OpenRefine/OpenRefine/issues/3180))
* A dialog to confirm the removal of starred expressions was added ([#501](https://github.com/OpenRefine/OpenRefine/issues/501))
* HTTP host validation was added ([#3288](https://github.com/OpenRefine/OpenRefine/issues/3288))
* The Wikibase extension can now be used to add BCE dates ([#3816](https://github.com/OpenRefine/OpenRefine/issues/3816))
* The common cell transforms can be run on a selection of columns easily ([#1843](https://github.com/OpenRefine/OpenRefine/issues/1843))
* Greater numbers of rows per page can now be selected ([#3249](https://github.com/OpenRefine/OpenRefine/pull/3249)) (after 3.5-beta1)

### Incompatible changes

* The behavior of the `unescape` function has changed in CSV mode. Previously it would not remove the first and last quote characters from a string, due to a bug in the supporting library. Now it correctly removes these quotes. `unescape("mystring", "csv")` would return _"mystring"_ previously, but now will return _mystring_.
* The export format for Wikibase dates was adapted to match that of Wikibase itself. For instance, a year precision date was exported as `+1883-01-01T00:00:00Z` before and is now represented as `1883-00-00T00:00:00Z`. Therefore re-uploading statements with dates could potentially create duplicate statements. ([#3694](https://github.com/OpenRefine/OpenRefine/issues/3694))
* The behaviour of the reconciliation operation has changed: cells which could not be reconciled due to a service or network error are simply left unreconciled, instead of being identical to reconciled cells with no candidates ([#3369](https://github.com/OpenRefine/OpenRefine/issues/3369)) (after 3.5-beta1)
* Google authentication was fixed ([#3991](https://github.com/OpenRefine/OpenRefine/issues/3991)) (after 3.5-beta1)

### Bug fixes

* The fields of the form to connect to a SQL database better adapt to the type of database selected ([#2615](https://github.com/OpenRefine/OpenRefine/pull/2615))
* A bug in the way blank and error values are counted in text facets in records mode has been fixed ([#2588](https://github.com/OpenRefine/OpenRefine/issues/2588))
* Unescaped tabs in JSON files no longer result in a truncated import ([#1164](https://github.com/OpenRefine/OpenRefine/issues/1164))
* Plurals in translated UI text are now supported ([#2700](https://github.com/OpenRefine/OpenRefine/issues/2700))
* Encoding issues for the HTML exporter have been fixed ([#1197](https://github.com/OpenRefine/OpenRefine/issues/1197))
* Exporting a project to Google Drive uses the correct content type ([#2797](https://github.com/OpenRefine/OpenRefine/issues/2797))
* Import of dates from ODS files has been fixed ([#2224](https://github.com/OpenRefine/OpenRefine/issues/2224))
* HTTP errors are correctly reported when creating a project from a URL ([#2837](https://github.com/OpenRefine/OpenRefine/issues/2837))
* The form to add a new reconciliation is submitted when pressing Enter ([#2905](https://github.com/OpenRefine/OpenRefine/issues/2905))
* Dates are correctly imported from XLS files ([#1908](https://github.com/OpenRefine/OpenRefine/issues/1908))
* The service panel in the reconciliation dialog closes properly when a service is picked or deleted ([#2913](https://github.com/OpenRefine/OpenRefine/issues/2913), [#1658](https://github.com/OpenRefine/OpenRefine/issues/1658) [#3632](https://github.com/OpenRefine/OpenRefine/issues/3632))
* Format detection was improved ([#2850](https://github.com/OpenRefine/OpenRefine/issues/2850))
* The Import project UI is properly validated before being submitted ([#2369](https://github.com/OpenRefine/OpenRefine/issues/2369))
* The "Back" button in the importer configuration view displays correctly ([#2980](https://github.com/OpenRefine/OpenRefine/issues/2980))
* The number of clustering options displayed in the clustering dialog is capped to make sure they are displayed after a reasonable amount of time ([#695](https://github.com/OpenRefine/OpenRefine/issues/695))
* GREL function `sort` works on arrays which contain `null` values ([#3152](https://github.com/OpenRefine/OpenRefine/issues/3152))
* Removing a reconciliation service no longer selects it for reconciliation ([#2910](https://github.com/OpenRefine/OpenRefine/issues/2910))
* Pressing Enter in the dialog to add a column of entity identifiers from reconciled values submits the form ([#3163](https://github.com/OpenRefine/OpenRefine/issues/3163))
* The GREL `uniques` function now preserves order ([#3235](https://github.com/OpenRefine/OpenRefine/issues/3235))
* The fingerprint clusterer treats Unicode whitespace as blanks ([#3282](https://github.com/OpenRefine/OpenRefine/issues/3282))
* Error reporting when reconciliation services fail to provide type guesses has been improved ([#3173](https://github.com/OpenRefine/OpenRefine/issues/3173))
* The `phonetic` GREL function reports incompatible arguments better ([#3330](https://github.com/OpenRefine/OpenRefine/issues/3330))
* Resizing the expression editor now works correctly ([#3565](https://github.com/OpenRefine/OpenRefine/issues/3565))
* Links in GREL function descriptions are now correctly rendered ([#3579](https://github.com/OpenRefine/OpenRefine/issues/3579))
* The positioning of reconciliation previews was fixed ([#3028](https://github.com/OpenRefine/OpenRefine/issues/3028))
* The fetching of proposed properties in the data extension dialog was fixed for services supporting CORS only ([#3672](https://github.com/OpenRefine/OpenRefine/issues/3672))
* The facet panel is shown when a new facet is created ([#2891](https://github.com/OpenRefine/OpenRefine/issues/2891))
* Exporting projects with non-ASCII characters in their name has been fixed ([#3724](https://github.com/OpenRefine/OpenRefine/issues/3724))
* Invalid format constraints on Wikibase properties no longer breaks schemas ([#3274](https://github.com/OpenRefine/OpenRefine/issues/3274))
* Rotation support in the scatterplot facet was fixed ([#3344](https://github.com/OpenRefine/OpenRefine/issues/3344))
* Querying SQLite databases was fixed ([#3605](https://github.com/OpenRefine/OpenRefine/issues/3605)) (after 3.5-beta1)
* Clustering dialog now shows duplicate whitespace clearly ([#4004](https://github.com/OpenRefine/OpenRefine/issues/4004)) (after 3.5-beta1)
* A bug in the import of Google Sheets was fixed ([#3800](https://github.com/OpenRefine/OpenRefine/issues/3800)) (after 3.5-beta1)
* A bug in the "Use values as identifiers" operation was fixed, preventing the same reconciliation object to be assigned to multiple unrelated rows. ([#3785](https://github.com/OpenRefine/OpenRefine/issues/3785)) (after 3.5-beta1)
* The deprecated reconciliation service for Wikidata was replaced by a maintained one ([#4205](https://github.com/OpenRefine/OpenRefine/issues/4205)) (after 3.5-beta1)
* A useless waiting time before creating a batch of new items on Wikibase was removed ([#4226](https://github.com/OpenRefine/OpenRefine/issues/4226)) (after 3.5-beta1)
* A potential vulnerability in the allocation of file names during import was fixed ([#3043](https://github.com/OpenRefine/OpenRefine/issues/3043)) (after 3.5-beta1)
* The memory setting for the CLI on Windows and UNIX was fixed to also set the initial heap size ([#4265](https://github.com/OpenRefine/OpenRefine/issues/4265)) (after 3.5-beta2)

### For developers

* We have switched from using archive utilities from Apache Ant to Apache Commons ([#2690](https://github.com/OpenRefine/OpenRefine/issues/2690))
* We got rid of some unnecessary dependencies ([#3957](https://github.com/OpenRefine/OpenRefine/issues/3957), [#2961](https://github.com/OpenRefine/OpenRefine/issues/2961))


## Version 3.4

### New features

* We now offer a Windows package with embedded Java runtime engine (no need to install Java with this one) ([#2272](https://github.com/OpenRefine/OpenRefine/issues/2272))
* SQLite importer added ([#1951](https://github.com/OpenRefine/OpenRefine/issues/1951))
* More languages including Bengali, Chinese (Simplified), Czech, and Punjabi, as well as better coverage for existing languages including Cebuano, English (UK), French, German, Hungarian, Italian, Japanese, Korean, Norwegian Bokmål, and Portuguese (Brazil).
* Clojure updated to 1.10 ([#2608](https://github.com/OpenRefine/OpenRefine/issues/2608))
* Modal dialogs can now be closed with the ESC key ([#1018](https://github.com/OpenRefine/OpenRefine/issues/1018))
* A `cell.errorMessage` field has been added, to fetch the error message stored in a cell (it was originally `cell.error` in 3.4 beta) ([#525](https://github.com/OpenRefine/OpenRefine/issues/525))
* Google OAuth credentials for Google Sheets and Google Drive integration are configurable ([#2383](https://github.com/OpenRefine/OpenRefine/issues/2383))
* A new menu item was created to extract entity identifiers from a reconciled column ([#1975](https://github.com/OpenRefine/OpenRefine/issues/1975))
* It is now possible to quote all cell values in the custom tabular exporter ([#1869](https://github.com/OpenRefine/OpenRefine/issues/1869))
* An option was added in the CSV/TSV importer to strip whitespace in cell values ([#791](https://github.com/OpenRefine/OpenRefine/issues/791))
* The Google Sheets and Google Drive export have been added to the main "Export" menu ([#2453](https://github.com/OpenRefine/OpenRefine/issues/2453))
* The `cross` function now supports any value for input (instead of just cells) and is no longer restricted to the column where it is invoked ([#1950](https://github.com/OpenRefine/OpenRefine/issues/1950))
* The `cross` function now works for any type of cell value ([#2461](https://github.com/OpenRefine/OpenRefine/issues/2461))
* It is now possible to configure the `maxlag` value used by the Wikidata extension by setting `wikibase.upload.maxLag` to some integer in the preferences  (in 3.4 beta, it was `wikibase:upload:maxLag` and that was renamed later to match the naming convention of other preferences) ([#2304](https://github.com/OpenRefine/OpenRefine/issues/2304))
* Facets can be minimized ([#2553](https://github.com/OpenRefine/OpenRefine/issues/2553))
* Excel XLSX export column limit increased from 256 to 16K columns ([#2600](https://github.com/OpenRefine/OpenRefine/issues/2600))
* Character encoding detection added for import ([#486](https://github.com/OpenRefine/OpenRefine/issues/486))


### Bug fixes

* A data corruption issue affecting expression history, saved reconciliation services and preferences with multinational characters on Windows has been fixed ([#2543](https://github.com/OpenRefine/OpenRefine/issues/2543), [#2544](https://github.com/OpenRefine/OpenRefine/issues/2544), [#2627](https://github.com/OpenRefine/OpenRefine/issues/2627))
* The Mac package is now signed again.
* A data loss issue when importing multiple tables into a single project has been fixed ([#1792](https://github.com/OpenRefine/OpenRefine/issues/1792))
* Loading SQL data with the database extension was fixed ([#2281](https://github.com/OpenRefine/OpenRefine/issues/2281))
* Many issues with the Google Sheets exporter have been fixed ([#2760](https://github.com/OpenRefine/OpenRefine/issues/2760), [#2306](https://github.com/OpenRefine/OpenRefine/issues/2306), [#2785](https://github.com/OpenRefine/OpenRefine/issues/2785), [#2786](https://github.com/OpenRefine/OpenRefine/issues/2786))
* Exporting twice is no longer blocked by the use of the same blank tab in Chrome ([#1664](https://github.com/OpenRefine/OpenRefine/issues/1664))
* QuickStatement exporter supports multiple references on the same statement ([#2320](https://github.com/OpenRefine/OpenRefine/issues/2320))
* OpenRefine opens the browser on a localhost URL rather than 0.0.0.0 when listening from any address ([#2336](https://github.com/OpenRefine/OpenRefine/issues/2336))
* The modal dialog for the key-value columnize dialog can now be resized, making it easier to work with long column names ([#898](https://github.com/OpenRefine/OpenRefine/issues/898))
* The delay before the text filter updates the filtered rows has been increased ([#2112](https://github.com/OpenRefine/OpenRefine/issues/2112))
* The TSV export of facet values now uses a non-editable textarea ([#2374](https://github.com/OpenRefine/OpenRefine/issues/2374))
* The Google Sheets importer accepts a wider range of URL formats ([#2380](https://github.com/OpenRefine/OpenRefine/issues/2380))
* The incorrect linking between checkboxes and labels in JSON and XML importer configurations was fixed ([#2388](https://github.com/OpenRefine/OpenRefine/issues/2388), [#2393](https://github.com/OpenRefine/OpenRefine/issues/2393))
* A infinite loop in the XML importer configuration UI was fixed ([#2402](https://github.com/OpenRefine/OpenRefine/issues/2402))
* The reconciliation configuration panel takes into account column checkboxes correctly ([#2230](https://github.com/OpenRefine/OpenRefine/issues/2230))
* Trimming strings in the JSON / XML importers has been fixed ([#2409](https://github.com/OpenRefine/OpenRefine/issues/2409))
* Sheet selection in the Google Sheet importer has been fixed ([#2307](https://github.com/OpenRefine/OpenRefine/issues/2307))
* Auto-complete for Wikidata edit summary was fixed for Chrome ([#1778](https://github.com/OpenRefine/OpenRefine/issues/1778))
* Pressing "Enter" in the URL field to create a project from a URL correctly submits the URL ([#2437](https://github.com/OpenRefine/OpenRefine/issues/2437))
* The overflow of translations in menu items was fixed ([#2454](https://github.com/OpenRefine/OpenRefine/issues/2454), [#974](https://github.com/OpenRefine/OpenRefine/issues/974))
* The Add column by fetching URLs correctly fetches gzip-compressed responses ([#2031](https://github.com/OpenRefine/OpenRefine/issues/2031))
* Error handling in the JSON importer was improved ([#2403](https://github.com/OpenRefine/OpenRefine/issues/2403))
* Error handling for memory management in the `./refine` script was improved ([#388](https://github.com/OpenRefine/OpenRefine/issues/388))
* The mouse pointer when hovering draggable elements in the Wikidata schema was fixed ([#2484](https://github.com/OpenRefine/OpenRefine/issues/2484))
* Fixed detection of XML files from their MIME type when downloading them from a URL ([#2420](https://github.com/OpenRefine/OpenRefine/issues/2420))
* A bug preventing users from logging in to Wikidata due to a change on Wikidata's side on 2010-04-08 was fixed ([#2526](https://github.com/OpenRefine/OpenRefine/issues/2526))
* Columns named `toString` or other Javascript object methods are no longer displayed as collapsed ([#2451](https://github.com/OpenRefine/OpenRefine/issues/2451))
* Pressing Enter in the Wikidata login and edit summary forms submits the corresponding dialogs ([#2459](https://github.com/OpenRefine/OpenRefine/issues/2459))
* The datatype of a cell is correctly pre-filled when editing its value ([#2424](https://github.com/OpenRefine/OpenRefine/issues/2424))
* The MIME types used for Excel export have been fixed ([#2595](https://github.com/OpenRefine/OpenRefine/issues/2595))
* The `type` GREL function returns `boolean` for boolean values ([#2150](https://github.com/OpenRefine/OpenRefine/issues/2510))
* The preferences page displays correctly in languages other than English ([#2765](https://github.com/OpenRefine/OpenRefine/issues/2765))
* Export of multinational characters outside the Basic Multilingual Plane (BMP) fixed ([#1197](https://github.com/OpenRefine/OpenRefine/issues/1197))
* References to Freebase in messages and code were removed ([#2029](https://github.com/OpenRefine/OpenRefine/issues/2029), [#1973](https://github.com/OpenRefine/OpenRefine/issues/1973), [#2345](https://github.com/OpenRefine/OpenRefine/issues/2345))
* Redirects are correctly followed during reconciliation ([#2906](https://github.com/OpenRefine/OpenRefine/issues/2906))
* A race condition making it impossible to edit the Wikidata schema has been fixed ([#2803](https://github.com/OpenRefine/OpenRefine/issues/2803))

### For developers

* It is now possible to configure local development settings in `refine-dev.ini` instead of `refine.ini`. ([#2480](https://github.com/OpenRefine/OpenRefine/issues/2480))
* Packaging windows and linux distributions separately is now possible ([#2477](https://github.com/OpenRefine/OpenRefine/issues/2477))
* Proper plural support for translations enabled [not used everywhere yet] ([#2700](https://github.com/OpenRefine/OpenRefine/issues/2700))

## Older versions

* [Changes for 3.3](https://github.com/OpenRefine/OpenRefine/wiki/Changes-for-3.3)
* [Changes for 3.2](https://github.com/OpenRefine/OpenRefine/wiki/Changes-for-3.2)
* [Changes for 3.1](https://github.com/OpenRefine/OpenRefine/wiki/Changes-for-3.1)
* [Changes for 2.5](https://github.com/OpenRefine/OpenRefine/wiki/Changes-for-2.5)
* [Changes for 2.1](https://github.com/OpenRefine/OpenRefine/wiki/Changes-for-2.1)
* [Changes for 2.0](https://github.com/OpenRefine/OpenRefine/wiki/Changes-for-2.0)
