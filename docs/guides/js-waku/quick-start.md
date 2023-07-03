---
title: Quick Start
---

This guide provides quick steps to create a light node, send messages using the [Light Push protocol](/overview/concepts/protocols#light-push), and receive messages using the [Filter protocol](/overview/concepts/protocols#filter). Please refer to the [Installation guide](/guides/js-waku/#installation) for steps on adding `js-waku` to your project using a package manager or CDN.

## Create a Waku Node

To interact with the Waku Network, create a light node using the `createLightNode()` function:

```js
import { createLightNode } from "@waku/sdk";

// Create a light node
const node = await createLightNode({ defaultBootstrap: true });
```

:::info
Setting the `defaultBootstrap` option to `true` allows your node to connect to a set of pre-defined nodes.
:::

## Connect to Remote Peers

To ensure the node has connected to peers on the Waku Network, use the `waitForRemotePeer()` function:

```js
import { waitForRemotePeer } from "@waku/sdk";

// Start the node
await node.start();

// Wait for a successful peer connection
await waitForRemotePeer(node);
```

The `protocols` option allows you to specify the [protocols](/overview/concepts/protocols) that the remote peers should have enabled:

```js
// Wait for peer connections with specific protocols
await waitForRemotePeer(node, ["filter", "lightpush"]);
```

## Choose a Content Topic

Before building your application, you must [choose a content topic](/overview/concepts/content-topics) for outgoing messages. Content topics are used for categorizing messages on the Waku Network.

```js
// Choose a content topic
const contentTopic = "/quick-start/1/message/proto";
```

Next, create an `encoder` and `decoder` to encrypt and decrypt your messages using any [encryption protocol](https://rfc.vac.dev/spec/26/) supported by Waku. To create an `encoder` and `decoder` without encryption, use:

```js
import { createEncoder, createDecoder } from "@waku/sdk";

// Create a message encoder
const encoder = createEncoder(contentTopic);

// Create a message decoder
const decoder = createDecoder(contentTopic);
```

## Define a Message Structure

You need to define a message We recommend using [Protocol Buffers](https://protobuf.dev/) (`Protobuf`) to encode your messages because it is lightweight and efficient. To get started, install the `protobufjs` package using your preferred package manager:

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
import "https://cdn.jsdelivr.net/npm/protobufjs@latest/dist/protobuf.min.js";
```

Next, create the application message structure using [Protobuf's valid message fields](https://github.com/protobufjs/protobuf.js#usage):

```js
import protobuf from "protobufjs";

// Create the message structure using Protobuf
const ChatMessage = new protobuf.Type("ChatMessage")
	.add(new protobuf.Field("timestamp", 1, "uint64"))
    .add(new protobuf.Field("sender", 2, "string"))
    .add(new protobuf.Field("message", 3, "string"));
```

## Send Messages with Light Push

To send messages to the Waku Network using the `Light Push` protocol, create a new message object and use the `lightPush.push()` function:

```js
// Create a new message object
const protoMessage = ChatMessage.create({
    timestamp: Date.now(),
    sender: "Alice",
    message: "Hello, World!",
});

// Serialize the message using Protobuf
const serializedMessage = ChatMessage.encode(protoMessage).finish();

// Send the message using Light Push
await node.lightPush.push(encoder, {
    payload: serializedMessage,
});
```

## Receive Messages with Filter

To receive messages that have a specific content topic, use the `filter.subscribe()` function to actively listen for incoming messages:

```js
// Subscribe to a content topic and display new messages
await node.filter.subscribe([decoder], (wakuMessage) => {
    const messageObj = ChatMessage.decode(wakuMessage.payload);
    // Render the Protobuf-formatted messageObj as desired in your application
    console.log(messageObj);
});
```

:::tip Congratulations!
You have successfully added decentralized communication features to your application using `js-waku`.
:::