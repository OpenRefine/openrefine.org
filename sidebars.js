module.exports = {
  docs: {
    'User Manual': [
      'index',
      'manual/installing',
      'manual/running',
      'manual/starting',
	        {
      type: 'category',
      label: 'Exploring data',
      items: ['manual/exploring', 'manual/facets', 'manual/sortview'],
    },
	    {
      type: 'category',
      label: 'Transforming data',
      items: ['manual/transforming', 'manual/cellediting','manual/columnediting','manual/transposing'],
    },
      'manual/reconciling',
      {
        type: 'category',
        label: 'Wikibase, Wikidata and Wikimedia Commons',
        items: ['manual/wikibase/overview', 'manual/wikibase/configuration', 'manual/wikibase/reconciling', 'manual/wikibase/schema-alignment',
                'manual/wikibase/new-entities', 'manual/wikibase/quality-assurance', 'manual/wikibase/uploading'],
      },
	    {
      type: 'category',
      label: 'Expressions',
      items: ['manual/expressions', 'manual/grel', 'manual/grelfunctions', 'manual/jythonclojure'],
    },
      'manual/exporting',
      'manual/troubleshooting'
    ],
   'GREL Reference': [
	   'manual/grelfunctions'],
    'Technical Reference': [
      {
        type: 'category',
        label: 'Contributing to OpenRefine',
        items: [
            'technical-reference/contributing',
            'technical-reference/build-test-run',
            'technical-reference/functional-tests',
            'technical-reference/development-roadmap',
            'technical-reference/translating-ui',
        ]
      },
      {
        type: 'category',
        label: 'Architecture',
        items: [
            'technical-reference/architecture',
            'technical-reference/clustering-in-depth',
            'technical-reference/openrefine-api',
            'technical-reference/reconciliation-api',
        ]
      },
      {
        type: 'category',
        label: 'Extensions',
        items: [
          'technical-reference/writing-extensions',
          'technical-reference/migrating-older-extensions',
          'technical-reference/wikibase/architecture'
        ]
      },
      {
        type: 'category',
        label: 'Maintaining OpenRefine',
        items: [
         'technical-reference/maintainer-guidelines',
         'technical-reference/version-release-process',
         'technical-reference/homebrew-cask-process'
        ]
      }      
  ]
  },
};
