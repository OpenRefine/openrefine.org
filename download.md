---
layout: page
title: Download
sidebar_link: true
---

You will find on this page a list of OpenRefine distributions and extensions available for download. Are we missing something? Want to fix a typo? You can submit changes (pull request) [from here](https://github.com/OpenRefine/openrefine.github.com/blob/master/download.md).

 
## Official Distribution

Read the [installation instructions](https://docs.openrefine.org/manual/installing).

You can also download all official releases and source from our [GitHub releases page](https://github.com/OpenRefine/OpenRefine/releases/)

### OpenRefine 3.4.1
The latest stable release of OpenRefine 3.4.1, released on September 24, 2020. Please [backup your workspace directory](https://docs.openrefine.org/manual/installing#back-up-your-data) before installing and report any problems that you encounter. A change log is provided on [the release page](https://github.com/OpenRefine/OpenRefine/releases/tag/3.4.1).

+ **[Windows kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.4.1/openrefine-win-3.4.1.zip)**, 
This requires Java to be installed on your computer. Download, unzip, and double-click on _openrefine.exe_ or _refine.bat_ if the former does not work.
+ **[Windows kit with embedded Java](https://github.com/OpenRefine/OpenRefine/releases/download/3.4.1/openrefine-win-with-java-3.4.1.zip)**, 
includes [OpenJDK Java](https://adoptopenjdk.net/about.html), available under the [GPLv2+CE](https://openjdk.java.net/legal/gplv2+ce.html) license. Download, unzip, and double-click on _openrefine.exe_ or _refine.bat_ if the former does not work.
+ **[Mac kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.4.1/openrefine-mac-3.4.1.dmg)**, 
Download, open, drag icon into the Applications folder and double click on it. You do not need to install Java separately. 
+ **[Linux kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.4.1/openrefine-linux-3.4.1.tar.gz)**, 
Download, extract, then type _./refine_ to start. This requires Java to be installed on your computer.


### OpenRefine 3.3
The stable release of OpenRefine 3.3, released on January 31, 2020. Please [backup your workspace directory](https://docs.openrefine.org/manual/installing#back-up-your-data) before installing and report any problems that you encounter. A change log is provided on [the release page](https://github.com/OpenRefine/OpenRefine/releases/tag/3.3).

+ **[Windows kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.3/openrefine-win-3.3.zip)**, 
Download, unzip, and double-click on _openrefine.exe_. If you're 
having issues with the above, try double-clicking on _refine.bat_ instead.
+ **[Mac kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.3/openrefine-mac-3.3.dmg)**, 
Download, open, drag icon into the Applications folder and double click on it. If you encounter a security warning,
see [workaround](https://github.com/OpenRefine/OpenRefine/wiki/Installation-Instructions#macos). 
+ **[Linux kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.3/openrefine-linux-3.3.tar.gz)**, 
Download, extract, then type _./refine_ to start.

## Other Distributions

The following distributions have been customized for a specific usage or integration with other technologies. 

| Distribution | Description |  Authors |
|--------------|-------------|----------|
| [LODRefine](https://github.com/sparkica/LODRefine)    | LODRefine is actually OpenRefine with integrated extensions that make transition from tabular data to Linked Data a bit easier. Integrated extensions are: RDF extension, DBpedia extension, Crowdsourcing extension, Stats extension | Sparkica | 
| [OpenDataRise](https://github.com/opendatatrentino/OpenDataRise) | Tool to cleanse and semantify datasets from CKAN repositories. Based on OpenRefine. | Open Data in Trentino  |
| [p3-batchrefine](https://github.com/fusepoolP3/p3-batchrefine) | BatchRefine adds batch processing capabilities to OpenRefine and support multiple back end including spark | SpazioDati | 
| [RefineOnSpark](https://github.com/andreybratus/RefineOnSpark) | RefineOnSpark is a driver program to run OpenRefine jobs on the Spark cluster | SpazioDati | 
| [Reconciliation-and-Matching-Framework](https://github.com/RBGKew/Reconciliation-and-Matching-Framework) | A framework to allow the matching of string entities using customised sets of transformations and matchers, plus a tool to produce the necessary configurations and another to expose them as OpenRefine reconciliation services.  | RBGKew | 
| [OntoRefine](http://graphdb.ontotext.com/documentation/free/loading-data-using-ontorefine.html) | GraphDB OntoRefine is a data transformation tool, based on OpenRefine and integrated in the GraphDB Workbench. It can be used for converting tabular data into RDF and importing it into a GraphDB repository, using simple SPARQL queries and a virtual endpoint.  | Ontotext |

## List of Extensions 

You can install the following extensions to add functionalities to OpenRefine. We do not vouch for the function of any of these extensions. Some only work with earlier version of OpenRefine, or with third-party distributions. See [how to install an extension](https://docs.openrefine.org/manual/installing#installing-extensions).

| Extension Name | Description | Authors | Latest compatible version |
|--------------|-------------|----------|----------|
| [FAIR metadata](https://github.com/FAIRDataTeam/OpenRefine-metadata-extension) | Supports [FAIR](https://www.go-fair.org/fair-principles/) metadata by integrating with [FAIR Data Point](https://github.com/FAIRDataTeam/FAIRDataPoint) (metadata storage) and various data storages. It is a successor of the legacy [FAIRifier](https://github.com/FAIRDataTeam/FAIRifier) OpenRefine 2.6 fork. | [FAIRDataTeam](https://github.com/FAIRDataTeam/OpenRefine-metadata-extension/graphs/contributors) | 3.4.1 |
| [VIB-Bits](https://www.bits.vib.be/index.php/software-overview/openrefine) |  Adds history tools, pivot tool, cross function GUI, and scatterplot tool using D3. [Manual PDF](http://data.bits.vib.be/hidden/g7dt6RjuUTU421dY2CwrGePGX/OpenRefine%20VIB-BITS%20plugin.pdf). | VIB-Bits | 3.4.1 |
| [Named-Entity Recognition](https://github.com/stkenny/Refine-NER-Extension) | Enriches text fields. It supports AlchemyAPI, DBpedia Lookup, and Zemanta. [Manual](http://freeyourmetadata.org/named-entity-extraction/). |  [Ruben Verborgh](https://freeyourmetadata.org/) and Stuart Kenny | 3.4.1 |
| [String-Transformers](https://github.com/RBGKew/String-Transformers) | Adds a collection of Java string transformers to Jython functions. Some generic, some aimed at botany and taxonomy. Download [this](https://repo1.maven.org/maven2/org/kew/rmf/string-transformers/0.2.0/string-transformers-0.2.0.jar) and [this](https://repo1.maven.org/maven2/org/apache/commons/commons-lang3/3.3.2/commons-lang3-3.3.2.jar). | RBGKew | 3.4.1 |
| [RDF extension](https://github.com/stkenny/grefine-rdf-extension) | RDF Refine - an improved fork for exporting RDF. |  [stkenny](https://github.com/stkenny) & [DRI](https://github.com/Digital-Repository-of-Ireland) | 3.4.1 |
| [RDF extension 0.9](https://github.com/fadmaa/grefine-rdf-extension/releases) | RDF Refine - an older version for exporting RDF. |  DERI  | 2.6 |
| [GOKb](https://github.com/ostephens/refine-gokbutils) | Checks a project, resolves errors and warnings, and exports data to GOKb. | [GOKb](www.gokb.org) & [Owen Stephens](https://github.com/ostephens/) | 3.1 |
| [GeoRefine](https://github.com/ryanfb/georefine) | Add Geospatial processing GREL functions. |  Ryan Baumann | 2.8 |
| [Crowdsourcing](https://github.com/sparkica/crowdsourcing) | Creates jobs and exports data to CrowdFlower crowdsourcing service. |  Zemanta  | _Suggests LODRefine_ |
| [Stats extension for Google Refine 2.5+](https://github.com/sparkica/refine-stats) | Computes elementary statistics on column data.  | sparkica  | 3.1 |
| [Stats extension for Google Refine 2.1](https://github.com/newsapps/refine-stats)  | Computes elementary statistics on column data. | the Chicago Tribune | 2.1 |
| [CKAN Extension Storage for OpenRefine 2.6-beta1 and CKANv2.2+](https://github.com/Ontodia/openrefine-ckan-storage-extension) | Exports data to CKAN Storage using CKAN storage API. | Ontodia | 3.1 |
| [CKAN Extension Storage  v0.1 (alpha)](https://github.com/fadmaa/grefine-ckan-storage-extension) |  Exports data to CKAN Storage and connected to a package on a running CKAN instance. Released 2014-03-06. | DERI | _Not working_ (suggests 2.5) | 
| [D2Refine](https://github.com/caCDE-QA/D2Refine) | A clinical study metadata harmonization and validation workbench to 1) convert restrictions (specified in a spreadsheet like interface) into a clinical model; and 2) provide reconciliation services leveraging the Common Terminology Services 2 (CTS2). [Manual](https://github.com/caCDE-QA/D2Refine/wiki). |  Deepak K. Sharma https://github.com/dksharma | _Not working_ (suggests 2.7) |
| [extraCTU-plugin](https://github.com/giTorto/extraCTU-plugin) | Extracts e-mails, telephone numbers, URLs and identification numbers from text. | giTorto | _Not working_ (circa 2.7) |
| [geoXtension](https://github.com/giTorto/geoXtension) | geoXtension is based on GDAL, Proj, and GEOS libraries. Adding this extension takes a lot of time, usage of the ready-made docker is recommended. |  giTorto  | _Not working_ (circa 2.6) |
| [Opentree](https://github.com/nickynicolson/refine-opentree) |  Displays phylogenetic trees from the Open Tree of Life. |  nickynicolson  | _Not working_ (suggests 2.5) |
| [BioVeL](https://github.com/BioVeL/refine-ext)  | Adds functions for cleaning biodiversity data. The entire package can be installed and run locally as well as on a dedicated server. |  Botanic Garden and Botanical Museum Berlin-Dahlem | _Not working_ (suggests 2.5) |
| [DBpedia extension](https://github.com/sparkica/dbpedia-extension) |  Adds columns from DBpedia to reconciled data. Data has to be reconciled with DBpedia or SPARQL endpoint, which returns DBpedia resource types. |  Zemanta | _Not working_ (circa 2.5) |

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
