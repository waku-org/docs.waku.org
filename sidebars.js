// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
	main: [
		"overview/index",
		"overview/history",
		"overview/why-waku",
		"overview/use-cases",
		"overview/clients",
		"overview/who-is-using-waku",
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
				"overview/concepts/transports"
			]
		},
		{
			type: "category",
			label: "Reference",
			collapsed: false,
			collapsible: true,
			items: [
				"overview/reference/security-features",
				"overview/reference/research-in-progress",
				"overview/reference/waku-vs-libp2p"
			]
		}
	],
	js: [
		"clients/js-waku/index"
	]
};

module.exports = sidebars;