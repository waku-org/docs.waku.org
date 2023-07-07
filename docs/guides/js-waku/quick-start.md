---
title: Quick Start
---

This guide provides quick steps to set up a Waku node and send messages using the [Relay protocol](/overview/concepts/protocols#relay). Please refer to the [installation guide](/guides/js-waku/#installation) for steps on adding `js-waku` to your project using a package manager or CDN.

## Create a Waku Node

Use the `createRelayNode()` function to create a relay node and interact with the Waku Network:

```js
import { createRelayNode } from "@waku/sdk";

// Create and start a relay node
const waku = await createRelayNode({ defaultBootstrap: true });
await node.start(); // Use the stop() function to stop a running node
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

The `protocols` option allows you to specify the [protocols](https://js.waku.org/enums/_waku_sdk.Protocols.html) that the remote peers should have enabled:

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
You have successfully added decentralized communication features to your application using `js-waku`. For a more comprehensive tutorial, refer to the [Send and Receive Messages Using Relay](/guides/js-waku/relay-send-receive) guide.
:::