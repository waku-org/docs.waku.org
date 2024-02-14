// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
	guides: [
		"guides/getting-started",
		{
			type: "category",
			label: "Run a Nwaku Node",
			link: {
				type: "doc",
				id: "guides/nwaku/run-node",
			},
			items: [
				"guides/nwaku/build-source",
				"guides/nwaku/run-docker",
				"guides/nwaku/run-docker-compose",
				"guides/nwaku/configure-discovery",
				"guides/nwaku/configure-nwaku",
				"guides/nwaku/config-methods",
				"guides/nwaku/config-options",
				{
					type: 'html',
					value: '<a href="https://waku-org.github.io/waku-rest-api/" target="_blank" rel="noopener noreferrer" class="menu__link external-link">REST API Reference<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1918 4H3.42848V2.85715H13.1428V12.5714H11.9999V4.80813L3.83254 12.9755L3.02441 12.1674L11.1918 4Z" fill="white"/></svg>',
				},
			]
		},
		{
			type: "category",
			label: "JavaScript Waku SDK",
			link: {
				type: "doc",
				id: "guides/js-waku/index",
			},
			items: [
				"guides/js-waku/light-send-receive",
				"guides/js-waku/store-retrieve-messages",
				"guides/js-waku/message-encryption",
				"guides/js-waku/use-waku-react",
				"guides/js-waku/use-waku-create-app",
				"guides/js-waku/configure-discovery",
				"guides/js-waku/run-waku-nodejs",
				"guides/js-waku/debug-waku-dapp",
				"guides/js-waku/manage-filter",
				{
					type: 'html',
					value: '<a href="https://examples.waku.org" target="_blank" rel="noopener noreferrer" class="menu__link external-link">@waku/sdk Examples<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1918 4H3.42848V2.85715H13.1428V12.5714H11.9999V4.80813L3.83254 12.9755L3.02441 12.1674L11.1918 4Z" fill="white"/></svg>',
				},
				{
					type: 'html',
					value: '<a href="https://js.waku.org" target="_blank" rel="noopener noreferrer" class="menu__link external-link">API Reference<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1918 4H3.42848V2.85715H13.1428V12.5714H11.9999V4.80813L3.83254 12.9755L3.02441 12.1674L11.1918 4Z" fill="white"/></svg>',
				},
			]
		},
	],
	learn: [
		"learn/waku-network",
		{
			type: "category",
			label: "Concepts",
			collapsed: false,
			items: [
				"learn/concepts/protocols",
				"learn/concepts/content-topics",
				"learn/concepts/network-domains",
				"learn/concepts/transports",
				{
					type: "category",
					label: "Peer Discovery",
					link: {
						type: "doc",
						id: "learn/concepts/peer-discovery",
					},
					items: [
						"learn/concepts/static-peers",
						"learn/concepts/dns-discovery",
						"learn/concepts/discv5",
						"learn/concepts/peer-exchange",
					]
				},
			]
		},
		"learn/security-features",
		"learn/research",
		"learn/waku-vs-libp2p",
		"learn/glossary",
	],
	research: [
		{
			type: "category",
			label: "Research and Studies",
			collapsed: false,
			items: ["research/research-and-studies/incentivisation"],
		},
		{
			type: "category",
			label: "Nwaku Benchmarks",
			collapsed: false,
			items: ["research/benchmarks/postgres-adoption"],
		},
	],
};

module.exports = sidebars;