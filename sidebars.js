// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
	main: [
		"getting-started/index",
		"getting-started/history",
		"getting-started/why-waku",
		"getting-started/use-cases",
		{
			type: "link",
			label: "SDKs and Nodes",
			href: "/guides/sdks-and-nodes"
		},
		{
			type: "link",
			label: "Video Presentations",
			href: "/presentations"
		},
		{
			type: "category",
			label: "Concepts",
			collapsed: false,
			collapsible: true,
			items: [
				"getting-started/concepts/protocols",
				"getting-started/concepts/peer-discovery",
				"getting-started/concepts/network-domains",
				"getting-started/concepts/content-topics",
				"getting-started/concepts/transports"
			]
		},
		{
			type: "category",
			label: "Reference",
			collapsed: false,
			collapsible: true,
			items: [
				"getting-started/reference/glossary",
				"getting-started/reference/security-features",
				"getting-started/reference/research-in-progress",
				"getting-started/reference/waku-vs-libp2p"
			]
		}
	],
	guides: [
		"guides/sdks-and-nodes"
	],
	community: [
		"powered-by-waku",
		"community",
		"contribute",
		"presentations"
	]
};

module.exports = sidebars;