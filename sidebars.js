// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  docs: [
    "introduction",
    "history",
    "motivation-and-goals",
    "why-waku",
    "who-is-using-waku",
    "implementations",
    "how-does-it-work",
    {
      type: "category",
      label: "Concepts",
      collapsed: false,
      collapsible: true,
      items: [
        "Concepts/different-protocols",
        "Concepts/protocols-explained",
        "Concepts/protocols-overview-by-example",
        "Concepts/discovery-and-bootstrap",
        "Concepts/transports-in-waku",
        "Concepts/content-topics",
        "Concepts/security-features",
        "Concepts/research-in-progress",
        "Concepts/waku-vs-libp2p",
      ],
    },
  ],
};

module.exports = sidebars;
