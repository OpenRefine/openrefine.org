/*
  This plugin generates a JSON file exposing extension information, added at
  the root of the generated website. This file is meant to be used by OpenRefine
  to fetch compatible extensions and enable in-app extension management.
*/

const fs = require('fs-extra');
const path = require('path');
const extensionsData = require('../../../src/data/extensions.json');

module.exports = function (context) {
  return {
    name: 'docusaurus-plugin-extensionsjson',
    async postBuild({siteConfig, routesPaths, outDir, head}) {

      const extensionsPath = path.join(outDir, 'extensions.json');
      try {
        const apiResponse = {
          version: '1.0',
          lastUpdated: new Date().toISOString(),
          extensions: extensionsData,
          categories: [...new Set(extensionsData.map(ext => ext.category))].sort(),
          statuses: ['maintained', 'archived', 'legacy'],
          difficulties: ['beginner', 'intermediate', 'advanced']
        };

        await fs.outputFile(extensionsPath, JSON.stringify(apiResponse, null, 2));
        console.log('[extensions-plugin] Generated extensions.json with ' + extensionsData.length + ' extensions');
      } catch (err) {
        console.error('[extensions-plugin] Writing extensions.json failed.');
        throw err;
      }
    },
  };
};
