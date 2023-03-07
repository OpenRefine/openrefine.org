---
id: contributing
title: Contributing
sidebar_label: Contributing
---

Please read the general [guidelines on contributing to OpenRefine](https://github.com/OpenRefine/OpenRefine/blob/master/CONTRIBUTING.md) first, then review the information on [reporting and tracking issues](#reporting-and-tracking-issues), and on making your [first pull request](#your-first-pull-request) below)

## Reporting and tracking issues {#reporting-and-tracking-issues}

If you need to file a bug or request a feature, [create an Issue in the OpenRefine Github repository](https://github.com/OpenRefine/OpenRefine/issues). Github issues should be used for reporting specific bugs and requesting specific features. If you just don't know how to do something using OpenRefine, or want to discuss some ideas, please:

- [Try the user manual](/)
- [Ask for help on our forum](http://forum.openrefine.org/)

## Contributing to the documentation {#contributing-to-the-documentation}

We use [Docusaurus](https://docusaurus.io/) for our docs. The repository for those docs is [OpenRefine/openrefine.org](https://github.com/OpenRefine/openrefine.org). For small documentation changes, you should be able to edit the Markdown files directly and submit them as a pull request. Each documentation page has a link at the bottom to help you do this in a few clicks. Once you submit your pull request, a preview of the docs will be generated automatically. 

But it is also possible to preview your changes locally.
We used Yarn to install Docusaurus, see `docs/yarn.lock`; 
or see [Docusaurus installation](https://docusaurus.io/docs/installation) for how to seed a new docusaurus project.

You need to have [Node.js](https://nodejs.org/en/download/) installed, which includes npm.
You also need to install [Yarn](https://yarnpkg.com/getting-started/install) before you can build the site:
```sh
npm install -g yarn
```

Once you have installed yarn, navigate to the `docs` directory & set-up the dependencies.
```sh
cd docs
yarn
```

Once this is done, generate the docs with:
```sh
yarn build
```

You can also spin a local web server to serve the docs for you.
A browser window will open at http://localhost:3000
and will auto-refresh when you edit the source files:
```sh
yarn start
```

## Your first code pull request {#your-first-code-pull-request}

This describes the overall steps to your first code contribution in OpenRefine. If you have trouble with any of these steps feel free to reach out on the [developer forum](https://forum.openrefine.org/c/dev/8) or the [Gitter channel](https://gitter.im/OpenRefine/OpenRefine).

First, why do you want to contribute to OpenRefine?
- Are you an OpenRefine user who wants to fix or improve an aspect of the tool? Great! Before you dive in and make your changes, make sure you discuss what you want to change with the community first. Check if there is a [GitHub issue](https://github.com/OpenRefine/OpenRefine/issues) on this topic already. If there is one, is there consensus around it? If not, it would be worth opening one. You are also welcome to discuss your plans in the [developer forum](https://forum.openrefine.org/c/dev/8).
- Do you want to contribute to an open source project and picked OpenRefine for that? Great too! It is useful if you first get a sense of what the tool does. [Install OpenRefine](docs/manual/installing.md) and learn to use it by following [some tutorials](/external_resources) or watching [some videos](https://www.youtube.com/watch?v=B70J_H_zAWM&list=PLYMbXPIhZRlVgxgljjZu6rsFl1yeXXLvp). Once you have a basic understanding of the use cases around OpenRefine, browse through the [list of issues](https://github.com/OpenRefine/OpenRefine/issues) to find an one that you find interesting. You should pick one where you understand what the problem is as a user, you can see why fixing it would be an improvement to the tool. It is also a good idea to pick an issue that matches your technical skills: some require work on the backend (in Java) or in the frontend (Javascript), often both. We try to maintain a list of [good first issues](https://github.com/OpenRefine/OpenRefine/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) which should be easier than others and should not require any difficult design decision.

### Set up the development environment

Once you know what to work on, you can set up a development environment so that you can make changes to OpenRefine and test them.
We have [detailed instructions for this](technical-reference/build-test-run.md).

If you want to tackle an existing bug, try to reproduce this bug in your development environment.
You might need to locate a particular dialog, use a specific importer on a sample file, or follow any other user workflow.
If you have followed all the steps described in the issue and cannot observe the issue mentioned, write a comment on the issue explaining that you are not able to reproduce it (perhaps it was fixed by another change).

### Locating the relevant part of the code to change

OpenRefine being a web app, it consists of a back-end (written in Java) and a front-end (written using jQuery). Depending on the issue you want to tackle, you might need to make changes to either parts, or both.
You do not need to be familiar with the directory structure of OpenRefine to locate which files to work on: you can often use text search across files to find out what to edit.

For instance, suppose the issue you want to solve is about a dialog entitled "Columnize by key/values".
The "columnize" term is likely rather specific and likely to be only used in this dialog or related menu entries, so you can search for this word in the entire repository. You can do so with [GitHub's search
  engine](https://github.com/OpenRefine/OpenRefine/search?q=columnize) or locally in your git clone, for instance with `grep -iR "columnize" .` (to search in file contents) or `find . | grep columnize` (to search in file names) on UNIX systems.

This will give you the following sorts of results, as of January 2023:
* `main/webapp/modules/core/scripts/views/data-table/key-value-columnize.html`: This file stores the HTML source of the dialog which configures the operation. This would be the place to change the layout of the dialog or add a button inside it, for instance.
* `main/webapp/modules/core/scripts/views/data-table/menu-edit-cells.js`:
  This file defines the contents of the "Edit cells" menu in each column, where the columnize operation can be found. It also defines the logic of the corresponding dialog.
* `main/webapp/modules/core/langs/translation-en.json`:
  This file defines the translations (here in English) for any text shown in the frontend, such as the menu item for the columnize operation, or text in its dialog.
* `main/tests/cypress/cypress/e2e/project/grid/column/transpose/columnize.cy.js`:
   The files under `main/tests/cypress` are [integration tests written in the Cypress framework](technical-reference/functional-tests.md): those describe a user interaction in the web-based UI and check that the expected results are obtained.
* `main/src/com/google/refine/operations/cell/KeyValueColumnizeOperation.java`: This file is part of the backend and implements the columnize operation itself. This is likely the file you will need to edit if you want to change the behaviour of the operation in some special cases.
* `main/tests/server/src/com/google/refine/operations/cell/KeyValueColumnizeTests.java`:
   Such a file defines a set of Java tests, used to check back-end functionality. This file checks that the operation behaves as expected in various scenarios.
* `main/resources/com/google/refine/operations/OperationDescription.properties`:
   Such a `.properties` files contains localized strings for the backend, in this case the description of the operation;
* `main/webapp/modules/core/MOD-INF/controller.js`: This files acts as a central registry which holds links to all the back-end and front-end components which make up the application. The columnize operation (implemented in the back-end) and the
  corresponding UI (implemented in the front-end) are all registered there.

### Testing your changes

Once you have made changes to the source code, you should test them to make sure they work as expected.
Manual testing is very useful for that, as it lets you judge the quality of the final user experience. On top of that, it is useful (and often required for your contribution to be accepted) to have automated tests. As mentioned above, those can come in two
forms:
* [Cypress integration tests](technical-reference/functional-tests.md), which should be used when you made changes to the frontend. Those tests are relatively slow to execute: therefore, consider adding assertions to an existing test which covers the area
  you are touching, if possible;
* Java unit tests, which should be used when you made changes to the backend. Those tests are faster to execute and generally more reliable.

### Submitting your changes

Once you have made sure your changes work as expected, you are ready to submit them for review.

- Create a git branch for your fix. The name of your branch should contain the issue number, and a few words to describe the topic of the fix, for instance "issue-1234-columnize-layout".

- If you made Java changes, run linting to make sure they conform to our code style, with `mvn formatter:format`.

- Commit your changes, using a message that contains one of the special words "closes" and "fixes" which are detected by Github, followed by the issue number, e.g. "closes #1234" or "fixes #1234", this will link the commit to the issue you are working on.

- Push your branch to your fork and create a pull request for it, explaining the approach you have used, any design decisions you have made.

Your changes will be reviewed and we might suggest improvements to your pull request. You can submit those follow-up changes by adding more commits to your branch. Your commits will generally be squashed when merging the pull request.
Thank you for your contribution!

## Contributing as a designer

There are plenty of areas where we would welcome help from design-oriented contributors, be it to improve existing features or to develop new ones.
If you want to give us a hand in this capacity, we recommend that you first get acquainted with OpenRefine as a user.
[Install OpenRefine](docs/manual/installing.md) and learn to use it by following [some tutorials](/external_resources) or watching [some videos](https://www.youtube.com/watch?v=B70J_H_zAWM&list=PLYMbXPIhZRlVgxgljjZu6rsFl1yeXXLvp). Even better, you could
use the tool on a dataset you are familiar with, to transform it and link it to other data sources, for instance.

Perhaps in that process you already encounter things that are counter-intuitive for you, workflows that could be improved, interfaces that could be made clearer, and so on. If that is the case, it is very useful if you give us this feedback. It could be on the forum, for instance in the Support category if you are not sure about something, or in the Design proposals category if you have a proposal for an alternative design. You could file a GitHub Issue directly.

If nothing catches your designer eye after using OpenRefine for a bit, then you could look at [issues where design proposals are needed](https://github.com/OpenRefine/OpenRefine/labels/design%20proposal%20needed). Those are issues where it would be useful to have a designer propose a particular bit of user interface to address the need. You could pick one and propose something there, for instance with mock screenshots made with the tool of your choice, or describing the desired interface in any way you like. You can do so by commenting in the GitHub issue directly. If your proposal gathers consensus in the community, then this would make it easier for a developer to tackle that issue.
