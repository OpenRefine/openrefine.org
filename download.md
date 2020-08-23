---
layout: page
title: Download
sidebar_link: true
---

You will find on this page a list of OpenRefine distributions and extensions available for download. Are we missing something? Want to fix a typo? You can submit changes (pull request) [from here](https://github.com/OpenRefine/openrefine.github.com/blob/master/download.md).

 
## Official Distribution

Read the [installation instructions](https://github.com/OpenRefine/OpenRefine/wiki/Installation-Instructions)

You can also download all official releases and source from our [GitHub releases page](https://github.com/OpenRefine/OpenRefine/releases/)

### OpenRefine 3.3
The final release of OpenRefine 3.3, released on January 31, 2020. Please [backup your workspace directory](https://github.com/OpenRefine/OpenRefine/wiki/Back-Up-OpenRefine-Data) before installing and report any problems that you encounter. A change log is provided on [the release page](https://github.com/OpenRefine/OpenRefine/releases/tag/3.3).

+ **[Windows kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.3/openrefine-win-3.3.zip)**, 
Download, unzip, and double-click on _openrefine.exe_. If you're 
having issues with the above, try double-clicking on _refine.bat_ instead.
+ **[Mac kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.3/openrefine-mac-3.3.dmg)**, 
Download, open, drag icon into the Applications folder and double click on it. If you encounter a security warning,
see [workaround](https://github.com/OpenRefine/OpenRefine/wiki/Installation-Instructions#macos). 
+ **[Linux kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.3/openrefine-linux-3.3.tar.gz)**, 
Download, extract, then type _./refine_ to start.

### OpenRefine 3.4 beta 2
The second beta release of OpenRefine 3.4, released on July 4, 2020. Please [backup your workspace directory](https://github.com/OpenRefine/OpenRefine/wiki/Back-Up-OpenRefine-Data) before installing and report any problems that you encounter. A change log is provided on [the release page](https://github.com/OpenRefine/OpenRefine/releases/tag/3.4-beta2).

+ **[Windows kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.4-beta2/openrefine-win-3.4-beta2.zip)**, 
This requires Java to be installed on your computer. Download, unzip, and double-click on _openrefine.exe_ or _refine.bat_ if the latter does not work.
+ **[Windows kit with embedded Java](https://github.com/OpenRefine/OpenRefine/releases/download/3.4-beta2/openrefine-win-with-java-3.4-beta2.zip)**, 
Download, unzip, and double-click on _openrefine.exe_ or _refine.bat_ if the latter does not work.
+ **[Mac kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.4-beta2/openrefine-mac-3.4-beta2.dmg)**, 
Download, open, drag icon into the Applications folder and double click on it. You do not need to install Java separately. 
+ **[Linux kit](https://github.com/OpenRefine/OpenRefine/releases/download/3.4-beta2/openrefine-linux-3.4-beta2.tar.gz)**, 
Download, extract, then type _./refine_ to start. This requires Java to be installed on your computer.

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

You can install the following extensions to add functionalities to OpenRefine. See [how to install an extension](https://github.com/OpenRefine/OpenRefine/wiki/Installing-Extensions).

| Extension Name | Description | Authors |
|--------------|-------------|----------|
| [(FAIR) metadata](https://github.com/FAIRDataTeam/OpenRefine-metadata-extension) | Support [FAIR](https://www.go-fair.org/fair-principles/) **metadata** by integrating with [FAIR Data Point](https://github.com/FAIRDataTeam/FAIRDataPoint) (metadata storage) and various data storages. It is a successor of the legacy [FAIRifier](https://github.com/FAIRDataTeam/FAIRifier) (OpenRefine 2.6 fork) | [FAIRDataTeam](https://github.com/FAIRDataTeam/OpenRefine-metadata-extension/graphs/contributors) |
| [RDF extension Latest](https://github.com/stkenny/grefine-rdf-extension/blob/orefine/README.md) for OpenRefine 3.0+ | RDF Refine - an improved fork of OpenRefine extension for exporting RDF |  stkenny http://www.dri.ie/ | 
| [RDF extension 0.9](https://github.com/fadmaa/grefine-rdf-extension/releases) for OpenRefine 2.6 and prior| RDF Refine - an older version of RDF extension for exporting RDF |  DERI  | 
| [Opentree](https://github.com/nickynicolson/refine-opentree) |  An extension for Google/Open Refine to display phylogenetic trees from the Open Tree of Life |  nickynicolson  | 
| [BioVel](https://github.com/BioVeL/refine-ext)  |  The BioVeL Extension adds functionality specific to cleaning biodiversity data. The entire package can be installed and run locally as well as on a dedicated server. |  Botanic Garden and Botanical Museum Berlin-Dahlem | 
| [GeoRefine](https://github.com/ryanfb/georefine) | Add Geospatial processing GREL functions for OpenRefine |  Ryan Baumann | 
| [String-Transformers](https://github.com/RBGKew/String-Transformers) | A collection of Java string transformers, suitable for use with OpenRefine. Some generic, some aimed at botany and taxonomy. | RBGKew | 
| [CKAN Extension Storage for OpenRefine 2.6-beta1 and CKANv2.2+](https://github.com/Ontodia/openrefine-ckan-storage-extension) | Upload data directly from OpenRefine using CKAN storage API | Ontodia | 
| [GOKB](https://github.com/k-int/gokb-phase1) | The GOKb extension will allow you to use OpenRefine to check in a project, resolve errors and warnings, and ingest data into GOKb. | 
| [Crowdsourcing](https://github.com/sparkica/crowdsourcing) | An extension for OpenRefine for creating jobs and uploading data to CrowdFlower crowdsourcing service |  Zemanta  | 
| [DBpedia extension](https://github.com/sparkica/dbpedia-extension) |  This project is an extension for Google Refine and provides easy way to add columns from DBpedia to reconciled data (columns). Data has to be reconciled with DBpedia or SPARQL endpoint, which returns DBpedia resource types.  |  Zemanta | 
| History tools, pivot tool, cross function gui, and scatterplot tool using D3 |  A manual is provided via the download page. The project is coded in Javascript solely so the code distributed is also the source code  | VIB-BITS | 
| Diff plugin |  A manual is provided via the download page. The project is coded in Javascript solely so the code distributed is also the source code  | VIB-BITS | 
| [LMF Extension](https://bitbucket.org/srfgkmt/lmf/wiki/Google-Refine-Extension) | The Linked Media Framework is an easy-to-setup server application that bundles together some key open source projects to offer some advanced services for linked media management. The core development of this project has been moved to Apache Marmotta  |  Salzburg Research | 
| [Named-Entity Recognition](https://github.com/stkenny/Refine-NER-Extension) | With this extension, you can enrich text fields right from your workspace. It supports AlchemyAPI, DBpedia Lookup and Zemanta.  - see also their [documentation](http://freeyourmetadata.org/named-entity-extraction/)  |  Ruben Verborgh (Free Your Metadata) and Stuart Kenny | 
| [Stats extension for Google Refine 2.1](https://github.com/newsapps/refine-stats)  | A extension for OpenRefine to compute elementary statistics on a column data. | the Chicago Tribune | 
| [Stats extension for Google Refine 2.5+](https://github.com/sparkica/refine-stats) | A extension for OpenRefine to compute elementary statistics on a column data.  | sparkica  | 
| [extraCTU-plugin](https://github.com/giTorto/geoXtension) | to extract E-mails, Telephone numbers, Urls and the Identification Numbers from a messy text | giTorto |
| [geoXtension](https://github.com/giTorto/geoXtension) | geoXtension is based on gdal, proj and geos libraries. Adding this extension to OpenRefine takes a lot of time, usage of the ready-made docker is recommended |  giTorto  | 
| [D2Refine](https://github.com/caCDE-QA/D2Refine) | A clinical study metadata harmonization and validation workbench to 1) convert restrictions (specified in a spreadsheet like interface) into a clinical model; and 2) provide metadata reconciliation services leveraging the Common Terminology Services 2 (CTS2) |  Deepak K. Sharma https://github.com/dksharma | 

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
