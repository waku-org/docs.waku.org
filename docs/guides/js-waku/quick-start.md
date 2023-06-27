---
title: Quick Start
---

This guide provides quick steps to create a light node, send messages using the [Light Push protocol](/overview/concepts/protocols#light-push), and receive messages using the [Filter protocol](/overview/concepts/protocols#filter). Please refer to the [Installation guide](/guides/js-waku/#installation) for steps on adding `js-waku` to your project using a package manager or CDN.

## Create a Waku Node

To interact with the Waku Network, create a light node using the `createLightNode()` function:

```js
import { createLightNode } from "@waku/sdk";

// create a light node
const node = await createLightNode({ defaultBootstrap: true });
```

## Connect to Remote Peers

To ensure the node has connected to peers on the Waku Network, use the `waitForRemotePeer()` function:

```js
import { waitForRemotePeer } from "@waku/sdk";

// start the node
await node.start();

// wait for a successful peer connection
await waitForRemotePeer(node, ["filter", "lightpush"]);
```

:::info
To specify the [protocols](/overview/concepts/protocols) enabled by the remote peers, provide an array of `protocol identifiers` using the `protocols` option.
:::

## Choose a Content Topic

Before building your application, you must [choose a content topic](/overview/concepts/content-topics) for outgoing messages. Content topics are used for categorizing messages on the Waku Network.

```js
// choose a content topic
const contentTopic = "/quick-start/1/message/proto";
```

Next, create an `encoder` and `decoder` using the `createEncoder()` and `createDecoder()` functions to convert your messages to and from the [Waku Message](/overview/concepts/protocols#waku-message) format:

```js
import { createEncoder, createDecoder } from "@waku/sdk";

// create a message encoder
const encoder = createEncoder(contentTopic);

// create a message decoder
const decoder = createDecoder(contentTopic);
```

## Define a Message Structure

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

Next, construct the application message structure using [Protobuf's valid message fields](https://github.com/protobufjs/protobuf.js#usage):

```js
const ChatMessage = new protobuf.Type("ChatMessage")
	.add(new protobuf.Field("timestamp", 1, "uint64"))
    .add(new protobuf.Field("sender", 2, "string"))
    .add(new protobuf.Field("message", 3, "string"));
```

## Send Messages with Light Push

To send messages to the Waku Network, create a new message object and use the `lightPush.push()` function:

```js
// create a new message object
const protoMessage = ChatMessage.create({
    timestamp: Date.now(),
    sender: "Alice",
    message: "Hello, World!",
});

// serialize the message using Protobuf
const serializedMessage = ChatMessage.encode(protoMessage).finish();

// send the message using Light Push
await node.lightPush.push(encoder, {
    payload: serializedMessage,
});
```

## Receive Messages with Filter

To receive messages that have a specific content topic, use the `filter.subscribe()` function to actively listen for incoming messages:

```js
// subscribe to a content topic and display new messages
await node.filter.subscribe([decoder], (wakuMessage) => {
    const messageObj = ChatMessage.decode(wakuMessage.payload);
    console.log(messageObj);
});
```