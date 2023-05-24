// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require("dotenv").config();

/** @type {import("@docusaurus/types").Config} */
const config = {
	title: "Waku Documentation Portal",
	url: "https://waku.guide/",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"]
	},
	presets: [
		[
			"@acid-info/logos-docusaurus-preset",
			({
				businessUnit: "Waku",
				customSiteConfig: true,
				docs: {
					routeBasePath: "/",
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl: "https://github.com/waku-org/waku.guide/tree/develop/"
				},
				theme: {
					name: "docusaurus-default",
					options: {
						customCss: [require.resolve("./src/css/custom.scss")]
					}
				}
			})
		]
	],
	staticDirectories: ["static"],
	themeConfig: ({
		docs: {
			sidebar: {
				hideable: false
			}
		},
		navbar: {
			title: "Waku",
			logo: {
				srcDark: "img/logo_white.svg"
			},
			hideOnScroll: true,
			items: [
				{
					type: "docSidebar",
					position: "right",
					sidebarId: "main",
					label: "Getting Started"
				},
				{
					type: "dropdown",
					label: "Waku SDKs",
					position: "right",
					items: [
						{
							label: "Overview",
							to: "/sdk/overview"
						}
					]
				},
				{
					to: "/powered-by-waku",
					label: "Powered by Waku",
					position: "right"
				},
				{
					type: "dropdown",
					label: "Community",
					position: "right",
					items: [
						{
							label: "Join Our Community",
							to: "/community"
						},
						{
							label: "Contribute to Waku",
							to: "/contribute"
						},
						{
							label: "Watch Our Presentations",
							to: "/presentations"
						}
					]
				},
				{
					href: "https://github.com/waku-org",
					position: "right",
					className: "header-github-link",
					title: "Waku GitHub repository"
				},
			]
		},
		footer: {
			links: [
				{
					title: "Waku SDKs",
					items: [
						{
							to: "/sdk/overview",
							label: "Overview"
						}
					]
				},
				{
					title: "Community",
					items: [
						{
							href: "https://forum.vac.dev/",
							label: "Forum"
						},
						{
							href: "https://discord.gg/Nrac59MfSX",
							label: "Discord"
						},
						{
							href: "https://twitter.com/waku_org",
							label: "Twitter"
						},
						{
							href: "https://t.me/waku_org",
							label: "Telegram"
						}
					]
				},
				{
					title: "Resources",
					items: [
						{
							href: "https://github.com/waku-org",
							label: "GitHub"
						},
						{
							href: "https://vac.dev/research",
							label: "Blog"
						},
						{
							href: "https://rfc.vac.dev/",
							label: "Vac RFCs"
						}
					]
				},
				{
					title: "Legal",
					items: [
						{
							href: "https://waku.org/terms-of-use",
							label: "Terms of Use"
						},
						{
							href: "https://waku.org/privacy-policy",
							label: "Privacy Policy"
						},
						{
							html: "<link rel='stylesheet' href='/custom.css' />"
						}
					]
				}
			]
		},
		colorMode: {
			defaultMode: "light",
			disableSwitch: false,
			respectPrefersColorScheme: false
		}
	}),
	plugins: [
		[
			"@easyops-cn/docusaurus-search-local",
			{
				hashed: true,
				indexDocs: true,
				indexPages: true
			}
		]
	],
	themes: ["@docusaurus/theme-mermaid"],
	markdown: {
		mermaid: true
	}
};

module.exports = config;