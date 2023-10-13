/*
  This plugin generates a JSON file exposing release information, added at
  the root of the generated website. This file is meant to be used by OpenRefine to check
  for new versions. 

  It is inspired from https://www.aknapen.nl/blog/how-to-build-a-plugin-for-docusaurus-v2/
  and docusaurus' sitemap plugin.

  See https://github.com/OpenRefine/openrefine.org/issues/241
*/

const fs = require('fs-extra');
const path = require('path');
const releases = require('../../../releases.json');
const releaseUtils = require('../../releases.js');

function releaseJSON(release) {
   return {
      ...release,
      artifacts: release.artifacts.map(artifact => ({
         ...artifact,
         url: releaseUtils.getDownloadLink(release, artifact.platform)
      }))
   };
}

module.exports = function (context) {
  return {
    name: 'docusaurus-plugin-versionsjson',
    async postBuild({siteConfig, routesPaths, outDir, head}) {

      // Write versions.json file at root of generated website
      const sitemapPath = path.join(outDir, 'versions.json');
      try {
        let versionsJSON = {
          releases: releases.map(releaseJSON)
        };
        await fs.outputFile(sitemapPath, JSON.stringify(versionsJSON));
      } catch (err) {
        logger.error('Writing versions.json failed.');
        throw err;
      }
    },
  }
}
