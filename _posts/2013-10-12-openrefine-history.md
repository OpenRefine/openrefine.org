---
  layout: post
  title: OpenRefine History
---

Yesterday David Huynh announced that Google will soon stop its active support of Google Refine and count of community to get more involved to growth Refine.

Refine is already a mature data cleaning tool, this change in leadership will be a major challenge for the tool continuity. But first I'd like to clarify what I have read on twitter yesterday night. Google Refine has always been an open source tool and anyone can commit changes, develop an extension or update the wiki. 

Through this post I'd like to give my insight on the reason of this decision and what will be the short terms consequences of it. 



#Google Refine Background

First let's do a brief history of Google Refine. Google Refine finds its root in the Freebase Gridworks solution developed by Metaweb Technologies, Inc. in May 2010. From its first version, Freebase Gridworks  was an open source project. Initially it was a tool designed to support the Freebase database and community for data cleaning, reconciliation and upload. This historical link with Freebase is still present in Google Refine, as the solution supports reconciliation against Freebase database.

In July 2010 Google acquired Metaweb and by extension, Freebase and Gridworks. Freebase Gridworks has been renamed Google Refine and the code and documentation moved to a code.google.com instance. The freshly renamed Google Refine continued to be an open source project for data cleaning. During the 2010 - 2012 period, with the support of Google engineers and the community three upgrade of Google Refine have been made (2.0 ; 2.1 and 2.5). The 2.6 version being on its way (see this discussion for more details).

Over the last 16 months editing this blog, I've seen the tremendous interest for Google Refine from various communities. Librarians, journalists, data analysts have been using Google Refine to clean and reconcile their data. Reconciliation services with more databases have been built,  an extension to support RDF extension has been written. A vivid community has emerged opening new horizons to Refine capability.

The user friendly interface helped thousands of non technical users to take control of their data. We are just at the door step of the big data world and Google Refine by lowering the technical barrier to jump in and empower more people for data analysis and processing. As Tom Hirst published today, Google Refine is a great entry level Glue Logic tool to create bridges between various application or system.


# Why Google stop supporting Google Refine?
 Google Refine is a desktop based application that can work both offline and online (for reconciliation and web scraping). During the two years Refine was with Google, I didn't witness any specific integration with other Google services (like doc, drive or fusion table). Google didn't develop Refine as a cloud based solution, to take advantage of its computing capability. I guess that the current desktop architecture of Google Refine prevents such a migration. My bet is that Google bought Metaweb Technologies for Freebase data and not for Gridworks / Refine functionality and today they don't see the business case to continue to support Refine.


#So, now what?
 In the short term, nothing. Google Refine is a stand alone / desktop application, so like most stand alone software, as long as it is installed on your machine, it will run. In a second phase I see two main impacts regarding the end of Google branding and the development of a community supported tool.


##The End of Google Branding
 Thanks to Google support, Refine is now one of the most mature data cleaning / wrangling tool available. Google branding also help a lot Google Refine marketing and community building.  I suppose that Google name was kind of a guarantee on the product capability and maturity for some users and this naming helped to democratize the tool.

However, I think that losing Google’s name will help Refine in two ways:

 Google branding made many new Refine users think that Refine was a cloud application and that data was uploaded on Google servers. That have never been the case, Refine is a local application. However, some users might have been reticent to use Refine for this reason. Maybe a different branding will make them more confident about their data privacy.

Reading last nights twitter feed, I realized that most of the people didn't know that Google Refine IS already an open tool. I reckon that the Google branding might have confused most of us, myself included (I created this blog because I didn't know how to edit the wiki). By naming it OpenRefine (or something else), let's hope that more people will engage the community and help with improving it.


##OpenRefine - a Community Support Application
 Please note that OpenRefine branding is not definitive and open to discussion on the current mailing list. 

This new step for Google Refine is also a test on how strong its community is. Will there be enough forces to support, maintain and grow the product from a code, documentation and strategy definition perspective? Organizing the current community and welcoming new users and contributors will be the first challenge of OpenRefine.

We are right now facing a large sheet of white paper, and many things need to be defined from a community management and organization perspective. As the code will be released on Github, little has been defined yet to support the community and articulate the current ecosystem around Google Refine.

I will be part of this adventure. If you are interested to jump in, this is the right time.
Join the conversation on the mailing list and share your thoughts!
