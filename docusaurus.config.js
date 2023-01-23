// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Waku Guides",
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/waku-org/waku.guide/tree/staging/",
        },
        theme: {
          name: "default",
          options: {
            customCss: [require.resolve("./src/css/custom.scss")],
          },
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
    ({}),

  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },
};

module.exports = config;
