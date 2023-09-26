---
id: documentation-contributions
title: Documentation contributions
sidebar_label: Documentation contributions
---

We welcome contributions to our documentation, which is maintained as a set of [Markdown](https://www.markdownguide.org/) files in the [OpenRefine/openrefine.org](https://github.com/OpenRefine/openrefine.org) Git repository.

##  Single page edit via GitHub web interface

For changes made to a single page, you do not need to be familiar with Git. Go to the page you want to change and click "Edit this page" at the bottom of the page. This will lead you to GitHub, where you will need to have an account. You will be then guided through the process of proposing those changes (which will create a "Pull Request" in GitHub's terms).

Once your pull request is open, your changes will be checked automatically for common issues, and if all goes well a preview of the website with your changes will be generated.
We will then review your changes and integrate them to the website.

## Multi-page edit by editing the documentation locally

For more complex changes, it is helpful to check how the website looks after your changes, before you submit them. For this workflow you will need to install:
* a Git client, such as GitHub Desktop or the `git` command-line tool if you are comfortable working from the terminal;
* [Node.js](https://nodejs.org/en/download/)
* [Yarn](https://yarnpkg.com/getting-started/install), which can be installed with
```sh
npm install -g yarn
```
after having installed Node.js.

Once you have installed those tools, create a private fork of the [OpenRefine/openrefine.org](https://github.com/OpenRefine/openrefine.org) repository and clone your fork, then change to the clone:

git clone git@github.com:<myaccount>/openrefine.org.git
cd openrefine.org
```sh
yarn
```
This will install the dependencies required to generate the site, which is mainly [Docusaurus](https://docusaurus.io/).

Once this is done, generate the docs with:
```sh
yarn start
```
This will spin a local web server to serve the docs for you.
A browser window will open at http://localhost:3000
and will auto-refresh when you edit the source files.

You could also generate the website as a set of static files, although this should generally not be needed:
```sh
yarn build
```

Once you are happy with your changes, you can submit them as a pull request.
