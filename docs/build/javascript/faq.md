---
title: JavaScript SDK FAQ
hide_table_of_contents: true
sidebar_label: Frequently Asked Questions
displayed_sidebar: build
---

import { AccordionItem } from '@site/src/components/mdx'

<AccordionItem title="How do I install the @waku/sdk package in my project?">
	You can add the JavaScript SDK to your project using NPM, Yarn, or a CDN. Check out the <a href="/build/javascript/#installation">installation guide</a> to get started.
</AccordionItem>

<AccordionItem title="Why should I use Protocol Buffers for my application's message structure when using Waku?">
	Protocol Buffers ensure consistent formatting, interoperability, and backward compatibility for your application's messages, with a smaller payload size than JSON. Check out the <a href="/build/javascript/#message-structure">installation guide</a> and <a href="https://protobuf.dev/overview/">Protobuf documentation</a> to learn more.
</AccordionItem>

<AccordionItem title="What are the steps to retrieve historical messages on Waku?">
	Check out the <a href="/build/javascript/store-retrieve-messages">Retrieve Messages Using Store Protocol</a> guide to learn how to retrieve and filter historical messages using the <a href="/learn/concepts/protocols#store">Store protocol</a>.
</AccordionItem>

<AccordionItem title="How can I prevent Store peers from storing my messages?">
	When <a href="/build/javascript/light-send-receive#choose-a-content-topic">creating your message encoder</a>, you can configure the <strong>ephemeral</strong> option to prevent Store peers from keeping your messages on the Waku Network.
</AccordionItem>

<AccordionItem title="How can I encrypt, decrypt, and sign messages in my Waku application?">
	You can encrypt and decrypt your messages using symmetric, ECIES, and noise encryption methods. Check out the <a href="/build/javascript/message-encryption">Encrypt, Decrypt, and Sign Your Messages</a> guide to get started.
</AccordionItem>

<AccordionItem title="How do I integrate Waku into a React application?">
	Waku has a specialized SDK designed for building React applications. Check out the <a href="/build/javascript/use-waku-react">Build React DApps Using @waku/react</a> guide for instructions on installation and usage.
</AccordionItem>

<AccordionItem title="How can I bootstrap and discover peers in the Waku Network for browser nodes?">
	The JavaScript SDK has a <a href="/build/javascript/configure-discovery#default-bootstrap-method">default bootstrap method</a> that can be configured with <a href="/learn/concepts/static-peers">Static Peers</a> and <a href="/learn/concepts/dns-discovery">DNS Discovery</a>. Check out the <a href="/build/javascript/configure-discovery">Bootstrap Nodes and Discover Peers</a> guide for setting up peer discovery for your node.
</AccordionItem>

<AccordionItem title="How can I integrate Waku into a NodeJS application?">
	Though the JavaScript SDK isn't directly usable in NodeJS due to <a href="/build/javascript/run-waku-nodejs">certain limitations</a>, we recommend running <a href="/run-node/run-docker-compose">nwaku in a Docker container</a> and consuming its <a href="https://waku-org.github.io/waku-rest-api/">REST API</a> in a NodeJS application.
</AccordionItem>

<AccordionItem title="How can I debug my Waku DApp and check WebSocket connections?">
	Check out the <a href="/build/javascript/debug-waku-dapp">Debug Your Waku DApp and WebSocket</a> guide to discover how to use debug logs to troubleshoot your Waku DApp and resolve connection issues with nwaku WebSockets.
</AccordionItem>

<AccordionItem title="How can I manage unexpected disconnections of my Filter subscription from Waku?">
	We recommend regularly pinging peers to check for an active connection and reinitiating the subscription when it disconnects. Check out the <a href="/build/javascript/manage-filter">Manage Your Filter Subscriptions</a> guide for a detailed explanation and step-by-step instructions.
</AccordionItem>

<AccordionItem title="How can I send images and videos on the Waku Network?">
	While it's possible to transmit media such as images as bytes on Waku, we recommend uploading your media to a CDN or a file system like <a href="https://ipfs.tech/">IPFS</a> and then sharing the corresponding URL via Waku.
</AccordionItem>

<AccordionItem title="How can I connect to my own node?">
	To manually set your own node as a starting point use <a href="/build/javascript/configure-discovery#configure-static-peers">Configure static peers</a>.
</AccordionItem>
