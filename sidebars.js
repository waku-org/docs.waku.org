// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
	main: [
		"overview/index",
		"overview/history",
		"overview/why-waku",
		"overview/use-cases",
		{
			type: "link",
			label: "Waku SDKs",
			href: "/sdk/overview"
		},
		{
			type: "link",
			label: "Presentations",
			href: "/presentations"
		},
		{
			type: "category",
			label: "Concepts",
			collapsed: false,
			collapsible: true,
			items: [
				"overview/concepts/protocols",
				"overview/concepts/peer-discovery",
				"overview/concepts/network-domains",
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
	sdk: [
		"sdk/index"
	],
	community: [
		"powered-by-waku",
		"community",
		"contribute",
		"presentations"
	]
};

module.exports = sidebars;