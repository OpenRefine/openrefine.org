module.exports = {
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  title: 'OpenRefine',
  tagline: 'A power tool for working with messy data.',
  url: 'https://openrefine.org',
  baseUrl: '/',
  trailingSlash: false,
  favicon: 'img/openrefine_logo.svg',
  organizationName: 'OpenRefine', // Usually your GitHub org/user name.
  projectName: 'openrefine.github.com', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'OpenRefine',
      logo: {
        alt: 'OpenRefine diamond logo',
        src: 'img/openrefine_logo.svg',
      },
      items: [
        {
          to: '/download',
          label: 'Download',
          position: 'left'
        },
        {
          to: '/docs',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: '/community',
          label: 'Community',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: '/donate',
          label: 'Donate',
          position: 'right',
        },
        {
          href: 'https://github.com/OpenRefine/OpenRefine',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      logo: {
        alt: 'OpenRefine diamond logo',
        src: 'img/openrefine_logo.svg',
        href: 'https://openrefine.org',
        height: 150,
      },
      style: 'dark',
      links: [
        {
          title: 'Get OpenRefine',
          items: [
            {
              label: 'Download',
              href: '/download',
            },
            {
              label: 'What\'s new',
              href: '/whats_new',
            },
            {
              label: 'Extensions',
              href: '/extensions',
            },
            {
              label: 'Other distributions',
              href: '/distributions',
            },
            {
              label: 'GitHub repository',
              href: 'https://github.com/OpenRefine/OpenRefine',
            },
          ],
        },
        {
          title: 'Documentation',
          items: [
            {
              label: 'User manual',
              href: '/docs',
            },
            {
              label: 'Technical reference',
              href: '/docs/technical-reference/technical-reference-index',
            },
            {
              label: 'External resources',
              href: '/external_resources',
            },
            {
              label: 'Privacy notice',
              href: '/privacy',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Get involved',
              href: '/community',
            },
            {
              label: 'Forum',
              href: 'https://forum.openrefine.org/'
            },
            {
              label: 'Gitter chat',
              href: 'https://gitter.im/OpenRefine/OpenRefine',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/openrefine',
            },
          ],
        },
      ],
      copyright: `<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br />OpenRefine's documentation is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.`,
    },
  },
  themes: [],
  plugins: [],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Docs folder path relative to website dir. Equivalent to `customDocsPath`.
          // path: 'docs',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.js'),
          // Equivalent to `editUrl` but should point to `website` dir instead of `website/docs`.
          editUrl: 'https://github.com/OpenRefine/openrefine.github.com/edit/master',
          // Equivalent to `docsUrl`.
          routeBasePath: '/docs/',
          // Remark and Rehype plugins passed to MDX. Replaces `markdownOptions` and `markdownPlugins`.
          remarkPlugins: [],
          rehypePlugins: [],
          // Equivalent to `enableUpdateBy`.
          showLastUpdateAuthor: true,
          // Equivalent to `enableUpdateTime`.
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src: '/js/fix-location.js',
      async: false,
      defer: false,
    },
  ],
};
