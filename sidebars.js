// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  main: [
    "overview/introduction",
    "overview/history",
    "overview/motivation-and-goals",
    "overview/why-waku",
    "overview/who-is-using-waku",
    "overview/implementations",
    "overview/how-does-it-work",
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
      "browser/introduction"
  ]
};

module.exports = sidebars;
