export default async function createConfigAsync() {

return {
  markdown: {
    mermaid: true,
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onBrokenAnchors: 'warn',
  title: 'OpenRefine',
  tagline: 'A power tool for working with messy data.',
  url: 'https://openrefine.org',
  baseUrl: '/',
  trailingSlash: false,
  favicon: 'img/openrefine_logo.svg',
  organizationName: 'OpenRefine', // Usually your GitHub org/user name.
  projectName: 'openrefine.github.com', // Usually your repo name.
  themes: ['@docusaurus/theme-mermaid'],
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
          position: 'left',
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
          position: 'left',
        },
        {
          to: '/donate',
          label: 'Donate',
          position: 'right',
        },
        {
          to: 'https://forum.openrefine.org/',
          label: 'Forum',
          position: 'right',
        },
        {
          href: 'https://github.com/OpenRefine/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
	    apiKey: '240040de4cd636e60bfb796f913dda5a',
            appId: 'RXJKLJKJU2',
	    indexName: 'openrefineorg',
	    contextualSearch: true,
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
              label: "What's new",
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
              label: 'Ecosystem',
              href: '/ecosystem',
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
              label: 'Training and Courses',
              href: '/external_resources',
            },
            {
              label: 'Contributing',
              href: '/docs/technical-reference/contributing',
            },     
            {
              label: 'Privacy notice',
              href: '/privacy',
            },
          ],
        },
       {
          title: 'About OpenRefine',
          items: [
            {
              label: 'Mission and Vision',
              href: '/mission_vision',
            },
            {
              label: 'Project history',
              href: '/openrefine_history',
            },
            {
              label: 'Project Roles and Governance',
              href: '/community',
            },
            {
              label: 'Who uses OpenRefine',
              href: '/usage',
            },            
            {
              label: 'Grants & funding',
              href: '/funding',
            },   
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/OpenRefine',
            },
            {
              label: 'Forum',
              href: 'https://forum.openrefine.org/',
            },
            {
              label: 'Gitter chat',
              href: 'https://gitter.im/OpenRefine/OpenRefine',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/openrefine',
            },
            {
              html: `
                  <a rel="me" class="footer__link-item" target="_blank" href="https://fosstodon.org/@OpenRefine">Mastodon<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
                `
            },
          ],
        },
      ],
      copyright: `<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a><br />OpenRefine's website and documentation is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.`,
    },
  },
  plugins: ['./src/plugins/docusaurus-versionsjson-plugin'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
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
        blog: {
          blogSidebarCount: 'ALL',
          onInlineAuthors: 'ignore',
          
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        svgr: {
          svgrConfig: {
            // Your SVGR options ...
            svgoConfig: {
              // Your SVGO options ...
              // Use "svgoConfig: undefined" to use a svgo.config.js file
            },
          },
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
}
