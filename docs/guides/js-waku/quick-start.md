---
title: Quick Start
---

This guide provides quick steps to start using the `js-waku` SDK by setting up a Waku node and sending messages using the [Relay protocol](/overview/concepts/protocols#relay). Please refer to the [installation guide](/guides/js-waku/#installation) for steps on adding `js-waku` to your project.

## Create a Relay Node

Use the `createRelayNode()` function to create a relay node and interact with the Waku Network:

```js
import { createRelayNode } from "@waku/sdk";

// Create and start a relay node
const node = await createRelayNode({ defaultBootstrap: true });
await node.start();

// Use the stop() function to stop a running node
// await node.stop();
```

:::info
When the `defaultBootstrap` flag is set to `true`, your node will be bootstrapped using [pre-defined Waku nodes](/overview/concepts/static-peers). The node does not connect to any remote peer or bootstrap node if omitted.
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
import { waitForRemotePeer, Protocols } from "@waku/sdk";

// Wait for peer connections with specific protocols
await waitForRemotePeer(node, [
	Protocols.Relay,
	Protocols.Store,
	Protocols.LightPush,
	Protocols.Filter,
]);
```

## Choose a Content Topic

[Choose a content topic](/overview/concepts/content-topics) for your application and create an `encoder` for [message encryption](https://rfc.vac.dev/spec/26/):

```js
import { createEncoder } from "@waku/sdk";

// Choose a content topic
const contentTopic = "/quick-start/1/message/proto";

// Create a message encoder without encryption
const encoder = createEncoder({
	contentTopic: contentTopic, // message content topic
	ephemeral: false, // allows messages to be stored
});
```

:::info
When the `ephemeral` flag is set to `true`, your messages will not be stored by `Store` nodes.
:::

## Create a Message Structure

Create a message structure for your application using [Protocol Buffers](https://protobuf.dev/) (`proto`) for the following reasons:

1. **Consistency:** Ensures uniform message format for easy parsing and processing.
2. **Interoperability:** Facilitates effective communication between different parts of your application.
3. **Compatibility:** Allows smooth communication between older and newer app versions.

To get started, install the `protobufjs` package using your preferred package manager:

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs>
<TabItem value="npm" label="npm">

```shell
npm install protobufjs
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn add protobufjs
```

</TabItem>
</Tabs>

You can also use the `protobufjs` package via a CDN without installing it on your system:

```js
// Import the CDN
import "https://cdn.jsdelivr.net/npm/protobufjs@latest/dist/protobuf.min.js";
```

```html
<!-- Or include the protobufjs script -->
<script src="https://cdn.jsdelivr.net/npm/protobufjs@latest/dist/protobuf.min.js"></script>
```

Next, create the message structure using [Protobuf's valid message](https://github.com/protobufjs/protobuf.js#usage) fields:

```js
import protobuf from "protobufjs";

// Create a message structure using Protobuf
const ChatMessage = new protobuf.Type("ChatMessage")
	.add(new protobuf.Field("timestamp", 1, "uint64"))
	.add(new protobuf.Field("sender", 2, "string"))
	.add(new protobuf.Field("message", 3, "string"));
```

## Send Messages Using Relay

To send messages using the `Relay` protocol, create a new message object and use the `relay.send()` function:

```js
// Create a new message object
const protoMessage = ChatMessage.create({
    timestamp: Date.now(),
    sender: "Alice",
    message: "Hello, World!",
});

// Serialize the message using Protobuf
const serializedMessage = ChatMessage.encode(protoMessage).finish();

// Send the message using Relay
await node.relay.send(encoder, {
    payload: serializedMessage,
});
```

:::tip Congratulations!
You have successfully added decentralized communication features to your project using `js-waku`. You can wrap these functions in JavaScript, React, or any other framework to run your application smoothly.
:::