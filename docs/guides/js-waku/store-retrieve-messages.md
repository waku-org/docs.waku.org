---
title: Retrieve Messages Using Store
---

This guide provides detailed steps to create a light node for retrieving and filtering historical messages using the [Store protocol](/overview/concepts/protocols#store).

## Create a Light Node

Use the `createLightNode()` function to create a light node and interact with the Waku Network:

```js
import { createLightNode } from "@waku/sdk";

// Create and start a light node
const node = await createLightNode({ defaultBootstrap: true });
await node.start();
```

## Connect to Store Peers

Use the `waitForRemotePeer()` function to wait for the node to connect with store peers:

```js
import { waitForRemotePeer, Protocols } from "@waku/sdk";

// Wait for a successful peer connection
await waitForRemotePeer(node, [Protocols.Store]);
```

## Choose a Content Topic

[Choose a content topic](/overview/concepts/content-topics) for filtering the messages to retrieve and create a `decoder` for [message decryption](https://rfc.vac.dev/spec/26/):

```js
import { createDecoder } from "@waku/sdk";

// Choose a content topic
const contentTopic = "/store-guide/1/message/proto";

// Create a message decoder
const decoder = createDecoder(contentTopic);
```

## Retrieve Messages

`js-waku` provides the `queryOrderedCallback()` and `queryGenerator()` functions to query `Store` nodes and retrieve historical or missed messages.

### `queryOrderedCallback`

The `store.queryOrderedCallback()` function provides a straightforward method for querying `Store` nodes and processing messages in chronological order through a callback function. It accepts these parameters:

- `decoders`: List of `decoders` that specify the `content topic` to query for and their [message decryption](https://rfc.vac.dev/spec/26/) methods.
- `callback`: The callback function for processing the retrieved messages.
- `options` (optional): [Query options](/guides/js-waku/store-retrieve-messages#store-query-options) to filter the retrieved messages.

```js
// Create the callback function
const callback = (wakuMessage) => {
	// Render the payload/message in your application
    console.log(wakuMessage.payload);
};

// Set the query options
const queryOptions = {
	pageSize: 5,
};

// Query the Store node
await node.store.queryOrderedCallback(
	[decoder],
	callback,
	queryOptions,
);
```

### `queryGenerator`

The `store.queryGenerator()` function provides more control and flexibility over processing messages retrieved from `Store` nodes through [Async Generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator). It accepts these parameters:

- `decoders`: List of `decoders` that specify the `content topic` to query for and their [message decryption](https://rfc.vac.dev/spec/26/) methods.
- `options` (optional): [Query options](/guides/js-waku/store-retrieve-messages#store-query-options) to filter the retrieved messages.

```js
// Set the query options
const queryOptions = {
	pageSize: 5,
};

// Create the store query
const query = node.store.queryGenerator(
	[decoder],
	queryOptions,
);

// Process the messages
for await (const wakuMessage of query) {
	// Render the payload/message in your application
    console.log(wakuMessage.payload);
}
```

## Store Query Options

### `pageDirection`

### `pageSize`

### `timeFilter`

### `peerId`

:::tip Congratulations!
You have successfully retrieved and filtered historical messages on a light node using the `Store` protocol.
:::