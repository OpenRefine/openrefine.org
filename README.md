OpenRefine.org website
======================

We use [Docusaurus](https://docusaurus.io/) for our website.

If you want to run it locally, you can follow the instructions below, otherwise you should be able to edit most pages directly with a Markdown editor.
Opening a pull request for your changes will generate a preview that you can browse to check the rendering.

### Requirements

Assuming you have [Node.js (LTS recommended)](https://nodejs.org/en/download/) installed (which now includes corepack), you can install Docusaurus with:

Enable Corepack, if it isn't already; this will add the [Yarn](https://yarnpkg.com/getting-started/install) binary to your PATH:

```sh
corepack enable
```

Update Yarn to the latest version:

```sh
yarn set version stable
```

### Installation

Once you have installed yarn, navigate to docs directory & set-up the dependencies.

```sh
cd docs
yarn
```

### Local Development

```sh
yarn start
```

This command starts a local development server and opens up a browser window. Usually at the URL <http://localhost:3000>
Most changes are reflected live without having to restart the server.

If you get an error starting yarn mentioning `update.latest` such as

```sh
>yarn start

if (notifier.update && semver.gt(this.update.latest, this.update.current)) {
TypeError: Cannot read property 'latest' of undefined
    at Object.<anonymous> (E:\GitHubRepos\OpenRefine\docs\node_modules\@docusaurus\core\bin\docusaurus.js:49:46)
error Command failed with exit code 1.
```

then it is likely that you will need to first upgrade dependencies across all workspaces at the same time

```sh
yarn up
```

which will update all dependencies and store them in the `yarn.lock` file to also be committed.

### Next version of OpenRefine docs

If you wish to work on the next version of docs for OpenRefine (`master` branch) then you will need to:

1. Git checkout our `master` branch
2. Edit files under `docs/docs/`
3. Preview changes with the URL kept pointing to <http://localhost:3000/next> which will automatically
   show changes live with yarn after you save a file.

### Build

```sh
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
### (Optional) Test Build Locally
You can locally test ([with parameters](https://docusaurus.io/docs/cli#docusaurus-serve-sitedir)) the static content in the `build` directory (in case you don't have access to a hosting service) by using:

```sh
yarn serve
```

or to build and then serve locally with one command:

```sh
yarn serve --build
```

### Deployment

```sh
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website
and push to the `gh-pages` branch.

### License

This website is published under the [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
