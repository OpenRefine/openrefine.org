---
title: Extensions
description: Enhance OpenRefine with extensions built by the community.
hide_table_of_contents: true
---

# OpenRefine extensions

You can install the following extensions to add functionalities to OpenRefine. We do not vouch for the function of any of these extensions. Some only work with earlier version of OpenRefine, or with third-party distributions. See [how to install an extension](https://docs.openrefine.org/manual/installing#installing-extensions).

| Extension Name | Description | Authors | Latest compatible version |
|--------------|-------------|----------|----------|
| [AI Extension](https://github.com/sunilnatraj/llm-extension) | The OpenRefine AI Extension bridges the power of modern language models with OpenRefine's robust data transformation capabilities. | [Sunil Natraj](https://github.com/sunilnatraj) | 3.8.7+ |
| [Files Extension](https://github.com/OpenRefine/FilesExtension) | Tool to create project with detailed information of files from local system | [Sunil Natraj](https://github.com/sunilnatraj) | 3.8.7+ |
| [gdata extension](https://github.com/OpenRefine/refine-gdata-extension) | Import from and export to Google Drive and Google Sheets | Tom Morris | 3.9 |
| [RDF Transform](https://github.com/AtesComp/rdf-transform) | Transform data into RDF formats. Based on the [RDF extension](https://github.com/stkenny/grefine-rdf-extension). However, it has been thoroughly rewritten to incorporate the newer Java and JavaScript technologies, techniques, and process enhancements. | [AtesComp](https://github.com/AtesComp) | 3.8+ |
| [Commons extension](https://github.com/OpenRefine/CommonsExtension) | Utilities to improve the process of extracting structured data from existing files on [Wikimedia Commons](https://commons.wikimedia.org/wiki/) | [Joey Salazar](https://github.com/j-sal), [Sandra Fauconnier](https://github.com/trnstlntk) | 3.6 |
| [Refine JS](https://github.com/wetneb/refine-js) | Support for Javascript as expression language for OpenRefine | [wetneb](https://github.com/wetneb) | 3.6+ |
| [OpenRefine Command Palette](https://codeberg.org/abbe98/openrefine-command-palette) | A command palette and keyboard acceleration extension for OpenRefine | [Albin Larsson](https://codeberg.org/abbe98) | 3.7+ |
| [OpenRefine Hex Colors](https://codeberg.org/abbe98/openrefine-hex-colors) | Detects and renders hex colors inside of cells. | [Albin Larsson](https://codeberg.org/abbe98) | 3.7+ |
| [GEO Extension](https://github.com/OpenRefine/openrefine-geo-extension) | Adds geographic coordinate processing functions: decToGMS() converts decimal degrees to degrees/minutes/seconds format, and geoDistance() calculates great circle distance between coordinate pairs using the Haversine formula. | [SashankBhamidi](https://github.com/SashankBhamidi) | 3.8+ |
| [OSM Extractor](https://gitlab.com/labiangashi/osm-extractor) | Adds a new import option that allows you to import [OpenStreetMap](https://www.openstreetmap.org/) data into OpenRefine using the [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API). Also adds a new GREL function called interiorPoint() which extracts the [interior point](https://locationtech.github.io/jts/javadoc/org/locationtech/jts/algorithm/InteriorPoint.html) of any Geometry (represented using [Well-Known Text](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry)). | [Labian Gashi](https://gitlab.com/labiangashi) | 3.5.0 |
| [GeoJSON Export](https://gitlab.com/labiangashi/geojson-export) | Adds a Graphical User Interface (GUI) that allows you to export OpenRefine data to the [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON) format. Supports latitude/longitude coordinates and [Well-known Text (WKT)](https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry). | [Labian Gashi](https://gitlab.com/labiangashi) | 3.5.0 |
| [SNAC extension](https://github.com/snac-cooperative/snac-openrefine-extension) | Allows [SNAC](https://snaccooperative.org/) edits to be made via OpenRefine | [Joseph Glass](https://github.com/glassjoseph), [Robbie Hott](https://github.com/deternitydx), [Jason Jordan](https://github.com/jlj5aj) | 3.4.1 |
| [FAIR metadata](https://github.com/FAIRDataTeam/OpenRefine-metadata-extension) | Supports [FAIR](https://www.go-fair.org/fair-principles/) metadata by integrating with [FAIR Data Point](https://github.com/FAIRDataTeam/FAIRDataPoint) to [store your data and export to FAIR](https://fairdatapoint.readthedocs.io/en/latest/openrefine/usage.html#features). It is a successor of the legacy [FAIRifier](https://github.com/FAIRDataTeam/FAIRifier) OpenRefine 2.6 fork. [Manual](https://fairdatapoint.readthedocs.io/en/latest/openrefine/setup.html). | [FAIRDataTeam](https://github.com/FAIRDataTeam/OpenRefine-metadata-extension/graphs/contributors) | 3.4.1 |
| [VIB-Bits](http://web.archive.org/web/20210817193059/https://www.bits.vib.be/index.php/software-overview/openrefine) |  Adds history tools, pivot tool, cross() graphical user interface (GUI), and scatterplot tool. [Manual PDF](http://web.archive.org/web/20210817193059/http://data.bits.vib.be/hidden/g7dt6RjuUTU421dY2CwrGePGX/OpenRefine%20VIB-BITS%20plugin.pdf) | VIB-Bits | 3.4.1 |
| [Named-Entity Recognition](https://github.com/stkenny/Refine-NER-Extension) | Extracts identifiable or reconcilable entities from text fields. It supports AlchemyAPI, DBpedia Lookup, and Zemanta. [Manual](http://freeyourmetadata.org/named-entity-extraction/). |  [Ruben Verborgh](https://freeyourmetadata.org/) and Stuart Kenny | 3.4.1 |
| [String-Transformers](https://github.com/RBGKew/String-Transformers) | Adds a collection of Java string transformers to Jython functions. Some generic, some aimed at botany and taxonomy. Download [this](https://repo1.maven.org/maven2/org/kew/rmf/string-transformers/0.2.0/string-transformers-0.2.0.jar) and [this](https://repo1.maven.org/maven2/org/apache/commons/commons-lang3/3.3.2/commons-lang3-3.3.2.jar) and follow their [installation instructions](https://github.com/RBGKew/String-Transformers). | RBGKew | 3.4.1 |
| [RDF extension](https://github.com/stkenny/grefine-rdf-extension) | RDF Refine - an improved fork for exporting RDF. Adds a graphical user interface (GUI) for exporting data in RDF format.  |  [stkenny](https://github.com/stkenny) & [DRI](https://github.com/Digital-Repository-of-Ireland) | 3.4.1 |
| [GOKb Utilities](https://github.com/ostephens/refine-gokbutils) | Adds three new features: prepend rows (add new blank rows); trim all data (remove preceding/trailing whitespace from across all cells); extractHost() (GREL function that extracts a host name from a URL). | [GOKb](http://www.gokb.org) & [Owen Stephens](https://github.com/ostephens/) | 3.1 |
| [Stats extension for Google Refine 2.5+](https://github.com/sparkica/refine-stats) | Computes elementary statistics on column data.  | sparkica  | 3.1 |
| [CKAN Storage Extension](https://github.com/Ontodia/openrefine-ckan-storage-extension) | Exports data to CKAN Storage 2.2+ using CKAN storage API. | Ontodia | 3.1 |
| [GeoRefine](https://github.com/ryanfb/georefine) | Add geospatial processing GREL functions. |  Ryan Baumann | 2.8 |
| [D2Refine](https://github.com/caCDE-QA/D2Refine) | A clinical study metadata harmonization and validation workbench to 1) convert restrictions (specified in a spreadsheet-like interface) into a clinical model; and 2) provide reconciliation services leveraging the Common Terminology Services 2 (CTS2). [Manual](https://github.com/caCDE-QA/D2Refine/wiki). |  [Deepak K. Sharma](https://github.com/dksharma) | 2.7 |

### Legacy Extensions

These extensions were produced in the past and are good examples of desired uses of OpenRefine. They are maintained here for historical reference, and in case a contributor would like to renew them.

| Extension Name | Description | Authors | Suggested compatible version |
|--------------|-------------|----------|----------|
| [LODRefine](https://github.com/sparkica/LODRefine)    | LODRefine is actually OpenRefine with integrated extensions that make transition from tabular data to Linked Data a bit easier. Integrated extensions are: RDF extension, DBpedia extension, CrowdFlower crowdsourcing extension, Stats extension | Sparkica |
| [VIB-BITS Diff plugin](https://web.archive.org/web/20190412064426/https://www.bits.vib.be/index.php/software-overview/openrefine) | Adds a "diff" tool which compares two text values. [Manual PDF](https://web.archive.org/web/20210203090522/https://data.bits.vib.be/hidden/g7dt6RjuUTU421dY2CwrGePGX/OpenRefine%20VIB-BITS%20diff%20plugin.pdf). |   VIB-Bits  | 3.4.1. [The VIB website states "We are investigating how to provide [the diff plugin] again with version 3.4 of OpenRefine."](https://www.bits.vib.be/index.php/software-overview/openrefine) |
| [VIB-BITS Save facets plugin](https://web.archive.org/web/20190412064426/https://www.bits.vib.be/index.php/software-overview/openrefine) | Adds support for save facet settings and re-apply the same facets at a later time. [Manual PDF](https://web.archive.org/web/20150325214740/http://data.bits.vib.be/hidden/g7dt6RjuUTU421dY2CwrGePGX/OpenRefine%20VIB-BITS%20save%20facets%20plugin.pdf).  |   VIB-Bits  | Unknown. [The VIB website states "We are investigating how to provide [the diff plugin] again with version 3.4 of OpenRefine."](https://www.bits.vib.be/index.php/software-overview/openrefine) |
|[refine-fuzzymatch-extension](https://github.com/yatszhash/refine-fuzzymatch-extension)|OpenRefine extension for fuzzy matching/reconcilation|[yatszhash](https://github.com/yatszhash)|2.8|
| [geoXtension](https://github.com/giTorto/geoXtension) | geoXtension is based on GDAL, Proj, and GEOS libraries. Adding this extension takes a lot of time, usage of the ready-made docker is recommended. |  giTorto  | (circa 2.6) |
| [extraCTU-plugin](https://github.com/giTorto/extraCTU-plugin) | To extract e-mails, telephone numbers, URLs and identification numbers from text. | giTorto | (circa 2.7) |
| [Opentree](https://github.com/nickynicolson/refine-opentree) |  Displays phylogenetic trees from the Open Tree of Life. [Manual](https://github.com/nickynicolson/refine-opentree/wiki). |  nickynicolson  | 2.5 |
| [BioVeL](https://github.com/BioVeL/refine-ext)  | Adds functions for cleaning & clustering biodiversity data. The entire package can be installed and run locally as well as on a dedicated server. |  Botanic Garden and Botanical Museum Berlin-Dahlem | 2.5 |
| [DBpedia extension](https://github.com/sparkica/dbpedia-extension) |  Adds columns from DBpedia to reconciled data. Data has to be reconciled with DBpedia or SPARQL endpoint, which returns DBpedia resource types. |  Zemanta | 2.5 |
| [Stats extension for Google Refine 2.1](https://github.com/newsapps/refine-stats)  | Computes elementary statistics on column data. | The Chicago Tribune | 2.1 |

## Reconciliation services

OpenRefine can connect to several reconciliation services. You can find information about them at:
* [Reconcilable Data Sources](https://github.com/OpenRefine/OpenRefine/wiki/Reconcilable-Data-Sources) in our wiki
* [Reconciliation Software](https://reconciliation-api.github.io/census/services/) at the Reconciliation API Census
* [Reconciliation Services](https://reconciliation-api.github.io/testbench/#/) at the Reconciliation API testbench (generated by a [SPARQL query on Wikidata](https://w.wiki/5agG))

## Client libraries

You can automate some OpenRefine operations using one of the existing libraries. Those libraries are using the [OpenRefine API](/docs/technical-reference/openrefine-api).

| Language  | Name |
|-----------|------|
| bash      | [orcli](https://github.com/opencultureconsulting/orcli) |
| C# / .NET | [OpenRefine.Net](https://github.com/ADelRosarioH/OpenRefine.Net) |
| java      | [refine-java](https://github.com/ancore/refine-java) |
| python    | [openrefine-client](https://github.com/opencultureconsulting/openrefine-client) |
| R         | [rrefine](https://cran.r-project.org/web/packages/rrefine/index.html) |

### Legacy client libraries

OpenRefine 3.3 [introduced CSRF tokens](https://github.com/OpenRefine/OpenRefine/wiki/Changes-for-3.3#csrf-protection-changes). The following client libraries have not yet adapted their API calls.

| Language   | Name | Latest compatible OpenRefine version |
|------------|------|--------------------------------------|
| javascript | [node-openrefine](https://github.com/pm5/node-openrefine) | 3.2 |
| python     | [refine-client-py](https://github.com/PaulMakepeace/refine-client-py/) | 3.2 |
| python     | [refine-python](https://github.com/maxogden/refine-python) | 3.2 |
| ruby       | [refine-ruby](https://github.com/distillytics/refine-ruby) (fork) | 3.2 |
| ruby       | [refine-ruby](https://github.com/maxogden/refine-ruby) | 3.2 |
