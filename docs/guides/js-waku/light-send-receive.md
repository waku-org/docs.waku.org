---
title: Send and Receive Messages Using Light Push and Filter
---

This guide provides detailed steps to start using the `@waku/sdk` package by setting up a Light Node to send messages using the [Light Push protocol](/overview/concepts/protocols#light-push), and receive messages using the [Filter protocol](/overview/concepts/protocols#filter). Have a look at the [installation guide](/guides/js-waku/#installation) for steps on adding `@waku/sdk` to your project.

## Create a Light Node

Use the `createLightNode()` function to create a [Light Node](/overview/reference/glossary#light-node) and interact with the Waku Network:

```js
import { createLightNode } from "@waku/sdk";

// Create and start a Light Node
const node = await createLightNode({ defaultBootstrap: true });
await node.start();

// Use the stop() function to stop a running node
// await node.stop();
```

:::info
When the `defaultBootstrap` option is set to `true`, your node will be bootstrapped using the [default bootstrap method](/guides/js-waku/configure-discovery#default-bootstrap-method). Have a look at the [Bootstrap Nodes and Discover Peers](/guides/js-waku/configure-discovery) guide to learn more methods to bootstrap nodes.
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
	Protocols.LightPush,
	Protocols.Filter,
]);
```

## Choose a Content Topic

[Choose a content topic](/overview/concepts/content-topics) for your application and create a message `encoder` and `decoder`:

```js
import { createEncoder, createDecoder } from "@waku/sdk";

// Choose a content topic
const contentTopic = "/light-guide/1/message/proto";

// Create a message encoder and decoder
const encoder = createEncoder({ contentTopic });
const decoder = createDecoder(contentTopic);
```

The `ephemeral` option allows you to specify whether messages should not be stored by [Store peers](/guides/js-waku/store-retrieve-messages):

```js
const encoder = createEncoder({
	contentTopic: contentTopic, // message content topic
	ephemeral: true, // allows messages not be stored on the network
});
```

:::info
In this example, users send and receive messages on a shared content topic. However, real applications may have users broadcasting messages while others listen or only have 1:1 exchanges. Waku supports all these use cases.
:::

## Create a Message Structure

Create your application's message structure using [Protobuf's valid message](https://github.com/protobufjs/protobuf.js#usage) fields:

```js
import protobuf from "protobufjs";

// Create a message structure using Protobuf
const ChatMessage = new protobuf.Type("ChatMessage")
    .add(new protobuf.Field("timestamp", 1, "uint64"))
    .add(new protobuf.Field("sender", 2, "string"))
    .add(new protobuf.Field("message", 3, "string"));
```

:::info
Have a look at the [Protobuf installation](/guides/js-waku/#message-structure) guide for adding the `protobufjs` package to your project.
:::

## Send Messages Using Light Push

To send messages over the Waku Network using the `Light Push` protocol, create a new message object and use the `lightPush.send()` function:

```js
// Create a new message object
const protoMessage = ChatMessage.create({
    timestamp: Date.now(),
    sender: "Alice",
    message: "Hello, World!",
});

// Serialise the message using Protobuf
const serialisedMessage = ChatMessage.encode(protoMessage).finish();

// Send the message using Light Push
await node.lightPush.send(encoder, {
    payload: serialisedMessage,
});
```

## Receive Messages Using Filter

To receive messages using the `Filter` protocol, create a callback function for message processing, then use the `filter.subscribe()` function to subscribe to a `content topic`:

```js
// Create the callback function
const callback = (wakuMessage) => {
    // Check if there is a payload on the message
    if (!wakuMessage.payload) return;
    // Render the messageObj as desired in your application
    const messageObj = ChatMessage.decode(wakuMessage.payload);
    console.log(messageObj);
};

// Create a filter subscription
const subscription = await node.filter.createSubscription();

// Subscribe to content topics and process new messages
await subscription.subscribe([decoder], callback);
```

You can use the `subscription.unsubscribe()` function to stop receiving messages from a content topic:

```js
await subscription.unsubscribe([contentTopic]);
```

:::tip Congratulations!
You have successfully sent and received messages over the Waku Network using the `Light Push` and `Filter` protocols. Have a look at the [light-js](https://github.com/waku-org/js-waku-examples/tree/master/examples/light-js) and [light-chat](https://github.com/waku-org/js-waku-examples/tree/master/examples/light-chat) examples for working demos.
:::