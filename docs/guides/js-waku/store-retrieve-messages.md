---
title: Retrieve Messages Using Store
---

This guide provides detailed steps to create a Light Node for retrieving and filtering historical messages using the [Store protocol](/overview/concepts/protocols#store).

## Create a Light Node

Use the `createLightNode()` function to create a Light Node and interact with the Waku Network:

```js
import { createLightNode } from "@waku/sdk";

// Create and start a Light Node
const node = await createLightNode({ defaultBootstrap: true });
await node.start();
```

## Connect to Store Peers

Use the `waitForRemotePeer()` function to wait for the node to connect with Store peers:

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

`js-waku` provides the `queryOrderedCallback()` and `queryGenerator()` functions for querying `Store` nodes and retrieving historical or missed messages. The responses from `Store` nodes are paginated and require you to handle them sequentially, processing each page when received.

### `queryOrderedCallback`

The `store.queryOrderedCallback()` function provides a straightforward method for querying `Store` nodes and processing messages in chronological order through a callback function. It accepts these parameters:

- `decoders`: List of `decoders` that specify the `content topic` to query for and their [message decryption](https://rfc.vac.dev/spec/26/) methods.
- `callback`: The callback function for processing the retrieved messages.
- `options` (optional): [Query options](/guides/js-waku/store-retrieve-messages#store-query-options) to filter the retrieved messages.

```js
// Create the callback function
const callback = (wakuMessage) => {
	// Render the message/payload in your application
	console.log(wakuMessage);
};

// Set the query options
const queryOptions = {};

// Query the Store peer
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
const queryOptions = {};

// Create the store query
const storeQuery = node.store.queryGenerator(
	[decoder],
	queryOptions,
);

// Process the messages
for await (const messagesPromises of storeQuery) {
	// Fulfill all the messages promises
	const messages = await Promise.all(messagesPromises);
	// Render the message/payload in your application
	console.log(messages);
}
```

## Store Query Options

### `pageDirection`

The `pageDirection` option specifies the direction in which pages are retrieved:

- `BACKWARD` (default): Most recent page first.
- `FORWARD`: Oldest page first.

```js
import { PageDirection } from "@waku/sdk";

// Retrieve recent messages first
const queryOptions = {
	pageDirection: PageDirection.BACKWARD,
};

// Retrieve oldest messages first
const queryOptions = {
	pageDirection: PageDirection.FORWARD,
};
```

:::info
The `pageDirection` option does not affect the ordering of messages within the page, as the oldest message always returns first.
:::

### `timeFilter`

The `timeFilter` option specifies a time frame to retrieve messages from. For example, consider a query that retrieves messages from the previous week:

```js
// Get the time frame
const endTime = new Date();
const startTime = new Date();
startTime.setDate(endTime.getDate() - 7);

// Retrieve a week of messages
const queryOptions = {
	timeFilter: {
		startTime,
		endTime,
	},
};
```

:::info
If you omit the `timeFilter` option, the query will start from the beginning or end of the history, depending on the [page direction](#pagedirection).
:::

### `cursor`

The `cursor` option specifies the starting index for retrieving messages. For example, consider a query that retrieves the first page messages and then continues with the next page:

```js
import { waku } from "@waku/sdk";

// Create the callback function
const messages = [];
const callback = (wakuMessage) => {
	messages.push(wakuMessage);
};

// Retrieve the first page of messages
await node.store.queryOrderedCallback(
	[decoder],
	callback,
);

// Create the cursor
const lastMessage = messages[messages.length - 1];
const cursor = await waku.createCursor(lastMessage);

// Retrieve the next page of messages
// The message at the cursor index is excluded from the result
await node.store.queryOrderedCallback(
	[decoder],
	callback,
	{
		cursor: cursor,
	},
);
console.log(messages);
```

:::info
If you omit the `cursor` option, the query will start from the beginning or end of the history, depending on the [page direction](#pagedirection).
:::

### `peerId`

The `peerId` option specifies the peer to query. A pseudo-random peer is selected from the connected `Store` peers if omitted.

```js
const queryOptions = {
	peerId: "[WAKU STORE PEER ID]",
};
```

:::tip Congratulations!
You have successfully retrieved and filtered historical messages on a Light Node using the `Store` protocol. Check out the [store-js](https://github.com/waku-org/js-waku-examples/tree/master/examples/store-js) and [store-reactjs-chat](https://github.com/waku-org/js-waku-examples/tree/master/examples/store-reactjs-chat) examples for working demos.
:::