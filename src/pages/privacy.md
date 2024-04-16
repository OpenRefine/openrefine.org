---
title: Privacy
description: Learn how your data is handled when you clean it with OpenRefine.
hide_table_of_contents: true
---

# Privacy in OpenRefine

## Where is my data stored?

  Data transformed with OpenRefine is stored locally on the computer where OpenRefine is installed.
  This includes your project data, history and preferences.
  This data is not replicated on any server.

  The exact location on your computer where data is stored depends on your operating system.
  Our documentation provides [instructions to locate your workspace directory](docs/manual/installing#back-up-your-data) on your computer.

  It is recommended that you back up your workspace directory regularly, in particular before
  upgrading to a newer version.

## Can OpenRefine developers access my data?

No, your data cannot be accessed by OpenRefine developers as it is only stored locally on your
computer.

It is recommended that you back up your workspace directory regularly, in particular before
upgrading to a newer version.

## Which OpenRefine operations transmit data to third parties?

Some operations, importers and exporters involve communicating with external services
and therefore transmit some information to the outside world.
We aim to make it obvious from the user interface that these operations rely on online
services. This includes the following:
- Adding a column by fetching URLs;
- Reconciling a column via a reconciliation service;
- Adding columns from a reconciled column via a reconciliation service;
- Selecting custom reconciliation matches;
- Importing or exporting data to Google Sheets or Google Drive;
- Importing or exporting data to a SQL database;
- Importing a file retrieved from a URL;
- Uploading data to Wikibase instances.

If you are unsure whether a particular workflow involves communicating with external
services, [just ask](/community).

## Is my data encrypted?

Data stored by OpenRefine on your computer is not encrypted by default.
You can make sure data stored by OpenRefine is encrypted by setting up full disk
encryption in your operating system.

## Cookie policy

OpenRefine does not store user data in cookies, except for OAuth authentication,
used when importing or exporting projects to a Google Drive, or for Wikibase authentication.

## Update notifications on OpenRefine's start page

To detect whether a new version is available, OpenRefine makes web queries to external websites when its start page is opened. This can be disabled by [setting the system property](manual/running#jvm-preferences) `refine.display.new.version.notice` to `false`.
* Before OpenRefine 3.8, the queries are made to GitHub.com. See [GitHub's privacy policy](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) to find out what information gets stored out of those requests.
* From OpenRefine 3.8 on, the queries are made to openrefine.org, hosted by Netlify. See [Netlify's data processing agreement](https://www.netlify.com/pdf/netlify-dpa.pdf) for details about data they might store. The OpenRefine project does not have access to analytics for those requests, like the rest of the traffic on openrefine.org.
