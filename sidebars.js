// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
	main: [
		"overview/index",
		"overview/history",
		"overview/why-waku",
		"overview/use-cases",
		{
			type: 'html',
			value: '<a href="/guides/nodes-and-sdks" target="_blank" rel="noopener noreferrer" class="menu__link external-link">Nodes and SDKs<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1918 4H3.42848V2.85715H13.1428V12.5714H11.9999V4.80813L3.83254 12.9755L3.02441 12.1674L11.1918 4Z" fill="white"/></svg>',
		},
		{
			type: 'html',
			value: '<a href="/presentations" target="_blank" rel="noopener noreferrer" class="menu__link external-link">Presentations<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1918 4H3.42848V2.85715H13.1428V12.5714H11.9999V4.80813L3.83254 12.9755L3.02441 12.1674L11.1918 4Z" fill="white"/></svg>',
		},
		{
			type: "category",
			label: "Concepts",
			collapsed: false,
			items: [
				"overview/concepts/protocols",
				"overview/concepts/content-topics",
				"overview/concepts/network-domains",
				{
					type: "category",
					label: "Peer Discovery",
					link: {
						type: "doc",
						id: "overview/concepts/peer-discovery",
					},
					items: [
						"overview/concepts/predefined-nodes",
						"overview/concepts/dns-discovery",
						"overview/concepts/discv5",
						"overview/concepts/peer-exchange",
					]
				},
				"overview/concepts/transports",
			]
		},
		{
			type: "category",
			label: "Reference",
			items: [
				"overview/reference/glossary",
				"overview/reference/security-features",
				"overview/reference/research-in-progress",
				"overview/reference/waku-vs-libp2p",
			]
		}
	],
	guides: [
		"guides/nodes-and-sdks",
		"guides/run-nwaku-node",
	],
	community: [
		"powered-by-waku",
		"community",
		"contribute",
		"presentations",
		{
			type: 'html',
			value: '<a href="https://hackenproof.com/status-dot-im/waku" target="_blank" rel="noopener noreferrer" class="menu__link external-link">Bug Bounty Program<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1918 4H3.42848V2.85715H13.1428V12.5714H11.9999V4.80813L3.83254 12.9755L3.02441 12.1674L11.1918 4Z" fill="white"/></svg>',
		},
	]
};

module.exports = sidebars;