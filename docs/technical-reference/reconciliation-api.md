---
id: reconciliation-api
title: Reconciliation API
sidebar_label: Reconciliation API
---

_This is a technical description of the mechanisms behind the reconciliation system in OpenRefine. For usage instructions, see [Reconciliation](manual/reconciling.md)._

A reconciliation service is a web service that, given some text which is a name or label for something, and optionally some additional details, returns a ranked list of potential entities matching the criteria. The candidate text does not have to match each entity's official name perfectly, and that's the whole point of reconciliation--to get from ambiguous text name to precisely identified entities. For instance, given the text "apple", a reconciliation service probably should return the fruit apple, the Apple Inc. company, and New York city (also known as the Big Apple).

Entities are identified by strong identifiers in some particular identifier space. In the same identifier space, identifiers follow the same syntax. For example, given the string "apple", a reconciliation service might return entities identified by the strings " [Q89](https://www.wikidata.org/wiki/Q89)", "[Q312](https://www.wikidata.org/wiki/Q312)", and "[Q60](https://www.wikidata.org/wiki/Q60)", in the Wikidata ID space. Each reconciliation service can only reconcile to one single identifier space, but several reconciliation services can reconcile to the same identifier space.

OpenRefine can connect to any reconciliation service which follows the [reconciliation API v0.2](https://reconciliation-api.github.io/specs/0.2/). This was formerly a specification edited by the OpenRefine project, which has now transitioned to its own
[W3C Entity Reconciliation Community Group](https://www.w3.org/community/reconciliation/).

Informally, the main function of any reconciliation service is to find good candidates in the underlying database, given the following data:

* A string, which is normally the name or title of the entity, in some language.
* Optionally, a type which can be used to narrow down the search to entities of this type. OpenRefine does not define a particular set of acceptable types: this choice is left to the reconciliation service (see the suggest API for that).
* Optionally, a list of properties and their values, which can be used to refine the search. For instance, when reconciling a database of books, the author name or the publication date are useful bits of information that can be transferred to the reconciliation service. This information will be sent to the reconciliation service if the user binds columns to properties. Again, the notion of property is not predefined in OpenRefine: its definition depends on the reconciliation service.

In a sense, the reconciliation protocol is a standardized search API tailored to the specific needs of data matching. Beyond searching for candidate matches, it also comes with other features to help the user review and correct a matching (by offering previews and auto-completion for the target dataset).

See [the specifications of the protocol](https://reconciliation-api.github.io/specs/0.1) for more details about it. You can suggest changes on its [issues tracker](https://github.com/reconciliation-api/specs/issues) or on the [group mailing
list](https://lists.w3.org/Archives/Public/public-reconciliation/).

## API versions supported by OpenRefine

There are multiple versions of the protocol available:
- [version 0.1](https://www.w3.org/community/reports/reconciliation/CG-FINAL-specs-0.1-20230321/), supported since OpenRefine 2.7. This version of the protocol is based on [JSONP](https://en.wikipedia.org/wiki/JSONP#Security_concerns), which represents a security risk. Therefore we discourage services to implement this version of the specifications.
- [version 0.2](https://reconciliation-api.github.io/specs/0.2/), supported since OpenRefine 3.3. This is the current stable version of the protocol, which we encourage services to implement.
- [the current draft of the next version](https://reconciliation-api.github.io/specs/draft/), which is not supported by OpenRefine yet.

## Create a new reconciliation service

If you want to create a reconciliation service for a new data source, we have resources to help you.
You can work from the specification and implement the API in your own service, but there are also other options.
* you can reuse an [existing library or framework to expose the required web API](https://reconciliation-api.github.io/census/libraries/). Note that it is worth paying attention to which version of the specification they implement.
* you can also use a [standalone tool to expose a reconciliation service on top of a dataset](https://reconciliation-api.github.io/census/services/).

In any case, you can use the [reconciliation test bench](https://reconciliation-api.github.io/testbench/) to test your service interactively on some examples and validate its behaviour. Note that this page also features a list of known public reconciliation services: you could also add yours there if it is hosted publicly.
