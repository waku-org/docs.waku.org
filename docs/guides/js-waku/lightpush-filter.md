---
title: Send and Receive Messages Using Light Push and Filter
---

This guide provides quick steps to create a light node, send messages using the [Light Push protocol](/overview/concepts/protocols#light-push), and receive messages using the [Filter protocol](/overview/concepts/protocols#filter).

## Create a Waku Node

To interact with the Waku Network, create a light node using the `createLightNode()` function:

```js
import { createLightNode } from "@waku/sdk";

// Create a light node
const node = await createLightNode({ defaultBootstrap: true });

// Start the node
await node.start();
```

## Connect to Remote Peers

Use the `waitForRemotePeer()` function to wait for the node to connect with peers that enabled the `Light Push` and `Filter` protocols:

```js
import { waitForRemotePeer } from "@waku/sdk";

// Wait for a successful peer connection
await waitForRemotePeer(node, ["lightpush", "filter"]);
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

You need to define a message structure for the following reasons:

1. **Consistency:** Ensures uniform message format for easy parsing and processing.
2. **Interoperability:** Facilitates effective communication between different parts of your application.
3. **Compatibility:** Allows smooth communication between older and newer app versions.

We recommend using [Protocol Buffers](https://protobuf.dev/) (`Protobuf`) to encode your messages because it is lightweight and efficient. To get started, install the `protobufjs` package using your preferred package manager:

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

Next, create the message structure using [Protobuf's valid message](https://github.com/protobufjs/protobuf.js#usage) fields:

```js
import protobuf from "protobufjs";

// Create a message structure using Protobuf
const ChatMessage = new protobuf.Type("ChatMessage")
	.add(new protobuf.Field("timestamp", 1, "uint64"))
    .add(new protobuf.Field("sender", 2, "string"))
    .add(new protobuf.Field("message", 3, "string"));
```

## Send Messages Using Light Push

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

## Receive Messages Using Filter

To receive messages that have a specific content topic, use the `filter.subscribe()` function to actively listen for incoming messages:

```js
// Subscribe to a content topic and display new messages
await node.filter.subscribe([decoder], (wakuMessage) => {
    const messageObj = ChatMessage.decode(wakuMessage.payload);
    // Render the Protobuf-formatted messageObj as desired in your application
    console.log(messageObj);
});
```

## Conclusion

You have learned to send and receive messages over Waku using the `Light Push` and `Filter` protocols. Here is the final code:

```js
import {
	createLightNode,
	waitForRemotePeer,
	createEncoder,
	createDecoder
} from "@waku/sdk";
import protobuf from "protobufjs";

// Create a light node
const node = await createLightNode({ defaultBootstrap: true });

// Start the node
await node.start();

// Wait for a successful peer connection
await waitForRemotePeer(node, ["lightpush", "filter"]);

// Choose a content topic
const contentTopic = "/quick-start/1/message/proto";

// Create a message encoder
const encoder = createEncoder(contentTopic);

// Create a message decoder
const decoder = createDecoder(contentTopic);

// Create a message structure using Protobuf
const ChatMessage = new protobuf.Type("ChatMessage")
    .add(new protobuf.Field("timestamp", 1, "uint64"))
    .add(new protobuf.Field("sender", 2, "string"))
    .add(new protobuf.Field("message", 3, "string"));

// Subscribe to a content topic and display new messages
await node.filter.subscribe([decoder], (wakuMessage) => {
    const messageObj = ChatMessage.decode(wakuMessage.payload);
    // Render the Protobuf-formatted messageObj as desired in your application
    console.log(messageObj);
});

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