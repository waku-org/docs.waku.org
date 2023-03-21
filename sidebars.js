// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  main: [
    "main/introduction",
    "main/history",
    "main/motivation-and-goals",
    "main/why-waku",
    "main/who-is-using-waku",
    "main/implementations",
    "main/how-does-it-work",
    {
      type: "category",
      label: "Concepts",
      collapsed: false,
      collapsible: true,
      items: [
        "main/concepts/different-protocols",
        "main/concepts/protocols-explained",
        "main/concepts/protocols-overview-by-example",
        "main/concepts/discovery-and-bootstrap",
        "main/concepts/transports-in-waku",
        "main/concepts/content-topics",
        "main/concepts/security-features",
        "main/concepts/research-in-progress",
        "main/concepts/waku-vs-libp2p",
      ],
    },
  ],
  browser: [
      "browser/introduction"
  ]
};

module.exports = sidebars;
