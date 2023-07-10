---
title: Send and Receive Messages Using Relay
---

This guide provides detailed steps to set up a Waku node for sending and receiving messages using the [Relay protocol](/overview/concepts/protocols#relay).

## Create a Waku Node

Set up a Waku node by creating a relay node, connecting to network peers, choosing a [content topic](/overview/concepts/content-topics), and creating an `encoder` and `decoder` for [message encryption](https://rfc.vac.dev/spec/26/):

```js
import {
	createRelayNode,
	waitForRemotePeer,
	createEncoder,
	createDecoder
} from "@waku/sdk";

// Create and start a relay node
const node = await createRelayNode({
	defaultBootstrap: true, // bootstraps using pre-defined nodes
	emitSelf: true, // emits sent message events to itself
});
await node.start();

// Wait for a successful peer connection
await waitForRemotePeer(node);

// Choose a content topic
const contentTopic = "/relay-guide/1/message/proto";

// Create a message encoder and decoder
const encoder = createEncoder(contentTopic);
const decoder = createDecoder(contentTopic);
```

:::info
The `emitSelf` option emits sent message events to itself and invokes the node's subscribers.
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
Please refer to the [Protobuf installation](/guides/js-waku/quick-start#create-a-message-structure) guide for steps on adding the `protobufjs` package to your project.
:::

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

## Receive Messages Using Relay

Use the `relay.subscribe()` function to listen for incoming messages on a specific content topic:

```js
// Subscribe to content topics and display new messages
await node.relay.subscribe([decoder], (wakuMessage) => {
	// Check if there is a payload on the message
	if (!wakuMessage.payload) return;
	// Render the messageObj as desired in your application
	const messageObj = ChatMessage.decode(wakuMessage.payload);
	console.log(messageObj);
});
```

:::tip Congratulations!
You have successfully sent and received messages over the Waku Network using the `Relay` protocol.
:::