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
      label: "Concepts",
      collapsed: false,
      collapsible: true,
      items: [
        "overview/concepts/different-protocols",
        "overview/concepts/protocols-explained",
        "overview/concepts/protocols-overview-by-example",
        "overview/concepts/discovery-and-bootstrap",
        "overview/concepts/transports-in-waku",
        "overview/concepts/content-topics",
        "overview/concepts/security-features",
        "overview/concepts/research-in-progress",
        "overview/concepts/waku-vs-libp2p",
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
