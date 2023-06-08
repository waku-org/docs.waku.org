// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
	main: [
		"getting-started/index",
		"getting-started/history",
		"getting-started/why-waku",
		"getting-started/use-cases",
		{
			type: 'html',
			value:
			  '<a href="/guides/sdks-and-nodes" target="_blank" rel="noopener noreferrer" class="menu__link external-link">SDKs and Nodes<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1918 4H3.42848V2.85715H13.1428V12.5714H11.9999V4.80813L3.83254 12.9755L3.02441 12.1674L11.1918 4Z" fill="white"/></svg>',
		},
		{
			type: 'html',
			value:
			  '<a href="/presentations" target="_blank" rel="noopener noreferrer" class="menu__link external-link">Presentations<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1918 4H3.42848V2.85715H13.1428V12.5714H11.9999V4.80813L3.83254 12.9755L3.02441 12.1674L11.1918 4Z" fill="white"/></svg>',
		},
		{
			type: "category",
			label: "Concepts",
			collapsed: false,
			collapsible: true,
			items: [
				"getting-started/concepts/protocols",
				"getting-started/concepts/content-topics",
				"getting-started/concepts/network-domains",
				"getting-started/concepts/peer-discovery",
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