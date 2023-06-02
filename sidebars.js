// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
	main: [
		"getting-started/index",
		"getting-started/history",
		"getting-started/why-waku",
		"getting-started/use-cases",
		{
			type: "html",
			value: "<a href='/guides/sdks-and-nodes' target='_blank' rel='noopener noreferrer' class='menu__link external-link'>SDKs and Nodes <svg width='13.5' height='13.5' viewBox='0 0 24 24'><path fill='currentColor' d='M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z'></path></svg></a>"
		},
		{
			type: "html",
			value: "<a href='/presentations' target='_blank' rel='noopener noreferrer' class='menu__link external-link'>Presentations <svg width='13.5' height='13.5' viewBox='0 0 24 24'><path fill='currentColor' d='M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z'></path></svg></a>"
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