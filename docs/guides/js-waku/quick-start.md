---
title: Quick Start
---

This guide provides quick steps to configure a Waku node and send messages using the [Relay protocol](/overview/concepts/protocols#relay). Please refer to the [Installation guide](/guides/js-waku/#installation) for steps on adding `js-waku` to your project using a package manager or CDN.

## Create a Waku Node

Use the `createRelayNode()` function to create a relay node and interact with the Waku Network:

```js
import { createRelayNode } from "@waku/sdk";

// Create and start a relay node
const waku = await createRelayNode({ defaultBootstrap: true });
await node.start(); // use the stop() function to stop a running node
```

:::info
The `defaultBootstrap` option bootstraps your node using pre-defined/hardcoded Waku nodes.
:::

## Connect to Remote Peers

Use the `waitForRemotePeer()` function to wait for the node to connect with peers on the Waku Network:

```js
import { waitForRemotePeer } from "@waku/sdk";

// Wait for a successful peer connection
await waitForRemotePeer(node);
```

The `protocols` option allows you to specify the [protocols](/overview/concepts/protocols) that the remote peers should have enabled:

```js
// Wait for peer connections with specific protocols
await waitForRemotePeer(node, ["relay", "store", "filter", "lightpush"]);
```

## Choose a Content Topic

[Choose a content topic](/overview/concepts/content-topics) for your application and create an `encoder` for [message encryption](https://rfc.vac.dev/spec/26/):

```js
import { createEncoder } from "@waku/sdk";

// Choose a content topic
const contentTopic = "/quick-start/1/message/utf8";

// Create a message encoder
const encoder = createEncoder(contentTopic);
```

## Send Messages Using Relay

Use the `relay.send()` function to send messages over the Waku Network using the `Relay` protocol:

```js
import { utf8ToBytes } from "@waku/sdk";

// Create a new message payload
const payload = utf8ToBytes("Hello, World!");

// Send the message using Relay
await node.relay.send(encoder, { payload });
```

:::tip Congratulations!
You have successfully added decentralized communication features to your application using `js-waku`.
:::