module.exports = {
  title: 'Snippetbase',
  tagline: 'My personal snippetbase, ugly and fast',
  url: 'https://github.com/ddazi/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ddazi', // Usually your GitHub org/user name.
  projectName: 'da-zi.de', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode:'dark',
      disableSwitch: true,
    },
    navbar: {
      title: 'Snippetbase',
      logo: {
        alt: 'Dazi Logo',
        src: 'https://avatars3.githubusercontent.com/u/22190268?s=460&u=853ca6b8be6c8e20f589aecfc6b04b14bc0c54e8&v=4',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Snippets',
          position: 'left',
        },
      //  {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ddazi/',
          label: 'GitHub',
          position: 'left',
        },        {
          href: 'https://about.me/dannyzimmer/',
          label: 'About me',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'Xing',
              href: 'https://www.xing.com/profile/Danny_Zimmer3',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/danny-z-9ab752127/',
            },            {
              label: 'about.me',
              href: 'https://about.me/dannyzimmer/',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'maexware solutions GmbH',
              href: 'https://maexware-solutions.de',
            },
            {
              label: 'Oxid',
              href: 'https://oxid-esales.com/',
            },
            {
              label: 'Shopware',
              href: 'https://www.shopware.com/',
            },
          ],
        },
        {
          title: 'Documentations',
          items: [
            {
              label: 'Oxid 6.0 dev',
              href: 'https://docs.oxid-esales.com/developer/en/6.0/',
            },
            {
              label: 'Shopware 6.0 dev',
              href: 'https://docs.shopware.com/en/shopware-platform-dev-en',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  plugins: ['@docusaurus/plugin-ideal-image'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ddazi/da-zi.de/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
