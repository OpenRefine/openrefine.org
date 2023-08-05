---
id: documentation-contributions
title: Documentation contributions
sidebar_label: Documentation contributions
---

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


