// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Waku Documentation Portal",
  url: "https://waku.guide/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@acid-info/logos-docusaurus-preset",
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        businessUnit: "Waku",
        customSiteConfig: true,
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/waku-org/waku.guide/tree/develop/",
        },
        theme: {
          name: "docusaurus-default",
          options: {
            customCss: [require.resolve("./src/css/custom.scss")],
          },
        },
      }),
    ],
  ],
  staticDirectories: ["static"],
  themeConfig:
    /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
    ({
      navbar: {
        title: "Waku",
        logo: {
          srcDark: "logo_white.svg",
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'main',
            label: 'Overview',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'browser',
            label: 'JavaScript (Browser)',
          },
        ],
      },
      announcementBar: {
        content:
          "Waku is not production ready yet. Join our <a href='https://discord.gg/Nrac59MfSX'>Discord Community</a> to stay updated.",
        backgroundColor: "#EBEDF0",
        textColor: "#1B1B1D",
        isCloseable: true,
      },
      footer: {
        links: [
          {
            title: "Legal",
            items: [
              {
                href: "https://waku.org/terms-of-use",
                label: "Terms of Use",
              },
              {
                href: "https://waku.org/privacy-policy",
                label: "Privacy Policy",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                href: "https://forum.vac.dev/",
                label: "Discourse",
              },
              {
                href: "https://discord.gg/Nrac59MfSX",
                label: "Discord",
              },
              {
                href: "https://twitter.com/waku_org",
                label: "Twitter",
              },
              {
                href: "https://t.me/waku_org",
                label: "Telegram",
              },
              ],
          },
          {
            title: "Resources",
            items: [
              {
                href: "https://github.com/waku-org",
                label: "GitHub",
              },
              {
                href: "https://vac.dev/research",
                label: "Blog",
              },
              {
                href: "https://vac.dev/",
                label: "Vac",
              },
              {
                href: "https://rfc.vac.dev/",
                label: "Vac RFCs",
              },
              ],
          },
        ],
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    }),

  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
      },
    ],
  ],
  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },
};

module.exports = config;
