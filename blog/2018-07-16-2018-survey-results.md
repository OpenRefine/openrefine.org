---
author: Martin Magdinier
title: "2018 survey results"
slug: 2018/07/16/2018-survey-results
---

From December 12, 2017, to June 7, 2018, we ran our third OpenRefine user survey.  Over five months; we received 122 responses. The goal of the study is to keep an accurate and up to date picture of the OpenRefine community. When possible, we compared the 2018 results with our previous survey. You can view the full details of the [2012](http://googlerefine.blogspot.ca/2012/10/google-refine-usage-survey-results.html) and [2014](http://openrefine.org/blog/2014/08/29/2014-survey-results.html) surveys.

## Community you identify with

Librarians and researchers remain the two largest user group with 28.69%  and 15.57% of the respondents (which is consistent with the 2014 results). We can notice the Data Science, and Non-Profit organization groups increased since 2014.

[![](/img/2018survey/1.png)](/img/2018survey/1.png)

##  How often do you use OpenRefine

Usage frequency remains globally the same since 2012, with fewer respondents using it weekly (34.4% vs. 41% in 2014) and more on a monthly basis (42% today vs. 30% in 2014). 


[![](/img/2018survey/21.png)](/img/2018survey/21.png)


The user base change from daily users to weekly or monthly users. Note that we did not offer the option _Less than once a month_ in the 2012 survey and remove the First time user option after 2012. 

[![](/img/2018survey/22.png)](/img/2018survey/22.png)


## For how long have you been using OpenRefine

Users with over two years of experience are now representing 50% of the user base (vs. 38% in 2014). If we compare to the previous year, we see mostly the drop in user with less than six months of experience. While we cannot provide a reason for the decline, we can suppose it is due to the survey methodology, the maturity of the self-service data preparation markets with alternative tools available to the users or because fewer people have been introduced to OpenRefine over the last year. 

Note that in the below analysis we included users that never used OpenRefine in the less than six months group (five respondents in 2014, nine in 2018). 

[![](/img/2018survey/23.png)](/img/2018survey/23.png)

## How will you rate your skills using OpenRefine

Both in 2012 and 2014 we asked respondents to rate their skills from one to five. One being a novice in Refine and five being a master. This graph confirms the trends that the community is composed of advanced users with the only a third of them rating their skills at 1 or 2 out of 5.

[![](/img/2018survey/24.png)](/img/2018survey/24.png)

## Version of OpenRefine

The majority of the respondents use the latest release of OpenRefine (2.8).

[![](/img/2018survey/3.png)](/img/2018survey/3.png)

## High-level tasks you do with OpenRefine

Usage breakdown remains stable compared to the 2012 survey. 87.77% of the respondents are using OpenRefine to address more than one type of task.

The majority of the respondents use OpenRefine to normalize data (80%) and transform it (75%).  We introduced the answer _Preparing a dataset before visualization in another application (R, D3, Tableau, Fusion Table ...)_  in the 2018 survey.

[![](/img/2018survey/4.png)](/img/2018survey/4.png)

Note: Respondant can select multiple answer. Click on the image to enlarge it. 

## Do you use plugin or extension?

62.3% of the respondents do not use plugins or extension; 22.13% installed only one plugin and 15% of them installed more than one (with one person installing eight plugins!). The RDF extension is the most popular extension with 14.8% of the respondents using it, followed by the VIB BITS and NER plugins.

[![](/img/2018survey/5.png)](/img/2018survey/5.png)

Note: Respondent can select multiple answers. We consolidated blank answer with I don't use plugin or extension. Click on the image to enlarge it. 

## Do you use a reconciliation service?

The two top services used are Wikidata and reconcile-csv. 30.33% of the respondent installed only one reconciliation when 18.03% used more than one (with one person using six services!), and 51.6% of them do not use a reconciliation service. 

[![](/img/2018survey/6.png)](/img/2018survey/6.png)

Note: Respondent can select multiple answers. Click on the image to enlarge it. 

## Perception of Refine: 

The following word clouds are more eye-pleasing than an in-depth analysis.

### Why did you choose OpenRefine (Which features)

[![](/img/2018survey/reason.png)](/img/2018survey/reason.png)

### Alternative tools 

Excel, R, and python remain the mains alternative to OpenRefine. Since 2014, we can notice the emergence of other self-service data preparation tools like Trifacta and Talend Data Preparation. 

[![](/img/2018survey/alternative.png)](/img/2018survey/alternative.png)


### Word used to describe OpenRefine


[![](/img/2018survey/describe.png)](/img/2018survey/describe.png)

### From the Feature Request and Anything to add

We compiled below suggestions and feature requests submitted via the survey. 

## Features Request:

* Improve performance and support larger dataset (11 requests)
* Improve GREL documentation with more snippets, recipe to help users to write GREL (5 requests).
* Support a library of GREL expression to save common transform (convert date, names, common regex, geocode data) with a native button to call them (5 requests).
* Hosted version (4 requests) for collaboration (2 requests).
* Improvement of the batch mode (3 requests) including details on which clustering process its done with its parameters. 
* Support for Spark, Apache arrow/parquet.
* Detect the nature of the information based on a pattern (ex: column x contains phone numbers) and check if values in a field are acceptable or exist in locally controlled vocabularies.
* Store the templates for export in other formats like XML.
* Improve python support (store functions; auto-indent code).
* Better manage XML and JSON files.
* Export result to clipboard.
* An option to stop the service from the interface. 
* Easier configuration memory allocated to OpenRefine.

## GUI

Some suggestions regarding the User Interface:
* Renaming columns (2 requests) via all or double-clicking on them.
* Moving columns by drag and drop (2 requests).
* GREL Editors is too small for advanced GREL.
* Project organization using a directory structure.
* Search across all columns in a project.
* In the history tab, tagging and brief descriptions of the code would help in their discovery.
* Bigger/adjustable window for RDF skeleton in the RDF extension.

Regarding the reconciliation process: 
* Reconciliation question should be a checkbox, not a toggle.
* Keep reconciliation data (-> links) when transformations are made across a column, e.g., combining the entries of two columns into one, now reconciliation data gets lost.
* Easily remove old reconciliation services.

## New language or format support 
Respondent suggested OpenRefine support more format and languages including:
* R language.
* OCR.
* .mrc/.mrk files.
* tde format export.



