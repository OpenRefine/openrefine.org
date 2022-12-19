---
author: Martin Magdinier
title: "2020 survey results"
slug: 2020/02/20/2020-survey-results
---

The results of our fourth OpenRefine user survey are out! We received 178 responses in less than four weeks (vs. 122 in 2018 over seven months)! 

<!--truncate-->

The goal of the study is to keep an accurate and up to date picture of the OpenRefine community. When possible, we compared the 2020 results with our previous survey. You can view the full details of the [2012](http://googlerefine.blogspot.ca/2012/10/google-refine-usage-survey-results.html), [2014](http://openrefine.org/blog/2014/08/29/2014-survey-results.html), and [2018](http://openrefine.org/blog/2018/07/16/2018-survey-results.html) surveys

## Community you identify with

While librarians remain the largest group (37.64%), Wikidata contributor (and semantic web users - 12.92%) made an entry as the second-largest user group in 2020! Researchers now rank third with 10.7% of the user base. Note the community Archivist was not suggested in the answer but still gather 4.49% of the answer! 

[![](/img/2020survey/1.png)](/img/2020survey/1.png)

##  How often do you use OpenRefine

Usage frequency remains globally the same since 2012, with about a third using OpenRefine weekly, a third using it monthly, and a third using it less than once per month. Note that we did not offer the option _Less than once a month_ in the 2012 survey and remove the First time user option after 2012.

[![](/img/2020survey/21.png)](/img/2020survey/21.png)


## For how long have you been using OpenRefine

Users with over two years of experience keep growing years over the years and now 57% of the user base (vs. 51% in 2018). We take it as a positive fact where we can keep our user base while being able to attract new users. 

Note that in the below analysis, we included users that never used OpenRefine in the less than six months group (five respondents in 2014, nine in 2018, three in 2020). 

[![](/img/2020survey/23.png)](/img/2020survey/23.png)

## How will you rate your skills using OpenRefine

In all our previous surveys, we asked respondents to rate their skills from one to five. One being a novice in Refine and five being a master. The number of novice respondents dropped in 2020 from 16% to 7%. The skills level is related to the frequency of usage and not to the years of experience. No matter how long you have been using GREL, you got to practice it every day to improve!

[![](/img/2020survey/24.png)](/img/2020survey/24.png)

## Version of OpenRefine

While the majority are using the latest stable version at the time of the survey (OpenRefine 3.2)

[![](/img/2020survey/3.png)](/img/2020survey/3.png)

## High-level tasks you do with OpenRefine

Usage breakdown remains stable compared to the 2012 and 2018 survey. With two notables differences: 
* Preparing data to load into another system ranks now second with over 73% of the respondents (vs. 66% in 2018)
* Now more than half of the OpenRefine users use the reconciliation feature (44% in 2018 to 54% in 2020).
* We see a net decrease in OpenRefine for data discovery (understand data you don't own) or preparing for data visualization. 


[![](/img/2020survey/4.png)](/img/2020survey/4.png)

Note: Respondents can select multiple answers. Click on the image to enlarge it.

## Do you use plugin or extension?

72% of the respondents do not use plugins or extension; 11% installed only one plugin, and 17% of them installed more than one. Overall we see a drop in usage for many plugins.

The top three plugins are: 
* RDF extension - by DERI - 19.7%
* Named-Entity Recognition - by Ruben Verborgh (Free Your Metadata) - 13.9%
* History tools, cross cell tools, pivot tool and scatterplot tool using D3 - by VIB-BITS - 10.9%

The DBpedia extension has not been updated for seven years, but its usage grew from 5.7% two years ago to 10.9% in 2020. The usage of DBpedia is not linked to any particular community (6 librarians, 3 for-profits, 2 archivists, and one for cultural heritage, data scientist, researcher and wikidata contributor). Any explanation is welcome!

[![](/img/2020survey/5.png)](/img/2020survey/5.png)

Note: Respondents can select multiple answers. We consolidated the 41 blank answers with _I don't use plugin or extension_. Click on the image to enlarge it.

## Do you use a reconciliation service?

In 2020, close to 65% of OpenRefine users connect to a reconciliation service! This is massive progress from 48% two years ago! 26.52% of the respondents use more than one service versus 18.03% in 2018.

While Wikidata (45%) and VIAF (22%) dominate the list, we see new services not listed in 2018:
* GND (six respondents)
* Getty Vocabularies (three respondents)
* in-house reconciliation service (three respondents)
* Open Library (one respondent)
* ORCID (one respondent)
* Organized Crime and Corruption Reporting Project (one respondent)
* Planning to use with Linked Data Finland's datasets (one respondent)
* Sharedshelf Built Work Registry Reconciliation Service (one respondent)
* SNAC (one respondent)
* Nomisma (one respondent)

[![](/img/2020survey/6.png)](/img/2020survey/6.png)

Note: Respondents can select multiple answers. Click on the image to enlarge it. 

## Perception of Refine: 

The following word clouds are more eye-pleasing than an in-depth analysis.

### Why did you choose OpenRefine (Which features)

Wikidata makes a nice entry on the list!

[![](/img/2020survey/reason.png)](/img/2020survey/reason.png)

### Alternative tools

Excel, R, python and Google Sheets remain the mains alternative to OpenRefine. 

[![](/img/2020survey/alternative.png)](/img/2020survey/alternative.png)


### Word used to describe OpenRefine

The most common expressions to describe OpenRefine are "Excel on steroid" and "a data cleaning tool."

[![](/img/2020survey/describe.png)](/img/2020survey/describe.png)

### From the Feature Request and Anything to add

We compiled below suggestions and feature requests submitted via the survey. 

## Features Request


* Improve performance and support larger dataset  (7 requests) - this is on the 2020 roadmap and under development on the 4.x branch!
* Better UX (6 requests)
* Online support with user login and permission (4 requests)
* Make regex expression easier to build (4 requests)
* An easier installation process, potentially with a standalone java (4 requests)
* List in OpenRefine all plugins available (4 requests) 
* List in OpenRefine all the reconciliation service available (3 requests)
* Better support for hierarchical data (2 requests)
* Allow to memory from the front end (2 requests)
* Would let me choose where I can store my files!
* Have real Title Case transforms that left articles like A, An, And, The lowercased as well as prepositions instead of capitalizing each word.
* Add row to a project
* Support POST request
* Ability to save facet
* Allow extensions to be written in python. 

## Wikidata Related

* Support editing and uploading to  Structured Data on Commons: see ticket [#2144](https://github.com/OpenRefine/OpenRefine/issues/2144), and external Wikibases (2 requests)
* Better error handling when uploading to Wikidata (2 requests)
* Had improved Wikidata integration, particularly more control over modifying existing statements including qualifiers and references
* Support wikicode
* Build automated Wikidata ingest pipelines

## Improve History

We received three separate requests to improve the history in the way described in our roadmap. 

Respondents asked for an easier way to edit/tweak operation history (i.e. adjust an edit made multiple steps ago without losing subsequent steps). It would be nice if cell provenance could be accessed programmatically or via the interface. So, for instance, in terms of rewinding to a certain state, it would be nice to know at what step a cell/row/column last changed, or what the previous state of the cell/row/column was, or what the state was at a particular step.


## Plugin to support in core


* RDF (6 requests)
* csv reconcile (5 requests). See ticket [#2003](https://github.com/OpenRefine/OpenRefine/issues/2003) and part of [Google Summer of Code 2020 proposal](https://github.com/OpenRefine/OpenRefine/wiki/GSoC-2020%C2%A0Ideas#reconciliation-server-within-openrefine)
* Vib-bits (3 requests)
* NER (3 requests)

## Training 

* Make OpenRefine better known (5 requests)
* Make GREL more accessible. Possibly with more contextual help or a GREL-formula builder (3 requests)
* Provide more documentation on how to use reconciliation services and the different plugins (3 requests)
* Improve the onboarding.
* Provide more workshop and training on OpenRefine 
