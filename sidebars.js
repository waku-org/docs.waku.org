// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  main: [
    "overview/what-is-waku",
    "overview/history",
    "overview/why-waku",
    "overview/use-cases",
    "overview/who-is-using-waku",
    "overview/implementations",
    {
      type: "category",
      label: "Waku Concepts",
      collapsed: false,
      collapsible: true,
      items: [
        "overview/concepts/protocols",
        "overview/concepts/network-domains",
        "overview/concepts/node-discovery",
        "overview/concepts/content-topics",
        "overview/concepts/transports",
      ],
    },
    {
      type: "category",
      label: "Reference",
      collapsed: true,
      collapsible: true,
      items: [
        "overview/reference/security-features",
        "overview/reference/research-in-progress",
        "overview/reference/waku-vs-libp2p",
        ],
    },
  ],
  browser: [
      "browser/introduction",
      "browser/quick-start",
      "browser/build-chat-app",
  ]
};

module.exports = sidebars;
