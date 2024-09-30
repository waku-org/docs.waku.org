---
title: Send and Receive Messages Using Light Push and Filter
hide_table_of_contents: true
---

This guide provides detailed steps to start using the `@waku/sdk` package by setting up a [Light Node](/learn/glossary#light-node) to send messages using the [Light Push protocol](/learn/concepts/protocols#light-push), and receive messages using the [Filter protocol](/learn/concepts/protocols#filter). Have a look at the [installation guide](/guides/js-waku/#installation) for steps on adding `@waku/sdk` to your project.

## Create a light node

Use the `createLightNode()` function to create a [Light Node](/learn/glossary#light-node) and interact with the Waku Network:

```js
import { createLightNode } from "@waku/sdk";

// Create and start a Light Node
const node = await createLightNode({ defaultBootstrap: true });
await node.start();

// Use the stop() function to stop a running node
// await node.stop();
```

:::info
When the `defaultBootstrap` parameter is set to `true`, your node will be bootstrapped using the [default bootstrap method](/guides/js-waku/configure-discovery#default-bootstrap-method). Have a look at the [Bootstrap Nodes and Discover Peers](/guides/js-waku/configure-discovery) guide to learn more methods to bootstrap nodes.
:::

A node needs to know how to route messages. By default, it will use The Waku Network configuration (`{ clusterId: 1, shards: [0,1,2,3,4,5,6,7] }`). If your project uses a different network configuration, you can configure this using the `networkConfig` parameter:

```js
// Create node with static sharding
const node = await createLightNode({
  defaultBootstrap: true,
  networkConfig: {
    clusterId: 1,
    shards: [0, 1, 2, 3],
  },
});

// Create node with auto sharding
const node = await createLightNode({
  defaultBootstrap: true,
  networkConfig: {
    clusterId: 1,
    contentTopics: ["/my-app/1/notifications/proto"],
  },
});
```

## Connect to remote peers

Use the `waitForRemotePeer()` function to wait for the node to connect with peers on the Waku Network:

```js
import { waitForRemotePeer } from "@waku/sdk";

// Wait for a successful peer connection
await waitForRemotePeer(node);
```

The `protocols` parameter allows you to specify the [protocols](/learn/concepts/protocols) that the remote peers should have enabled:

```js
import { waitForRemotePeer, Protocols } from "@waku/sdk";

// Wait for peer connections with specific protocols
await waitForRemotePeer(node, [Protocols.LightPush, Protocols.Filter]);
```

## Choose a content topic

Choose a [content topic](/learn/concepts/content-topics) for your application and create a message `encoder` and `decoder`:

```js
import { createEncoder, createDecoder } from "@waku/sdk";

// Choose a content topic
const contentTopic = "/light-guide/1/message/proto";

// Create a message encoder and decoder
const encoder = createEncoder({ contentTopic });
const decoder = createDecoder(contentTopic);
```

The `ephemeral` parameter allows you to specify whether messages should **NOT** be stored by [Store peers](/guides/js-waku/store-retrieve-messages):

```js
const encoder = createEncoder({
  contentTopic: contentTopic, // message content topic
  ephemeral: true, // allows messages NOT be stored on the network
});
```

The `pubsubTopicShardInfo` parameter allows you to configure a different network configuration for your `encoder` and `decoder`:

```js
// Create the network config
const networkConfig = { clusterId: 3, shards: [1, 2] };

// Create encoder and decoder with custom network config
const encoder = createEncoder({
  contentTopic: contentTopic,
  pubsubTopicShardInfo: networkConfig,
});
const decoder = createDecoder(contentTopic, networkConfig);
```

:::info
In this example, users send and receive messages on a shared content topic. However, real applications may have users broadcasting messages while others listen or only have 1:1 exchanges. Waku supports all these use cases.
:::

## Create a message structure

Create your application's message structure using [Protobuf's valid message](https://github.com/protobufjs/protobuf.js#usage) fields:

```js
import protobuf from "protobufjs";

// Create a message structure using Protobuf
const DataPacket = new protobuf.Type("DataPacket")
  .add(new protobuf.Field("timestamp", 1, "uint64"))
  .add(new protobuf.Field("sender", 2, "string"))
  .add(new protobuf.Field("message", 3, "string"));
```

:::info
Have a look at the [Protobuf installation](/guides/js-waku/#message-structure) guide for adding the `protobufjs` package to your project.
:::

## Send messages using light push

To send messages over the Waku Network using the `Light Push` protocol, create a new message object and use the `lightPush.send()` function:

```js
// Create a new message object
const protoMessage = DataPacket.create({
  timestamp: Date.now(),
  sender: "Alice",
  message: "Hello, World!",
});

// Serialise the message using Protobuf
const serialisedMessage = DataPacket.encode(protoMessage).finish();

// Send the message using Light Push
await node.lightPush.send(encoder, {
  payload: serialisedMessage,
});
```

## Receive messages using filter

To receive messages using the `Filter` protocol, create a callback function for message processing, then use the `filter.subscribe()` function to subscribe to a `content topic`:

```js
// Create the callback function
const callback = (wakuMessage) => {
  // Check if there is a payload on the message
  if (!wakuMessage.payload) return;
  // Render the messageObj as desired in your application
  const messageObj = DataPacket.decode(wakuMessage.payload);
  console.log(messageObj);
};

// Create a Filter subscription
const { error, subscription } = await node.filter.createSubscription({ contentTopics: [contentTopic] });

if (error) {
    // handle errors if happens
    throw Error(error);
}

// Subscribe to content topics and process new messages
await subscription.subscribe([decoder], callback);
```

The `pubsubTopicShardInfo` parameter allows you to configure a different network configuration for your `Filter` subscription:

```js
// Create the network config
const networkConfig = { clusterId: 3, shards: [1, 2] };

// Create Filter subscription with custom network config
const subscription = await node.filter.createSubscription(networkConfig);
```

You can use the `subscription.unsubscribe()` function to stop receiving messages from a content topic:

```js
await subscription.unsubscribe([contentTopic]);
```

:::tip Congratulations!
You have successfully sent and received messages over the Waku Network using the `Light Push` and `Filter` protocols. Have a look at the [light-js](https://github.com/waku-org/js-waku-examples/tree/master/examples/light-js) and [light-chat](https://github.com/waku-org/js-waku-examples/tree/master/examples/light-chat) examples for working demos.
:::