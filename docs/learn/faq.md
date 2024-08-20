---
title: Waku FAQ
hide_table_of_contents: true
sidebar_label: Frequently Asked Questions
---

import { AccordionItem } from '@site/src/components/mdx'

<AccordionItem title="How can I start building my application using Waku?">
	Check out the <a href="/">Getting Started</a> guide to explore our numerous SDKs and learn how to run a Waku node.
</AccordionItem>

<AccordionItem title="Does messaging on Waku require a gas fee?">
  No, sending and receiving messages on Waku involves no gas fee.
</AccordionItem>

<AccordionItem title="What encryption does Waku use?">
  Waku uses libp2p noise encryption for node-to-node connections. However, no default encryption method is applied to the data sent over the network. This design choice enhances Waku's encryption flexibility, encouraging developers to use custom protocols or Waku message payload encryption methods freely.
</AccordionItem>

<AccordionItem title="Where does Waku store the messages?">
  Waku's <a href="/learn/concepts/protocols#store">Store protocol</a> is designed to temporarily store messages within the network. However, Waku does not guarantee the message's availability and recommends using <a href="https://codex.storage/">Codex</a> for long-term storage.
</AccordionItem>

<AccordionItem title="Can Waku only be used for wallet-to-wallet messaging?">
  No, Waku is flexible and imposes no specific rules on identifiers.
</AccordionItem>

<AccordionItem title="How does Waku differ from IPFS?">
  Waku focuses on short, ephemeral, real-time messages, while IPFS focuses on large, long-term data storage. Although there's an overlap between the two technologies, Waku does not currently support large data for privacy reasons.
</AccordionItem>

<AccordionItem title="What are Rate Limiting Nullifiers (RLN)?">
  <a href="/learn/concepts/protocols#rln-relay">Rate Limiting Nullifier</a> is a zero-knowledge (ZK) protocol enabling spam protection in a decentralized network while preserving privacy. Each message must be accompanied by a ZK proof, which <a href="/learn/concepts/protocols#relay">Relay</a> nodes verify to ensure the publishers do not send more messages than they are allowed. The ZK proof does not leak any private information about message publishers - it only proves they are members of a set of users allowed to publish a certain number of messages per given time frame.
</AccordionItem>

<AccordionItem title="How to start a Waku node?">
  Follow the README instructions at <a href="https://docs.waku.org/guides/nwaku/run-node">nwaku-compose</a>.
</AccordionItem>


