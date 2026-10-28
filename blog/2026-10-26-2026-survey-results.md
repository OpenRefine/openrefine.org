---
author: Martin Magdinier
title: "OpenRefine 2026 User Survey Results"
---

Every two years, OpenRefine conducts an extensive survey among its users. Our seventh edition was live from July 27 to October 1, 2026, and we received 178 answers. This post focuses on the survey analysis.
<!--truncate-->

You can refer to the previous editions: [2012](http://googlerefine.blogspot.ca/2012/10/google-refine-usage-survey-results.html), [2014](/blog/2014/08/29/2014-survey-results), [2018](/blog/2018/07/16/2018-survey-results), [2020](/blog/2020/02/20/2020-survey-results), [2022](/blog/2022/06/28/2022-survey-results) and [2024](/blog/2024/12/20/2024-survey-results). This year, we added new questions on AI usage and on our mission, vision and values. You can download the [anonymized answers here](/img/2026survey/OpenRefine-2026-User-Survey-Anonymized-Answer.csv).

Participation dropped this year: 178 answers, 21% fewer than in 2024 (226) and the same number as in 2020. It's the first drop since 2018, even though the survey ran for a similar period (about two months) and was promoted through the same channels as in 2024: an in-app notification, the forum, social media and two mailing lists. 

Respondents are also more experienced than in previous editions, so this survey mainly reflects the views of long-time users. Four respondents said they had never used OpenRefine; unless stated otherwise, the percentages below are based on the other 174.

## Who are you?

### OpenRefine communities

Libraries are now clearly our largest community: 44% of respondents identify with it (34% in 2024). Research and Academic comes second (33%, compared with 38% for "Research" in 2024), followed by the cultural sector and cultural heritage (29%, up from 23%), Data science (25%, stable) and Digital humanities (21%, up from 15%).

Some communities are less represented than in 2024: Wikimedia (21%, down from 26%), Wikibase (6%, down from 12%), Semantic Web (10%, down from 15%) and OpenStreetMap (3%, down from 9%). Civic Tech (5 respondents) and Open-source intelligence (2 respondents), introduced as options in 2024, remain small communities.

[![Bar chart comparing the communities respondents identify with in 2024 and 2026](/img/2026survey/01communities.svg)](/img/2026survey/01communities.svg)

We used the same approach as in 2024: respondents could choose several communities, so percentages add up to more than 100%. On average, respondents identified with 2.37 communities (2.48 in 2024). We regrouped free-text answers into existing communities where they fit; the 8 respondents (5%) whose answers didn't fit any are shown as "Other".

### Experience

Our respondents are more experienced than ever: 54% have used OpenRefine for more than five years, up from 41% in 2024, a statistically significant change. Only 10% started using it in the past year (14% in 2024). Between 2022 and 2024, the share of respondents with more than two years of experience barely moved (68% and 71%); it jumped to 79% this year. 

There are several possible explanations for this more experienced user base: OpenRefine may keep its users over time (less churn), this year's survey may have reached fewer newcomers, or our user base may be shrinking, with fewer new users replacing those who leave. The lower participation is consistent with the last two explanations, and the survey alone can't tell them apart.

[![Stacked bar chart of how long respondents have used OpenRefine in 2022, 2024 and 2026](/img/2026survey/02experience.svg)](/img/2026survey/02experience.svg)

### Professional usage

OpenRefine remains primarily a professional tool: 78% of respondents use it mainly in a professional setting (at least 70% of the time), up from 71% in 2024. More than a third (36%) use it exclusively for work. Professional use differs by community: 91% of librarians use OpenRefine mainly for work, compared with only 53% of Wikimedians, a fifth of whom use it mostly outside work.

[![Column chart of professional usage on a scale from 0 (only outside work) to 10 (only for work)](/img/2026survey/03pro-usage.svg)](/img/2026survey/03pro-usage.svg)

### Languages used

English keeps becoming less dominant: it accounts for 50% of the languages respondents use with OpenRefine (both its interface and the datasets they work with), down from 56% in 2024 and 64% in 2022. 

German, French and Spanish remain the top three other languages, and Chinese grew from 4 to 10 respondents. Despite fewer respondents, the long tail remains, with 24 languages reported in total, from Latin to Māori and Malayalam. 43% of respondents work in more than one language (40% in 2024).

[![Donut chart of the languages respondents use with OpenRefine](/img/2026survey/04languages.svg)](/img/2026survey/04languages.svg)

### Overall satisfaction and Net Promoter Score

OpenRefine's [Net Promoter Score (NPS)](https://en.wikipedia.org/wiki/Net_promoter_score) rose to 75, up from 64 in 2024. 79% of respondents are promoters who would recommend OpenRefine (a score of 9 or 10), and two thirds gave it a perfect 10. Only 5% are detractors (a score of 6 or below, compared with 9% in 2024).

[![Stacked bar of detractors, passives and promoters; Net Promoter Score 75](/img/2026survey/05nps.svg)](/img/2026survey/05nps.svg)

## How do you use OpenRefine?

### Feature usage

We asked how often respondents perform 12 common actions in OpenRefine. The first row of the chart, "Using OpenRefine", shows how often respondents use OpenRefine at all: for each respondent, it takes the action they perform most often. 38% of respondents use OpenRefine daily, 29% weekly, 25% monthly and 8% rarely.

[![Stacked bar chart of how often respondents perform 12 actions in OpenRefine](/img/2026survey/06feature-usage.svg)](/img/2026survey/06feature-usage.svg)
<div align="center"><em>(Click to enlarge)</em></div>

Overall, how people use OpenRefine is remarkably stable since 2024, when 33% used it daily and 64% at least once a week (67% this year). None of the 11 actions changed in a statistically significant way, but a few trends are worth watching:
* **GREL is being used by more users:** 75% of respondents transform data with GREL at least once a month (68% in 2024), close to the 80% who clean data from the menus. Only 10% never use GREL, down from 17%.
* **Preparing data for migration to another system is growing:** 72% do it at least once a month (65% in 2024).
* **Publishing to Wikibase, Wikidata or Wikimedia Commons is down:** 36% of respondents publish at least occasionally (41% in 2024), and 19% at least monthly (28%). This most likely reflects fewer Wikimedians among this year's respondents (21%, compared with 26% in 2024) rather than a change in how Wikimedians use OpenRefine.

Reconciliation remains a core use: 51% of respondents reconcile data at least once a month (53% in 2024).

**Who uses OpenRefine most often?** We cross-checked usage frequency with years of experience, community, professional usage and self-rated skill. Only skill shows a statistically significant link: the higher people rate their skills, the more often they use OpenRefine (80% of those rating themselves 4 or 5 out of 5 use it at least weekly, compared with 46% of those rating themselves 1 or 2). Years of experience, community and how much people use OpenRefine for work make no significant difference.

#### Using AI alongside OpenRefine

This year, we added a question on using AI alongside OpenRefine to prepare or post-process data. 38% of respondents use AI at least occasionally, and 24% at least once a month. Most of that use happens outside OpenRefine: only 13 of the 66 respondents who use AI also use the [AI Extension](https://github.com/sunilnatraj/llm-extension). Those who do are heavier AI users (64% use AI at least monthly, compared with 20% of other respondents) and rate their OpenRefine skills higher (4.0 out of 5 on average, compared with 3.3).

In their open answers, respondents were divided on what AI should mean for OpenRefine. Some would like it fully integrated (*"Fully integrate IA/LLMs in all OR functions"*), while others are firmly against it (*"Please do NOT try to integrate generative AI into OpenRefine"*) or want it to stay opt-out. Several already use LLMs to write GREL expressions (*"I don't know GREL, but I use ChatGPT to generate GREL scripts for me when I need them"*), and one asked for guidance on best practices and tools for combining AI with OpenRefine; the [recording of our community call on the LLM extension](https://forum.openrefine.org/t/community-call-openrefine-llm-extension-demo/2923/2) is a good starting point. 

LLMs also appear among the alternative tools respondents would use if OpenRefine weren't available, often combined with Python, Excel or Google Sheets, and for one respondent the shift has already happened: *"Most of my OpenRefine use has now moved to using LLMs."* Others still see a role for OpenRefine in checking the results: *"AI can do a lot but I would still need to verify any AI-processed data."*

### Why are you using OpenRefine?

We asked which features make respondents choose OpenRefine over other tools, and which tools they would use if OpenRefine weren't available. This year, we grouped the 131 answers into themes: 111 respondents named at least one reason and 98 at least one alternative. Percentages below are shares of those respondents.

**Why OpenRefine?** The reasons echo those reported in previous editions:
* **Cleaning messy data (28%)**, with **faceting (24%)** and **clustering (14%)** as the features most often named: *"Facets and GREL make light work of analysing messy data."*
* **Transformations with GREL, Python or regular expressions (23%)**, combined with an interface that doesn't require coding (**ease of use, 21%**). Several respondents see OpenRefine as a bridge between spreadsheets and programming: *"It met me at my personal skill set and took me further from there."* This also makes it a teaching tool: *"In a teching context, it allows me introducing data transformation and retrieval without having to introduce a full programming language like Python first."*
* **Reconciliation and data extension (16%)** and the **integration with Wikidata and Wikimedia (12%)**. For some contributors, OpenRefine is what makes the work possible at all. A Wikimedian explained that without it, *"I would have to use a spreadsheet and QuickStatements (but in reality probably would not do this kind of work as it would be tedious)."*
* **Versatility (16%)**, with the whole workflow in one tool: *"It's such a complete package, there is no alternative."*
* **Handling large datasets (11%)**, being **free and open source (11%)**, and **keeping data safe (6%)**. Respondents value that OpenRefine doesn't guess or silently change their data, and that every change can be reviewed and undone: *"OR is great since it doesn't assume what your data is and it doesn't try to auto format it in any way. This is vital for me."* At a time when more data work goes through LLMs, this transparency is a key part of what OpenRefine offers.

**What would you use instead?** 
* **Spreadsheets** remain the main fallback, named by half of those who gave an alternative: Excel (35%), Google Sheets (9%) and others such as LibreOffice Calc (12%). 
* **Programming** comes second (39%): Python (26%), R (7%), SQL and custom scripts.
* 7% named **other data wrangling tools**: Data Wrangler, Open Wrangler, Miller, Metafacture, MARCEdit and Omniscope.
* 6% would turn to **LLMs**, often combined with Python or Excel.
* One in five (19%) **don't know any alternative**. 

For many, the fallback would be a step down: *"If I didn't have OpenRefine, I'd be using a combination of Excel and VisualStudio, and the work would take exponentially longer!"*, or more simply, *"I would muddle through with spreadsheets, and the light in my eyes would die a little."*

## What does your OpenRefine installation look like?

### Version and installation

Most users keep OpenRefine up to date: OpenRefine 3.10, the current release, accounts for 73% of the versions reported (including respondents who always update to the latest stable release), and development versions for 2%. Older versions account for 21%, a share that keeps slowly decreasing (22% in 2024 and 24% in 2022).

[![Donut chart of the OpenRefine versions respondents run](/img/2026survey/07version.svg)](/img/2026survey/07version.svg)

Almost 90% of respondents installed OpenRefine themselves, and 6% had it installed by IT staff. Hosted setups remain rare and keep declining: 3% mainly run OpenRefine through a cloud or server-based host, and 2% maintain a hosted version, compared with 3% and 4% in 2024, and 5% each in 2022. With so few respondents in these groups, it's hard to tell whether hosted use is really declining or whether this year's survey simply reached fewer of these users.

[![Donut chart of who installed OpenRefine](/img/2026survey/08installation.svg)](/img/2026survey/08installation.svg)

**RAM allocation.** OpenRefine allocates 1400 MB of memory by default (2 GB on macOS), and most users never change it: 45% of respondents keep the default setting and 23% don't know, while 30% have edited it (44%, 25% and 31% in 2024). Of the 48 respondents who stated a value, two thirds set it above 2 GB, with a median of 4 GB and values up to 32 GB. The most common answer, 2 GB, is the macOS default, so some of these respondents may not have changed anything. The detailed values, as well as the operating systems and browsers respondents use, are available in the anonymized dataset.

[![Column chart of the RAM respondents allocated to OpenRefine, 2024 and 2026](/img/2026survey/12ram.svg)](/img/2026survey/12ram.svg)

### Reconciliation services

175 respondents answered this question: 54 don't use any reconciliation service and 17 don't know. This leaves 111 users who use at least one (153 in 2024 and 112 in 2022). With fewer respondents this year, the chart shows the number of users per service, and we compare services by rank rather than by count.

**Wikidata** remains by far the most used reconciliation service (76 users), followed by **VIAF**, the **Getty Vocabularies** and the **GND** (Gemeinsame Normdatei, the Integrated Authority File of the German National Library), which climbed from 11th to 4th place. **Wikimedia Commons** dropped from 3rd to 6th. 

**VIAF's ranking needs a caveat**: the public VIAF reconciliation service has been largely unusable since early 2025 because of rate limiting by OCLC, and none of the respondents we contacted by email reported using it recently. See the [latest update on the forum](https://forum.openrefine.org/t/problems-with-viaf-reconciliation/2063/33) for details.

**The Library of Congress services** weren't offered as an option this year, so their 6 free-text mentions don't reflect a real decline. There is no official Library of Congress reconciliation endpoint; the [forum](https://forum.openrefine.org/t/how-to-reconcile-with-library-of-congress-authorities/589) outlines the available options.

**Local reconciliation** remains strong: 39 respondents use their organization's own service, csv-reconcile, reconcile-csv or a SPARQL endpoint through the RDF extension. Taken together, that's the second most common way to reconcile after Wikidata, which shows how flexibly users can build OpenRefine into their own workflows and operations.

The long tail of services keeps changing; this year it includes OpenSanctions, OCCRP's Aleph, the EU knowledge graph, IdRef, RISM, ROR, Global Names, the CrossRef Funder Registry, the Encyclopedia of Life and Ontotext's Wikidata services.

[![Bar chart of reconciliation services used in 2022, 2024 and 2026](/img/2026survey/09reconciliation.svg)](/img/2026survey/09reconciliation.svg)

### Extensions and client libraries

57% of respondents either don't use any extension or didn't know extensions exist, about the same as in 2024 (58%; 51% in 2022). The Wikidata extension remains the most used (25% of respondents, compared with 27% in both 2024 and 2022), followed by the Wikimedia Commons extension (11%). The [AI Extension](https://github.com/sunilnatraj/llm-extension) is a new entrant and immediately the third most used (8%), ahead of VIB-Bits (7%) and the two RDF extensions combined (6%).

[![Bar chart of extensions used in 2022, 2024 and 2026](/img/2026survey/10extensions.svg)](/img/2026survey/10extensions.svg)

**Client libraries** remain a niche: 11 respondents (6%, compared with 7% in 2024) use one to automate OpenRefine tasks, mostly the Python client (8 of them), and half of all respondents didn't know client libraries exist.

## Community

Awareness of the [OpenRefine forum](https://forum.openrefine.org/) hasn't changed since 2024: 32% of respondents are subscribed, 30% know about it but aren't subscribed, and 38% didn't know it exists. Newer users are the least aware (59% of those using OpenRefine for less than a year didn't know about the forum), although the group is too small for this difference to be statistically significant.

### Mission, vision and values

In the 2024 survey, we asked for [feedback on our draft vision, mission and values](https://forum.openrefine.org/t/feedback-request-on-openrefines-draft-vision-mission-values/1619/8), which are now published on our [mission and vision page](/mission_vision). This year, we asked whether the community lives up to them. Among the 144 respondents with an opinion, 90% agree or strongly agree (40% strongly agree), 8% are neutral and only 2 disagree; 30 respondents (17%) had no opinion.

[![Stacked bar of agreement that the community respects its mission, vision and values](/img/2026survey/11mission.svg)](/img/2026survey/11mission.svg)

When asked what we should do that we aren't doing yet, respondents pointed to where the "everyone" in our mission still falls short:
* Accessibility for newcomers: *"'Empowering everyone' sounds good, but to use OpenRefine is too difficult for me (and other Wikipedians I know)"*
* Volunteer communities: *"Focus on volunteer and open communities, taking their capacity restrictions into account"*
* Language communities: *"maybe engage with different language communities (for example Spanish or Catalan). For me, the OpenRefine [Wikidata] Telegram channel is overwelming, and the Spanish feels very far away from any decision or development."* (This Telegram channel is run by the Wikidata community, not by the OpenRefine project.)

## In closing

More than 40 respondents took the time to thank the OpenRefine community in their open answers. A few of their kind words:

A Libraries and Digital humanities user:
> ***I'm very happy I got to learn how to use OR***

An Arts, cultural sector and cultural heritage user:
> ***If not OpenRefine I would use a combo of Python and spreadsheets, and I would be incredibly sad***

A Data journalism user:
> ***text facet is - as far as I can see - unique in its accuracy and flexbility. I have never found anything that comes close***

A Libraries, Research and Academic, and Other non-profit sector user:
> ***I don't know a more trustworthy tool than OR***

An Arts, cultural sector and cultural heritage, Data science and Semantic Web user:
> ***It's free to use, the guides are great, the usage is more intuitiv than Excel and more powerfull.***

Many thanks to everyone who completed the survey!
