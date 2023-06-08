// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
	main: [
		{
			type: "category",
			label: "About Waku",
			collapsible: false,
			items: [
				"overview/index",
				"overview/history",
				"overview/why-waku",
				"overview/use-cases",
				{
					type: "html",
					value: "<a href='/guides/nodes-and-sdks' target='_blank' rel='noopener noreferrer' class='menu__link external-link'>Nodes and SDKs <svg width='13.5' height='13.5' viewBox='0 0 24 24'><path fill='currentColor' d='M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z'></path></svg></a>"
				},
				{
					type: "html",
					value: "<a href='/presentations' target='_blank' rel='noopener noreferrer' class='menu__link external-link'>Presentations <svg width='13.5' height='13.5' viewBox='0 0 24 24'><path fill='currentColor' d='M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z'></path></svg></a>"
				},
				{
					type: "category",
					label: "Concepts",
					collapsed: false,
					items: [
						"overview/concepts/protocols",
						"overview/concepts/content-topics",
						"overview/concepts/network-domains",
						"overview/concepts/peer-discovery",
						"overview/concepts/transports"
					]
				},
				{
					type: "category",
					label: "Reference",
					items: [
						"overview/reference/glossary",
						"overview/reference/security-features",
						"overview/reference/research-in-progress",
						"overview/reference/waku-vs-libp2p"
					]
				}
			]
		}
	],
	guides: [
		{
			type: "category",
			label: "Guides",
			collapsible: false,
			items: [
				"guides/nodes-and-sdks",
				"guides/run-nwaku-node"
			]
		}
	],
	community: [
		{
			type: "category",
			label: "Community",
			collapsible: false,
			items: [
				"powered-by-waku",
				"community",
				"contribute",
				"presentations",
				{
					type: "link",
					label: "Bug Bounty Program",
					href: "https://hackenproof.com/status-dot-im/waku"
				}
			]
		}
	]
};

module.exports = sidebars;