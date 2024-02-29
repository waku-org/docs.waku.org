---
title: Nwaku FAQ
hide_table_of_contents: true
sidebar_label: Frequently Asked Questions
---

import { AccordionItem } from '@site/src/components/mdx'

<AccordionItem title="How can I run a Waku node?">
	Check out the <a href="/guides/nwaku/run-docker-compose">Run Nwaku with Docker Compose</a> guide to learn the simplest and fastest way to run a node. You can also check the comprehensive <a href="/guides/nwaku/run-node">Run a Nwaku Node</a> guide to explore other options like <a href="">downloading binaries</a> and <a href="">building from source</a>
</AccordionItem>

<AccordionItem title="What are the system requirements for running a node?">
	We recommend running a nwaku node with at least 2GB of RAM, especially if WSS is enabled. If running just a Relay node, 0.5GB of RAM is sufficient
</AccordionItem>

<AccordionItem title="How can I interact with my running nwaku node?">
	You can interact with a running nwaku node using the <a href="https://waku-org.github.io/waku-rest-api/">REST API interface</a> or the <a href="/guides/js-waku/">JavaScript Waku SDK</a>
</AccordionItem>

<AccordionItem title="How can I view the logs of a nwaku node running in Docker?">
	You can view your node logs in Docker by running the command: "docker-compose logs -f nwaku"
</AccordionItem>

<AccordionItem title="How can I configure my nwaku node before running?">
	Check out the <a href="/guides/nwaku/config-options">Node Configuration Options</a> guide for the list of available node configuration options, along with their default values and descriptions.
</AccordionItem>

<AccordionItem title="What configuration methods are available for nwaku nodes?">
	Nwaku nodes can be configured using the following methods: command line options and flags, environment variables, and TOML configuration files. Check out the <a href="/guides/nwaku/config-methods">Node Configuration Methods</a> guide to learn how to use them and which take precedence.
</AccordionItem>

<AccordionItem title="What peer discovery mechanisms are available for nwaku nodes, and how can I configure them?">
	You can configure peer discovery for nwaku nodes using static peers, DNS discovery, Discovery V5, and peer exchange. Check out the <a href="/guides/nwaku/configure-discovery">Configure Peer Discovery</a> guide to learn how to configure your node.
</AccordionItem>

<AccordionItem title="How do I find my nwaku node's addresses for peer discovery?">
	You can find the node listening address and discoverable ENR addresses from the node's logs and <a href="https://waku-org.github.io/waku-rest-api/#get-/debug/v1/info">Get node info endpoint of the REST API</a>. Check out the <a href="/guides/nwaku/run-node#find-the-node-addresses">Find the node addresses</a> section to learn how to find your node addresses.
</AccordionItem>