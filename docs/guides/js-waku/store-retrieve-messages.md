---
title: Retrieve Messages Using Store
---

This guide provides detailed steps to create a light node and retrieve historical messages using the [Store protocol](/overview/concepts/protocols#store).

## Create a Light Node

Use the `createLightNode()` function to create a light node and interact with the Waku Network:

```js
import { createLightNode } from "@waku/sdk";

// Create and start a light node
const node = await createLightNode({ defaultBootstrap: true });
await node.start();
```

## Connect to Store Peers

Use the `waitForRemotePeer()` function to wait for the node to connect with store peers:

```js
import { waitForRemotePeer, Protocols } from "@waku/sdk";

// Wait for a successful peer connection
await waitForRemotePeer(node, [Protocols.Store]);
```

## Choose a Content Topic

[Choose a content topic](/overview/concepts/content-topics) for filtering the messages to retrieve and create a `decoder` for [message decryption](https://rfc.vac.dev/spec/26/):

```js
import { createDecoder } from "@waku/sdk";

// Choose a content topic
const contentTopic = "/store-guide/1/message/proto";

// Create a message decoder
const decoder = createDecoder(contentTopic);
```

## Retrieve Messages

### queryOrderedCallback

### queryGenerator

## Filter Messages

### pageDirection

### pageSize

### timeFilter

:::tip Congratulations!
You have successfully retrieved historical messages on a light node using the `Store` protocol.
:::