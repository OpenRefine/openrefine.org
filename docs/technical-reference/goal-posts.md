---
id: goal-posts
title: OpenRefine Goal Posts
sidebar_label: OpenRefine Goal Posts
hide_table_of_contents: false
---

This page is primarily based on the results of the [2024 prioritization survey](https://forum.openrefine.org/t/results-from-the-feature-prioritization-survey-2024/1847). To keep things focused, completed items have been removed. At the end of the list, you’ll also find additional feature requests related to the core product that were not part of the survey but have been raised by the community.

**Score and Status** are defined on the [about goal post page](/docs/technical-reference/about-goal-posts#status-definition).

### Native Reconciliation with arbitrary external datasets
* **Score**:  76
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
* Setting up a [reconciliation services](https://github.com/OpenRefine/OpenRefine/wiki/Reconcilable-Data-Sources#local-services), whether locally or on a server, is complex and often prevents users and organizations with limited technical resources or expertise from leveraging reconciliation features. A built-in (native) capability in OpenRefine to reconcile data against any arbitrary dataset, such as a local CSV file or another OpenRefine project, would lower the technical barrier. It would allow users to load an authority file as an OpenRefine project and configure the matching criteria in a configuration screen, without relying on external reconciliation services or endpoints.
* Related issue: [#2003](https://github.com/OpenRefine/OpenRefine/issues/2003). See also [Antonin's take on reconciliation](https://antonin.delpeuch.eu/posts/my-roadmap-for-openrefine/#reconciliation) for broader context. 

### Allowing import again for adding new rows to existing projects.
* **Score**:  73
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
*  Easy adding of additional rows/importing rows from other datasets. Update existing project with new data (append rows from a file). Extend datasets: add rows to existing datasets from files, assuming the same column structure/order. The inability to update imported data is a limiting factor (user survey)
* Related issue: [#715](https://github.com/OpenRefine/OpenRefine/issues/715)

### Making joining records easier across 2 datasets by multiple keys
* **Score**: 72
* **Status**: Needs UI Design
* **Source**: Prioritization-2024
* Please create a thread on the forum or create an issue to discuss this request.

### Easier rename a column by clicking on it
* **Score**: 72
* **Status**: Ready for Development
* **Source**: Prioritization-2024
* Easier rename a column by clicking on it and don't break any facets that depend on it
* Loosely related issue: [#6282](https://github.com/OpenRefine/OpenRefine/issues/6282)

### Loading and working very large projects more easily/smoothly
* **Score**: 68
* **Status**: Needs Scoping
* **Source**: Prioritization-2024
* Loading and working very large projects more easily/smoothly (100,000s of rows/records). Loading and working large datasets could increase OR's user base in both numbers and variety to a great extent in my opinion. 
* Related to the `scaling - 4.x branch`

### Better support of nested structure (improved record mode)
* **Score**: 67
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
* See discussion on the [forum](https://forum.openrefine.org/t/representing-hierarchical-data-beyond-the-records-mode/425)

### More GREL options that allow for creating and using variables for your dataset
* **Score**: 67
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
* Please create a thread on the forum or create an issue to discuss this request.

### Option to save facet
* **Score**: 65
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
* Related issue: [#560](https://github.com/OpenRefine/OpenRefine/issues/560)

### Support Python 3 as an expression language
* **Score**: 62
* **Status**: Ready for Development
* **Source**: Prioritization-2024
* Support Python 3 as an expression language - Continue maintaining Python / Jython option.
* Also requested survey open-ended questions. Related issue: [#2249](https://github.com/OpenRefine/OpenRefine/issues/2249)

### Drag and drop for columns
* **Score**: 61
* **Status**: Needs UI Design
* **Source**: Prioritization-2024
* Related issue: [#7273](https://github.com/OpenRefine/OpenRefine/issues/7273)

###  Support for more alphabets
* **Score**: 59
* **Status**: Needs Scoping
* **Source**: Prioritization-2024
* Support for more diverse (human language) alphabets/scripts, date and time formats...
* No related issue. This feature idea comes from the [Diversity grant](https://openrefine.org/funding#2021-eoss-diversity)

### Allow bookmarking and naming starred GREL expressions 
* **Score**: 58
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
* This was also expressed by user as 
  * Allow bookmarking and naming starred GREL expressions so they can show in a Star top-level menu. (seed). 
  * Allow Users to customize a Custom Menu to save macro (user suggestion). 
  * More 'point and click' functions to replace GREL (seed). 
* Discussions and the consensus is to promote option for the users to create macros. This is loosely related to the suggestion of allowing the sharing and exploring of public expressions. Related issue: [#109](https://github.com/OpenRefine/OpenRefine/issues/109)

### In context help for GREL or wizard-like approach
* **Score**: 58
* **Status**: Needs UI Design
* **Source**: Prioritization-2024
* In context help for GREL or wizard-like approach to writing GREL (like Excel)
* Mention on the [forum](https://forum.openrefine.org/t/user-interviews-results-part-2-exploring-feedback-regarding-openrefine-feature-and-user-experience/1181#improving-user-accessibility-2). This issue would require additional design work to better scope and refine the feature. [#153](https://github.com/OpenRefine/OpenRefine/issues/153) and [2023 internship suggestion](https://github.com/OpenRefine/OpenRefine/wiki/GSoC-Outreachy-2023-Ideas#syntax-highlighting-for-expressions)

### More and better notifications, error messages, and warnings in OpenRefine
* **Score**: 58
* **Status**: Needs Scoping
* **Source**: Prioritization-2024
* This is track via many issues (and most likely many more to create) under the [error handling tag](https://github.com/OpenRefine/OpenRefine/labels/error%20handling) in Github

### Multi-user support 
* **Score**: 58
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
* Allowing two or more people to work on the same project
* Related issue: [#101](https://github.com/OpenRefine/OpenRefine/issues/101) and discussion at the [2024 Barcamp](https://forum.openrefine.org/t/openrefine-2024-barcamp-openrefine-as-a-service/1631)

### Make OpenRefine more useful as an exploratory tool
* **Score**: 53
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
* Make OpenRefine more useful as an exploratory tool through quick data visualization and analysis.
* Related issue: [#5315](https://github.com/OpenRefine/OpenRefine/issues/5315) and [forum discussion](https://forum.openrefine.org/t/openrefine-2024-barcamp-making-openrefine-more-useful-as-exploratory-tool/1627)

### Option to refactor the JSON operation scripts
* **Score**: 53
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
* Option to refactor the JSON operation scripts to edit a facet, update a GREL command, or add a step
* Related discussion on the [forum](https://forum.openrefine.org/t/which-reproducibility-should-we-focus-on/1474/5)

### Improved integration with cloud storage services for data import and export.
* **Score**: 51
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
* Need to create an issue and better scope this feature. 

### Supported REST API for external use
* **Score**: 50
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
* This is already supported via add a column by fetching url. During the 2024 BarCamp we discussed supporting [OpenAPI within OpenRefine](https://forum.openrefine.org/t/openrefine-2024-barcamp-support-openapi-in-openrefine/1628)

### Improved JSON parsing when calling API
* **Score**: 49
* **Status**: Needs UI Design
* **Source**: Prioritization-2024
* Related issues: [#1440](https://github.com/OpenRefine/OpenRefine/issues/1440) [#2515](https://github.com/OpenRefine/OpenRefine/issues/2515)

### Faster rendering of many columns in Record mode
* **Score**: 49
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024

### Make OpenRefine easier to learn
* **Score**: 47
* **Status**: Needs UI Design
* **Source**: Prioritization-2024
* Make OpenRefine easier to learn and get started with a better or easier UX / interface.  This would need dedicated design effort.


### Pause and resume my operations in OpenRefine
* **Score**: 46
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
* Related discussion on the [forum](https://forum.openrefine.org/t/partial-results-of-long-running-operations/482)

### Save Template exports
* **Score**: 46
* **Status**: Needs UI Design
* **Source**: Prioritization-2024
* Related issues: [#1928](https://github.com/OpenRefine/OpenRefine/issues/1928) [#468](https://github.com/OpenRefine/OpenRefine/issues/468) 

### Allow users to set precise values for numeric facets
* **Score**: 45
* **Status**: Needs UI Design
* **Source**: Prioritization-2024
* Related issues: [#5168](https://github.com/OpenRefine/OpenRefine/issues/1928) [#5008](https://github.com/OpenRefine/OpenRefine/issues/5008) 

### Better support for OpenRefine extensions
* **Score**: 44
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
* Only present maintained and currently operational ones. Improve extension discoverability and ease installation process.
* At the moment extension developers have too few interface stability guarantees, and the user experience of installing and upgrading extensions is poor. There are a lot of open questions around this since OpenRefine’s architecture is quite uncommon, so there does not seem to be an established off-the-shelf model we can adopt. Unsucessfull grant applications: [2024-DEF](https://openrefine.org/funding#2024-def) and [2023 Mozilla Infrastructure Fund](https://openrefine.org/funding#2023-mozilla-infrastructure-fund) grant application. See also [this conversation in the forum](https://forum.openrefine.org/t/improving-the-ux-of-extension-install-and-butterfly/52), and the first version of the extension page released in 3.9.0 [#7012](https://github.com/OpenRefine/OpenRefine/pull/7012). See also [Antonin's take on extensibility](https://antonin.delpeuch.eu/posts/my-roadmap-for-openrefine/#extensibility).

### Better support of MARC format
* **Score**: 44
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
* Better support of MARC format for complex dimensions and repeating elements.
* Related issues: [#794](https://github.com/OpenRefine/OpenRefine/issues/794) [#2127](https://github.com/OpenRefine/OpenRefine/issues/2127) 

### A walkthrough tutorial
* **Score**: 44
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
* A walkthrough tutorial inside the software itself, to introduce and guide new users. This would need dedicated design effort
* Related conversation [Open source onboarding libraries](https://forum.openrefine.org/t/open-source-onboarding-libraries/1124) and some conversation on [this thread](https://forum.openrefine.org/t/results-of-two-user-surveys-for-wikimedia-commons-users-of-openrefine/1111/5)

### Supported client/client library based on REST API
* **Score**: 41
* **Status**: Needs Scoping
* **Source**: Prioritization-2024

### AI integrated help for writing regular expressions, GREL
* **Score**: 40
* **Status**: Needs Scoping
* **Source**: Prioritization-2024
* May be related to the suggestion In context help for GREL or wizard-like approach to writing GREL (like Excel)

### Add transform for book-style Title casing
* **Score**: 37
* **Status**: Ready for Development
* **Source**: Prioritization-2024
* Please create a thread on the forum or create an issue to discuss this request.

### Allow sharing and exploring of public expressions
* **Score**: 37
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
* This is discussed on the [forum](https://forum.openrefine.org/t/which-reproducibility-should-we-focus-on/1474#h-2-extracting-reusable-recipes-or-macros-for-reuse-in-other-contexts-3). This is loosely related to [#109](https://github.com/OpenRefine/OpenRefine/issues/109)

### An online, hosted instance of OpenRefine
* **Score**: 34
* **Status**: Needs Solution Definition
* **Source**: Prioritization-2024
* This is often requested by the trainer as a replacement for the unstable [mybinder deployment](https://github.com/betatim/openrefineder). See also the summary of the discussion during the [2024 Barcamp](https://forum.openrefine.org/t/openrefine-2024-barcamp-openrefine-as-a-service/1631)

### Dark mode
* **Status**: Needs UI Design
* **Source**: User Survey 2025
*  Related issue: [#3017](https://github.com/OpenRefine/OpenRefine/issues/3017) 

### Better support for geographic dataset
* **Status**: Needs Scoping
* **Source**: User Survey 2025
* Any features about geographic coordinates and GIS
* Related issue: [#6570](https://github.com/OpenRefine/OpenRefine/issues/6570) and [forum discussion](https://forum.openrefine.org/t/openrefine-2024-barcamp-making-openrefine-more-useful-as-exploratory-tool/1627#map-facet-8)

### Better preference screen
* **Status**: Needs UI Design
* **Source**: User Survey 2025
* A GUI that would highlight what could be modified and what are the current configuration files even if it cant be modified from the menu.
* Related issue: [#2796](https://github.com/OpenRefine/OpenRefine/issues/2796)

### Better testing utilities for extension development
* **Status**: Needs Solution Definition
* outreachy-2024
* [read more here](https://github.com/OpenRefine/OpenRefine/wiki/GSoC-Outreachy-2024-Ideas#better-testing-utilities-for-extension-development)

### Better test coverage for importers and exporters
* **Status**: Needs Solution Definition
* outreachy-2024
* [read more here](https://github.com/OpenRefine/OpenRefine/wiki/GSoC-Outreachy-2024-Ideas#better-test-coverage-for-importers-and-exporters)

### Support for the new reconciliation protocol
* **Status**: Needs Solution Definition
* outreachy-2024
* [read more here](https://github.com/OpenRefine/OpenRefine/wiki/GSoC-Outreachy-2024-Ideas#support-for-the-new-reconciliation-protocol) and [#7186](https://github.com/OpenRefine/OpenRefine/issues/7186)

### How OpenRefine Can Support Federated Data Repositories for Open Science? 
* **Status**: Needs Scoping
* [read more here](https://forum.openrefine.org/t/discussion-how-openrefine-can-support-federated-data-repositories-for-open-science/2146)
