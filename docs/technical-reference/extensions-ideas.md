---
id: extension-ideas
title: Extensions Ideas
sidebar_label: Extension Ideas
---

This page lists ideas of possible extensions which have been requested in the past.
Because they are specific to a particular domain, it would probably be better to implement those features as extensions rather than in OpenRefine directly.

Feel free to add more ideas!

### OAI-PMH import

The [OAI-PMH](https://www.openarchives.org/pmh/) protocol is a standard that libraries, archives or other scholarly repositories use to expose collections of documents. The protocol can be used to retrieve the list of documents available in the collection, with standardized metadata.
It is supported by [thousands of repositories covering a wide range of domains](http://www.openarchives.org/Register/BrowseSites).
Currently, there is no simple way to import data from such a repository into OpenRefine. With an OAI-PMH extension, the user would be able to create a project by providing an OAI-PMH endpoint, alongside other parameters to configure the ingestion of records (such as an OAI "set" to restrict the download to). The extension would then take care of making the appropriate calls to the endpoint, handling pagination and translating the results into a table suitable for further processing in OpenRefine.

**Open questions**
* OAI-PMH allows for various metadata formats to represent each item in the collection a server exposes. How should we translate those records to an OpenRefine project?
* What would users typically use this for? It could be worth asking the Library Carpentry community (which offers an OpenRefine lesson) to understand if/how they would use this.

**Related discussions**: 
* https://mamot.fr/@pintoch/111841610572874330

### IIIF import

The [IIIF format](https://en.wikipedia.org/wiki/International_Image_Interoperability_Framework) (pronounced "triple I F") is a standard to publish images online, with advanced metadata. It is a popular format for cultural institutions to published digitizations of their collections. OpenRefine could offer a way to import an IIIF collection as an OpenRefine project. This would let users work on the corresponding metadata. Combining this with our integration with Wikimedia Commons, this could help users upload collections represented in IIIF to Wikimedia Commons.
We would have a new import workflow (based on a custom importing controller) to create a project from a IIIF collection root URL. This will require exposing some settings to control the way in which the project is created (to which depth should the IIIF collection should be crawled, for instance). This functionality could be built into the [Commons extension](https://github.com/OpenRefine/CommonsExtension) or a new OpenRefine extension.

**Open questions**
* How can we represent the rich metadata allowed by IIIF in a tabular format?
* Regarding the combination with our Wikimedia Commons integration, what sort of data cleaning steps are we expecting users to do between the IIIF import and the Commons upload? It would be great to try working with a few example collections to understand the data cleaning processes that are required. If no human intervention should be required in many cases, then could be a sign that this should perhaps not be built as an OpenRefine extension, but rather a standalone IIIF to Commons exporter (unrelated to OpenRefine).

**Related discussions**: 
* https://github.com/OpenRefine/CommonsExtension/issues/90
* https://github.com/OpenRefine/CommonsExtension/issues/19

### OFX import

The OFX format can be used to represent financial data streams. It is for instance offered by many banks to export the transactions in a bank account. It could be useful to be able to import such files in OpenRefine easily. This would enable searching through large transactions lists via OpenRefine's faceting capabilities, or categorizing transactions via various criteria for instance.
There might be existing Java implementations that can be used as a starting point, such as https://github.com/stoicflame/ofx4j. 

**Open questions**
* Is this the best format to go for, or are there other formats which would be more strategic to support?
* Are there typical formats in which this sort of data tends to be exported after cleaning?
* Would this add sufficient value, over using an external converter from OFX to CSV for instance?

### Wikidata lexemes upload

Wikidata has added support for lexemes, a type of Wikibase entity that is tailored to represent lexicographical data, with the intention of offering structured data akin to Wiktionary.
Currently the Wikibase extension in OpenRefine is only able to edit or create items or media files with structured data (`MediaInfo` entities, internally), and can therefore not be used to edit lexemes. Adding support for that has been requested many times.

**Open questions**
* What sorts of datasets would such an integration be used on?
* How can the deeply nested structure of lexemes (with embedded forms and senses) be worked with in OpenRefine's tabular environment?
* Would it be possible to make the set of entity types supported by the Wikibase extension extensible itself, so that support for lexemes could be added by another extension? If so, support for media upload could then be also migrated to the Commons extension. Given that there is specific treatment of entities depending on their type in a lot of places in the code, this seems like a rather complicated undertaking

**Related discussions**: 
* https://github.com/OpenRefine/OpenRefine/issues/2240
* https://forum.openrefine.org/t/openrefine-support-for-lexemes-in-wikidata-how-would-you-use-this/216

### Anonymize data

Build an extension that can expose and show users risk metrics of a dataset with PII and allow them options to remove (void) data as well as anonymize data. There are some libraries that offer utility and algorithms to assess risk and allow anonymization as well as pseudonymization, the later of which is still useful sometimes depending on needs, although not true anonymization and sometimes is not compliant enough with GDPR standards as well as others.

https://github.com/arx-deidentifier/arx
https://github.com/realrolfje/anonimatron

**Related discussions**: 
* https://github.com/OpenRefine/OpenRefine/issues/5642
