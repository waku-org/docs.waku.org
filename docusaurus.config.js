// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Waku guides",
  tagline: "Waku is the communication layer for Web3.",
  url: "https://waku.guide/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "waku-org", // Usually your GitHub org/user name.
  projectName: "waku.guide", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/waku-org/waku.guide/tree/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Waku",
      logo: {
        alt: "Waku Logo",
        src: "img/logo.svg",
      },

      items: [
        {
          type: "doc",
          docId: "About/1",
          position: "left",
          label: "About",
        },
        {
          type: "doc",
          docId: "Concepts/1",
          position: "left",
          label: "Concepts",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/Nrac59MfSX",
            },
            {
              label: "Discourse",
              href: "https://forum.vac.dev/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/waku_org",
            },
            {
              label: "Telegram",
              href: "https://t.me/waku_org"
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Status Gmbh. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
