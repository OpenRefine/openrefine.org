---
layout: page
title: Download
sidebar_link: true
---

On this page you will find a list of OpenRefine distributions and extensions available for download. Are we missing something? Want to fix a typo? You can [submit changes](https://github.com/OpenRefine/openrefine.github.com/blob/master/download.md).

 
## Official Distribution

Read the [installation instructions](https://docs.openrefine.org/manual/installing).

You can also download all official releases and source from our [GitHub releases page](https://github.com/OpenRefine/OpenRefine/releases/)

### OpenRefine 3.5.0
The latest stable release of OpenRefine 3.5.0, released on November 7, 2021. Please [backup your workspace directory](https://docs.openrefine.org/manual/installing#back-up-your-data) before installing and report any problems that you encounter. A change log is provided on [the release page](https://github.com/OpenRefine/OpenRefine/releases/tag/3.5.0).

+ **[Windows kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.5.0/openrefine-win-3.5.0.zip)**, 
This requires Java to be installed on your computer. Download, unzip, and double-click on _openrefine.exe_ or _refine.bat_ if the former does not work.
+ **[Windows kit with embedded Java](https://github.com/OpenRefine/OpenRefine/releases/download/3.5.0/openrefine-win-with-java-3.5.0.zip)**, 
includes [OpenJDK Java](https://adoptopenjdk.net/about.html), available under the [GPLv2+CE](https://openjdk.java.net/legal/gplv2+ce.html) license. Download, unzip, and double-click on _openrefine.exe_ or _refine.bat_ if the former does not work.
+ **[Mac kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.5.0/openrefine-mac-3.5.0.dmg)**, 
Download, open, drag icon into the Applications folder and double click on it. You do not need to install Java separately. 
+ **[Linux kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.5.0/openrefine-linux-3.5.0.tar.gz)**, 
Download, extract, then type _./refine_ to start. This requires Java to be installed on your computer.

### OpenRefine 3.4.1
The previous stable release of OpenRefine, released on September 24, 2020. Please [backup your workspace directory](https://docs.openrefine.org/manual/installing#back-up-your-data) before installing and report any problems that you encounter. A change log is provided on [the release page](https://github.com/OpenRefine/OpenRefine/releases/tag/3.4.1).

+ **[Windows kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.4.1/openrefine-win-3.4.1.zip)**, 
This requires Java to be installed on your computer. Download, unzip, and double-click on _openrefine.exe_ or _refine.bat_ if the former does not work.
+ **[Windows kit with embedded Java](https://github.com/OpenRefine/OpenRefine/releases/download/3.4.1/openrefine-win-with-java-3.4.1.zip)**, 
includes [OpenJDK Java](https://adoptopenjdk.net/about.html), available under the [GPLv2+CE](https://openjdk.java.net/legal/gplv2+ce.html) license. Download, unzip, and double-click on _openrefine.exe_ or _refine.bat_ if the former does not work.
+ **[Mac kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.4.1/openrefine-mac-3.4.1.dmg)**, 
Download, open, drag icon into the Applications folder and double click on it. You do not need to install Java separately. 
+ **[Linux kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.4.1/openrefine-linux-3.4.1.tar.gz)**, 
Download, extract, then type _./refine_ to start. This requires Java to be installed on your computer.

## Other Distributions

The following distributions have been customized for a specific usage or integration with other technologies. 

| Distribution | Description |  Authors |
|--------------|-------------|----------|
| [LODRefine](https://github.com/sparkica/LODRefine)    | LODRefine is actually OpenRefine with integrated extensions that make transition from tabular data to Linked Data a bit easier. Integrated extensions are: RDF extension, DBpedia extension, CrowdFlower crowdsourcing extension, Stats extension | Sparkica | 
| [OpenDataRise](https://github.com/opendatatrentino/OpenDataRise) | Tool to cleanse and semantify datasets from CKAN repositories. Based on OpenRefine. | Open Data in Trentino  |
| [p3-batchrefine](https://github.com/fusepoolP3/p3-batchrefine) | BatchRefine adds batch processing capabilities to OpenRefine and support multiple back end including spark | SpazioDati | 
| [RefineOnSpark](https://github.com/andreybratus/RefineOnSpark) | RefineOnSpark is a driver program to run OpenRefine jobs on the Spark cluster | SpazioDati | 
| [Reconciliation-and-Matching-Framework](https://github.com/RBGKew/Reconciliation-and-Matching-Framework) | A framework to allow the matching of string entities using customised sets of transformations and matchers, plus a tool to produce the necessary configurations and another to expose them as OpenRefine reconciliation services.  | RBGKew | 
| [OntoRefine](http://graphdb.ontotext.com/documentation/free/loading-data-using-ontorefine.html) | GraphDB OntoRefine is a data transformation tool, based on OpenRefine and integrated in the GraphDB Workbench. It can be used for converting tabular data into RDF and importing it into a GraphDB repository, using simple SPARQL queries and a virtual endpoint.  | Ontotext |

## List of Extensions 

You can install the following extensions to add functionalities to OpenRefine. We do not vouch for the function of any of these extensions. Some only work with earlier version of OpenRefine, or with third-party distributions. See [how to install an extension](https://docs.openrefine.org/manual/installing#installing-extensions).

| Extension Name | Description | Authors | Latest compatible version |
|--------------|-------------|----------|----------|
| [FAIR metadata](https://github.com/FAIRDataTeam/OpenRefine-metadata-extension) | Supports [FAIR](https://www.go-fair.org/fair-principles/) metadata by integrating with [FAIR Data Point](https://github.com/FAIRDataTeam/FAIRDataPoint) to [store your data and export to FAIR](https://fairdatapoint.readthedocs.io/en/latest/openrefine/usage.html#features). It is a successor of the legacy [FAIRifier](https://github.com/FAIRDataTeam/FAIRifier) OpenRefine 2.6 fork. [Manual](https://fairdatapoint.readthedocs.io/en/latest/openrefine/setup.html). | [FAIRDataTeam](https://github.com/FAIRDataTeam/OpenRefine-metadata-extension/graphs/contributors) | 3.4.1 |
| [VIB-Bits](https://www.bits.vib.be/index.php/software-overview/openrefine) |  Adds history tools, pivot tool, cross() graphical user interface (GUI), and scatterplot tool. [Manual PDF](http://data.bits.vib.be/hidden/g7dt6RjuUTU421dY2CwrGePGX/OpenRefine%20VIB-BITS%20plugin.pdf). | VIB-Bits | 3.4.1 |
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
| [VIB-BITS Diff plugin](https://web.archive.org/web/20190412064426/https://www.bits.vib.be/index.php/software-overview/openrefine) | Adds a "diff" tool which compares two text values. [Manual PDF](https://web.archive.org/web/20210203090522/https://data.bits.vib.be/hidden/g7dt6RjuUTU421dY2CwrGePGX/OpenRefine%20VIB-BITS%20diff%20plugin.pdf). |   VIB-Bits  | 3.4.1. [The VIB website states "We are investigating how to provide [the diff plugin] again with version 3.4 of OpenRefine."](https://www.bits.vib.be/index.php/software-overview/openrefine) |
| [VIB-BITS Save facets plugin](https://web.archive.org/web/20190412064426/https://www.bits.vib.be/index.php/software-overview/openrefine) | Adds support for save facet settings and re-apply the same facets at a later time. [Manual PDF](https://web.archive.org/web/20150325214740/http://data.bits.vib.be/hidden/g7dt6RjuUTU421dY2CwrGePGX/OpenRefine%20VIB-BITS%20save%20facets%20plugin.pdf).  |   VIB-Bits  | Unknown. [The VIB website states "We are investigating how to provide [the diff plugin] again with version 3.4 of OpenRefine."](https://www.bits.vib.be/index.php/software-overview/openrefine) |
| [geoXtension](https://github.com/giTorto/geoXtension) | geoXtension is based on GDAL, Proj, and GEOS libraries. Adding this extension takes a lot of time, usage of the ready-made docker is recommended. |  giTorto  | (circa 2.6) |
| [geoXtension](https://github.com/giTorto/geoXtension) | geoXtension is based on GDAL, Proj, and GEOS libraries. Adding this extension takes a lot of time, usage of the ready-made docker is recommended. |  giTorto  | (circa 2.6) |
| [extraCTU-plugin](https://github.com/giTorto/extraCTU-plugin) | To extract e-mails, telephone numbers, URLs and identification numbers from text. | giTorto | (circa 2.7) |
| [Opentree](https://github.com/nickynicolson/refine-opentree) |  Displays phylogenetic trees from the Open Tree of Life. [Manual](https://github.com/nickynicolson/refine-opentree/wiki). |  nickynicolson  | 2.5 |
| [BioVeL](https://github.com/BioVeL/refine-ext)  | Adds functions for cleaning & clustering biodiversity data. The entire package can be installed and run locally as well as on a dedicated server. |  Botanic Garden and Botanical Museum Berlin-Dahlem | 2.5 |
| [DBpedia extension](https://github.com/sparkica/dbpedia-extension) |  Adds columns from DBpedia to reconciled data. Data has to be reconciled with DBpedia or SPARQL endpoint, which returns DBpedia resource types. |  Zemanta | 2.5 |
| [Stats extension for Google Refine 2.1](https://github.com/newsapps/refine-stats)  | Computes elementary statistics on column data. | The Chicago Tribune | 2.1 |

## Reconciliation Services

OpenRefine can connect to several reconciliation services. Please read our wiki for a [list of them](https://github.com/OpenRefine/OpenRefine/wiki/Reconcilable-Data-Sources).

## Client Libraries

You can automate some OpenRefine operations using one of the existing libraries. Those libraries are using the [OpenRefine API](https://github.com/OpenRefine/OpenRefine/wiki/OpenRefine-API).
* [python](https://github.com/PaulMakepeace/refine-client-py/)
  * [fork with extended CLI](https://github.com/felixlohmeier/openrefine-client)
* An other [python](https://github.com/maxogden/refine-python) library
* [ruby](https://github.com/maxogden/refine-ruby)
* [javascript - nodejs](https://github.com/pm5/node-openrefine)
* [R](https://cran.r-project.org/web/packages/rrefine/index.html)
* [php](https://github.com/keboola/openrefine-php-client)
* [java](https://github.com/dtap-gmbh/refine-java)
* [bash](https://gist.github.com/felixlohmeier/d76bd27fbc4b8ab6d683822cdf61f81d)
* [C# - .NET Core](https://github.com/ADelRosarioH/OpenRefine.Net)
