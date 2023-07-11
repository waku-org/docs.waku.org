---
title: Send and Receive Messages Using Light Push and Filter
---

This guide provides detailed steps to create a light node, send messages using the [Light Push protocol](/overview/concepts/protocols#light-push), and receive messages using the [Filter protocol](/overview/concepts/protocols#filter).

## Create a Waku Node

Set up a Waku node by creating a light node, connecting to network peers with `Light Push` and `Filter` enabled, choosing a [content topic](/overview/concepts/content-topics), and creating an `encoder` and `decoder` for [message encryption](https://rfc.vac.dev/spec/26/):

```js
import {
    createLightNode,
    waitForRemotePeer,
    Protocols,
    createEncoder,
    createDecoder
} from "@waku/sdk";

// Create and start a light node
const node = await createLightNode({ defaultBootstrap: true });
await node.start();

// Wait for a successful peer connection
await waitForRemotePeer(node, [
	Protocols.LightPush,
	Protocols.Filter,
]);

// Choose a content topic
const contentTopic = "/light-guide/1/message/proto";

// Create a message encoder and decoder
const encoder = createEncoder({ contentTopic });
const decoder = createDecoder(contentTopic);
```

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
Please refer to the [Protobuf installation](/guides/js-waku/quick-start#create-a-message-structure) guide for steps on adding the `protobufjs` package to your project.
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

// Serialize the message using Protobuf
const serializedMessage = ChatMessage.encode(protoMessage).finish();

// Send the message using Light Push
await node.lightPush.send(encoder, {
    payload: serializedMessage,
});
```

## Receive Messages Using Filter

Use the `filter.subscribe()` function to listen for incoming messages on a specific content topic:

```js
// Subscribe to content topics and display new messages
const unsubscribe = await node.filter.subscribe([decoder], (wakuMessage) => {
	// Check if there is a payload on the message
	if (!wakuMessage.payload) return;
	// Render the messageObj as desired in your application
    const messageObj = ChatMessage.decode(wakuMessage.payload);
    console.log(messageObj);
});

// Use the unsubscribe() function to stop receiving messages
// await unsubscribe();
```

:::tip Congratulations!
You have successfully sent and received messages over the Waku Network using the `Light Push` and `Filter` protocols.
:::