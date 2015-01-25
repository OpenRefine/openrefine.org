---
  layout: post
  author: magdmartin
  title: "Mapping OpenRefine Ecosystem"
---

Since the OpenRefine move to Github two years ago, the project has reached a mature stage, and only maintenance work has been done with the release of openrefine2.6-beta. At the same time, the project kept gaining traction with over a thousand weekly downloads and usage with various audiences in particular fields of application. One out of four OpenRefine users identifies himself as a librarian, with Researchers and Open Data enthusiasts representing the second largest user group, and Data Journalists and Semantic Web Professionals completing the picture (see the full [2014 survey results](http://openrefine.org/2014/08/29/2014-survey-results.html))

OpenRefine offers an innovative workflow from data ingestion to consumption, with a capacity to reconcile information consistency and work with remote data processing services. It integrates with over 16 reconciliation services and has 8 community contributed plugins that extend its capability. You can interact directly with the API of 4 other platforms within the context of tasks in OpenRefine alchemyAPI, Zemanta, dataTXT and Crowdflower. The following map lists the different services and plugins working with OpenRefine, as well as projects that have done heavy customization to add OpenRefine in their data manipulation processes.

## Map of OpenRefine Ecosystem

<a href="https://raw.github.com/OpenRefine/openrefine.github.com/master/images/2015-01-23-Mapping-OpenRefine-Ecosystem/openrefine-map.png"><img src="/images/2015-01-23-Mapping-OpenRefine-Ecosystem/openrefine-map.png" class="inset" /></a>

The full list of the reconciliation services is up to date on [OpenRefine wiki](https://github.com/OpenRefine/OpenRefine/wiki/Reconcilable-Data-Sources), link to each the extension are available on the [download page](http://openrefine.org/download.html). Integration and extensions can be broken down by user community types:

## General Usage
[Several extensions](http://openrefine.org/download.html) are available to add new functionality to OpenRefine:

- Diff 
- Stats calculate
- BITS VIB
- NER extension
- extraCTU and geoXtension

[Custom reconciliation services](https://github.com/OpenRefine/OpenRefine/wiki/Reconcilable-Data-Sources#general) can be build using the following project developed by the [OpenKnowledge Foundation](https://okfn.org/):

- Reconcile-csv, 
- nomenklatura 
- SPARQL endpoints. 

[RefinePro](http://refinepro.com) offer hosted services (cloud and on-premise) of OpenRefine providing extra compute power, access from multiple devices and multi user management.

Finally a [python](https://github.com/maxogden/refine-python) and [ruby](https://github.com/maxogden/refine-ruby) library enable batch processing of the history of an OpenRefine project.

## Librarians 
Directly from OpenRefine, [six different reconciliation services](https://github.com/OpenRefine/OpenRefine/wiki/Reconcilable-Data-Sources#librarians) are available to librarians:

- Vivo
- FundRef
- JournalTOCs
- VIAF
- FAST (Faceted Application of Subject Terminology) Reconciliation
- Library of Congress Subject Headings

Librarians with a [Global Open Knowledge base (GOKB)](https://gokb.kuali.org/gokb/) account can export and import data directly to this repository of electronic journals and books, publisher packages. The [GOKB extension](https://github.com/k-int/gokb-phase1) tightly integrate OpenRefine with GOKB workflow.

## Open Data	 	 	
In Open Data, users of CKAN, the Open Source data portal software edited by the Open Knowledge Foundation, can prepare (normalize, cleanup, etc.) their data before publishing them via [OpenDataRise](https://github.com/opendatatrentino/OpenDataRise), a distribution of OpenRefine. [OpenDataRise](https://github.com/opendatatrentino/OpenDataRise), allows also insertion/update of entities to a target knowledge base, for now the only reconciliation service supported is Entitypedia (which is yet to go public). Other services might get eventually supported. 

Directly from OpenRefine, several [reconciliation services](https://github.com/OpenRefine/OpenRefine/wiki/Reconcilable-Data-Sources#open-data) are available to the open data community:

- Influencer Explorer from the Sunlight foundation
- dbpedia
- OpenCorporate
- Ordnance Survey

## Biodiversity Researchers
Biodiversity researchers benefit from direct access to [seven reconciliation services](https://github.com/OpenRefine/OpenRefine/wiki/Reconcilable-Data-Sources#biodiversity-researchers) including:

- EOL
- NCBI taxonomy
- Ubio FindIT
- WORMS
- GBIF
- Global Names Index
- IPNI

## Semantic Web
Semantic Web Professionals have access to the RDF and Link Media Framewok (LMF) [extensions](http://openrefine.org/download.html) to produce and consume linked data. The [LODRefine distribution](https://github.com/sparkica/LODRefine) integrated extensions that make transition from tabular data to Linked Data a bit easier. 

## Under Development Projects
**SparkRefine** - right now it's just a prototype developed by Andrey Bratus, bachelor's student at the university of Trento in Italy with Spaziodati in the context of the [Fusepool P3 project](http://p3.fusepool.eu/). The initial results are avaialbe in [Andrey’s thesis](http://d3s.disi.unitn.it/~mega/andrey_thesis.pdf), but the [codebase](https://github.com/andreybratus/RefineOnSpark) is not in particularly good shape.

**[BatchRefine](https://github.com/fusepoolP3/p3-batchrefine)** is a collection of wrappers for running OpenRefine in batch mode developed by Spaziodati for Fusepool P3.
 
**[Redfine](http://dev.redlink.io/)** is Redlink internal bundle of OpenRefine. The project is currently in development as they integrate some internal services into Redlink public API.

## Deprecated
The freebase extension is [partly broken](https://github.com/OpenRefine/OpenRefine/issues/805) and freebase announce the [sunset of their services in 2015](https://plus.google.com/109936836907132434202/posts/bu3z2wVqcQc).  The crowdflower extension should update to the new version of crowdflower’s API.
