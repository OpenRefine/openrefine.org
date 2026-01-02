OpenRefine.org website
======================

We use [Docusaurus](https://docusaurus.io/) for our website.

If you want to run it locally, you can follow the instructions below, otherwise you should be able to edit most pages directly with a Markdown editor or IDE.
Opening a pull request for your changes will generate a preview on Netlify that you can browse to check the rendering.

### Requirements

- [Node.js (LTS recommended)](https://nodejs.org/en/download/)

### Installation

CD into the repository parent folder and install dependencies

```sh
cd /openrefine.github.com
npm install
```

### Local Development

Start the development server on localhost

```sh
npm run start
```

This command starts a local development server and opens up a browser window. Usually at the URL <http://localhost:3000>
Most changes are reflected live without having to restart the server.

### (Optional) Test Build Locally
You can locally test ([with parameters](https://docusaurus.io/docs/cli#docusaurus-serve-sitedir)) the static content in the `build` directory (in case you don't have access to a hosting service) by using:

```sh
npm run serve
```

### Deployment

If you are using GitHub pages for hosting, this command is a convenient way to build the website
and push to the `gh-pages` branch.

```sh
GIT_USER=<Your GitHub username> USE_SSH=true npm run deploy
```

### License

This website is published under the [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
