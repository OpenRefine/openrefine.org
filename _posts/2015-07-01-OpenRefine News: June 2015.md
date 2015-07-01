---
  layout: post
  author: magdmartin
  title: "OpenRefine News: June 2015"
---

Currently most of the communication around OpenRefine done is through the mailing list and our twitter account where information are quickly buried for someone not following the project on day to day basis. Those monthly summary highlights key events and contributions in the community and hopefully help to better circulate key information. 

Feedback on the format and content are welcome. Ping us on twitter [@OpenRefine](http://twitter.com/OpenRefine) if we are missing information.

## New Tutorials and Articles

If you are new to OpenRefine, Alvin Chang published an excellent [introduction to clustering](http://trendct.org/2015/04/24/john-jonathan-and-johnny-how-to-merge-them-in-open-refine/) maybe OpenRefine most appreciated feature with new users. For more advanced users, [@UMBHLCuration](http://twitter.com/UMBHLCuration) published a tutorial on [Normalizing Dates with OpenRefine](http://archival-integration.blogspot.ca/2015/06/normalizing-dates-with-openrefine.html).

At the Toronto OpenRefine UnConference, I presented on [Iterative data discovery and transformation with OpenRefine](http://www.slideshare.net/MartinMagdinier/iterative-data-discovery-and-transformation-with-open-refine) explaining why OpenRefine is an essential tool for non technical subject matter expert when working with data. To dig further on the topic with the article [Agile Data Process with OpenRefine.](http://ow.ly/OMC6X) 

If you are working in a library. Checkout the records of this month NCompass Live: [Metadata Manipulations: Using MarcEdit and OpenRefine](http://nlc.nebraska.gov/scripts/calendar/eventshow.asp?ProgID=14290). [@silviaegt](http://twitter.com/silviaegt) also published his slides of hisDHBenelux talk with links to [VIAF reconc. for OpenRefine & cartoDB](https://prezi.com/atejujdtq8g9/literary-constellations/).

Finally a great use case presented by [@hpiedcoq](http://twitter.com/hpiedcoq) and [@jvilledieu](http://twitter.com/jvilledieu): [How to visualize your Facebook network](http://ow.ly/OkxZG) with OpenRefine outwit and Neo4j.


We also have a new resource published in French: [Créer un référentiel pour le #LOD avec #OpenRefine et #Gingo](http://t.co/npSEf6TJH8) by @Invisu](http://twitter.com/) 
and in Italian: [Tutorial per come farsi del geocoding in casa partendo da un elenco di indirizzi](http://ow.ly/NOxBi)

## Development Update

### OpenRefine2.6 RC1

Over the last three months we received update to translate OpenRefine interface in Spanish and French. The  This will complete the current English, Italian and Chineese version. 

We are currently testing the [2.6 RC1 version](https://github.com/OpenRefine/OpenRefine/releases/tag/v2.6-rc1) as a quick checkpoint to allow us to verify all the fixes that have been made since beta 1 and figure out what remaining loose ends need to be cleaned up. More information on the [developer mailing list](https://groups.google.com/d/msg/openrefine-dev/eip_ikUiNvA/voPoHqkuS0EJ)

### Reconciliation and Matching Framework (RMF)

https://github.com/RBGKew/Reconciliation-and-Matching-Framework
[Matthew Blissett](https://github.com/MattBlissett) with the support of the [Royal Botanic Gardens](http://www.kew.org/) in London are releasing [Reconciliation and Matching Framework (RMF)](https://github.com/RBGKew/Reconciliation-and-Matching-Framework), a framework to allow the matching of string entities using customised sets of transformations and matchers, plus a tool to produce the necessary configurations and another to expose them as OpenRefine reconciliation services. 



###GOKB annoucement:

GOKb, the Global Open Knowledgebase, is a community-managed project that aims to describe electronic journals and books, publisher packages, and platforms which host the resources. GOKb use OpenRefine (with a specially designed extension) as our major mechanism of getting data into GOKb - exploiting the ability to clean up the data (which tends to come from publishers and can be of variable quality) and to re-apply changes to future data from the same publisher/supplier.

GOKb opened to ‘public preview’ in January 2015, and you can signup for an account and access the service at https://gokb.kuali.org/gokb/

Several hundred ejournal packages, and associated information about the ejournal titles, platforms and organisations have been added to the knowledgebase over the past few months. OpenRefine is used to do much of the work to get data ready for loading into GOKb.

Alongside this work of adding content GOKb have also opened up APIs to interact with the service, which could be useful to others using OpenRefine to work with data relating to journals. In particular the ‘Coreference service’ allows you to look up identifiers (such as ISSNs) and get back journal title information and other IDs associated with that title (as JSON or XML).

They are interested in:

* Talking to people who use OpenRefine and would like to make use of such a service
* If there is some interest, what support/documentation people would like to see
* Understanding if we can offer different/better services based on the GOKb data for OpenRefine (e.g. would different data GOKb has be of interest? Would a reconciliation service for journal titles? etc.)

More details and join the discussion on the [user mailing list](https://groups.google.com/d/msg/openrefine/c_BM4H9jk2o/x4ED1VB_WwUJ)


##Workshop and Events

OpenRefine Twitter feed have been busy last months with over 12 presentations of OpenRefine made! Thank you to our evangelists who introduce OpenRefine to librians, journalist, goverement and open date professional among other groups. Top hastag are: 

<a href="http://3.bp.blogspot.com/-T8LGwAEz3YQ/VZQvLSKD9NI/AAAAAAAANKE/j8k6PoN6YZM/s1600/news-june2015.png"><img src="http://3.bp.blogspot.com/-T8LGwAEz3YQ/VZQvLSKD9NI/AAAAAAAANKE/j8k6PoN6YZM/s1600/news-june2015.png" class="inset" /></a>

Want to connect with fellow Refiners? The following events have been announced so far. Ping us on twitter [@OpenRefine](http://twitter.com/) to announce your event:

* [Several Cleaning & Exploring data w OpenRefine workshop](http://tinyurl.com/nsjrhmm) available through July with #DH2015 in Australia. 
* [The Data Scientist Training for Librarians (DST4L)](http://ow.ly/NOxgm) comes to Copenhagen with an all day OpenRefine session Sep 9: 
* UMBHLCuration will be doing a workshop on structured data wrangling w/Python and OpenRefine for the midmichdp at Albion College on October 8th.
