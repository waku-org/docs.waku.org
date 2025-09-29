---
title: Nwaku FAQ
hide_table_of_contents: true
sidebar_label: Frequently Asked Questions
displayed_sidebar: runNode
---

import { AccordionItem } from '@site/src/components/mdx'

<AccordionItem title="How can I run a Waku node?">
	Check out the <a href="/guides/nwaku/run-docker-compose">Run Nwaku with Docker Compose</a> guide to learn the simplest and fastest way to run a node. You can also check the comprehensive <a href="/guides/nwaku/run-node">Run a Nwaku Node</a> guide to explore other options like <a href="/guides/nwaku/run-node#download-the-binary">downloading binaries</a> and <a href="/guides/nwaku/build-source">building from source</a>.
</AccordionItem>

<AccordionItem title="What are the system requirements for running a node?">
	We recommend running a nwaku node with at least 2GB of RAM, especially if WSS is enabled. If running just a Relay node, 0.5GB of RAM is sufficient.
</AccordionItem>

<AccordionItem title="How can I interact with my running nwaku node?">
	You can interact with a running nwaku node using the <a href="https://waku-org.github.io/waku-rest-api/">REST API interface</a> or the <a href="/guides/js-waku/">JavaScript Waku SDK</a>.
</AccordionItem>

<AccordionItem title="How can I view the logs of a nwaku node running in Docker?">
	To check your node logs in Docker, use the command: "docker-compose logs -f nwaku"
</AccordionItem>

<AccordionItem title="What configuration methods are available for nwaku nodes?">
	You can configure Nwaku nodes using command line options and flags, environment variables, and TOML configuration files. Check out the <a href="/guides/nwaku/config-methods">Node Configuration Methods</a> guide to understand their usage and priority.
</AccordionItem>

<AccordionItem title="How can I configure my nwaku node before running?">
	Check out the <a href="/guides/nwaku/config-options">Node Configuration Options</a> guide for available node configuration options, their default values and descriptions. For examples of common configuration use cases, visit the <a href="/guides/nwaku/configure-nwaku">Node Configuration Examples</a> guide.
</AccordionItem>

<AccordionItem title="What peer discovery mechanisms are available for nwaku nodes, and how can I configure them?">
	You can configure peer discovery for nwaku nodes through options like <a href="/learn/concepts/static-peers">Static Peers</a>, <a href="/learn/concepts/dns-discovery">DNS Discovery</a>, <a href="/learn/concepts/discv5">DiscV5</a>, and <a href="/learn/concepts/peer-exchange">Peer Exchange</a>. Check out the <a href="/guides/nwaku/configure-discovery">Configure Peer Discovery</a> guide for setting up your node.
</AccordionItem>

<AccordionItem title="How do I find my nwaku node's addresses for peer discovery?">
	The node listening and ENR addresses can be found through the node's logs and <a href="https://waku-org.github.io/waku-rest-api/#get-/debug/v1/info">REST API</a>. Check out the <a href="/guides/nwaku/run-node#find-the-node-addresses">Find the node addresses</a> section to understand how to locate your node addresses.
</AccordionItem>