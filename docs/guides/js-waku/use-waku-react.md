---
title: "Build React DApps Using @waku/react"
---

The [@waku/react](https://www.npmjs.com/package/@waku/react) package provides components and UI adapters to integrate `js-waku` into React applications effortlessly. This guide provides detailed steps for using `@waku/react` in your project.

## Install the Dependencies

First, set up a project using any [production-grade React framework](https://react.dev/learn/start-a-new-react-project) or use an existing React application. For this guide, we will create a boilerplate using [Create React App (CRA)](https://create-react-app.dev/docs/getting-started):

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```shell
npx create-react-app [PROJECT DIRECTORY]
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn create react-app [PROJECT DIRECTORY]
```

</TabItem>
</Tabs>

Next, install the `@waku/react` package using your preferred package manager:

<Tabs groupId="package-manager">
<TabItem value="npm" label="npm">

```shell
npm install @waku/react
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn add @waku/react
```

</TabItem>
</Tabs>

## Create a Light Node

Use the `useCreateLightNode()` hook to create a [Light Node](/guides/js-waku/light-send-receive):

```js title="App.js"
import { useCreateLightNode } from "@waku/react";

function App() {
	// Create and start a Light Node and wait for remote peers
	const { node, error, isLoading } = useCreateLightNode({
		options: { defaultBootstrap: true },
	});

	// "node" is the created Light Node
	// "error" captures any error that occurs during node creation
	// "isLoading" indicates whether the node is still being created
}
```

You can also use the `LightNodeProvider` [context provider](https://react.dev/reference/react/createContext#provider) to pass configuration options for creating a `Light Node`:

```js title="index.js"
import { LightNodeProvider } from "@waku/react";

// Set the Light Node options
const NODE_OPTIONS = { defaultBootstrap: true };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		// Use the Light Node context provider
		<LightNodeProvider options={NODE_OPTIONS}>
			<App />
		</LightNodeProvider>
	</React.StrictMode>
);
```

```js title="App.js"
import { useWaku } from "@waku/react";

function App() {
	// Create and start a Light Node
	const { node, error, isLoading } = useWaku();
}
```

## Send Messages Using Light Push

Use the `useLightPush()` hook to bind [Light Push methods](/guides/js-waku/light-send-receive/#send-messages-using-light-push) to a node and `encoder`:

```js title="App.js"
import {
	useCreateLightNode,
	useLightPush,
} from "@waku/react";
import {
	utf8ToBytes,
	createEncoder,
} from "@waku/sdk";

function App() {
	// Create and start a Light Node and wait for remote peers
	const { node, error, isLoading } = useCreateLightNode({
		options: { defaultBootstrap: true },
	});

	// Choose a content topic and create an encoder
	const contentTopic = "/waku-react-guide/1/message/utf8";
	const encoder = createEncoder({ contentTopic });

	// Wait for the node to finish loading before sending messages
	// (isLoading === false)

	// Bind push method to a node and encoder
	const { push } = useLightPush({ node, encoder });

	// Send the message using Light Push
	const sendMessage = async (text) => {
		if (!push || !text) {
			return;
		}
		const payload = utf8ToBytes(text);
		await push({ payload });
	};
	sendMessage("Hello, World!");
}
```

:::info
Wait for the node to finish loading before sending messages (`isLoading` === `false`).
:::

## Receive Messages Using Filter

Use the `useFilterMessages()` hook to receive messages from a [Filter subscription](/guides/js-waku/light-send-receive/#receive-messages-using-filter) and keep it updated:

```js title="App.js"
import {
	useCreateLightNode,
	useFilterMessages,
} from "@waku/react";
import {
	bytesToUtf8,
	createDecoder,
} from "@waku/sdk";

function App() {
	// Create and start a Light Node and wait for remote peers
	const { node } = useCreateLightNode({
		options: { defaultBootstrap: true },
	});

	// Choose a content topic and create a decoder
	const contentTopic = "/waku-react-guide/1/message/utf8";
	const decoder = createDecoder(contentTopic);

	// Receive messages from Filter subscription
	const { error, messages, isLoading } = useFilterMessages({ node, decoder });

	// "error" captures any error that occurs while receiving messages
	// "messages" contains a list of messages the subscription received
	// "isLoading" indicates whether the node is still subscribing to Filter

	// Wait for the messages to finish loading before processing them
	// (isLoading === false)
	messages.forEach((message) => {
    	console.log(bytesToUtf8(message.payload));
	});
}
```

:::info
Wait for the messages to finish loading before processing them (`isLoading` === `false`).
:::

## Retrieve Messages Using Store

Use the `useStoreMessages()` hook to retrieve messages from the [Store protocol](/guides/js-waku/store-retrieve-messages):

```js title="App.js"
import {
	useCreateLightNode,
	useStoreMessages,
} from "@waku/react";
import {
	bytesToUtf8,
	createDecoder,
} from "@waku/sdk";

function App() {
	// Create and start a Light Node and wait for remote peers
	const { node } = useCreateLightNode({
		options: { defaultBootstrap: true },
	});

	// Choose a content topic and create a decoder
	const contentTopic = "/waku-react-guide/1/message/utf8";
	const decoder = createDecoder(contentTopic);

	// Set the query options
	const options = {};

	// Query the Store peer
	const { error, messages, isLoading } = useStoreMessages({ node, decoder, options });

	// "error" captures any error that occurs during message retrieval
	// "messages" contains a list of messages retrieved from the Store peer
	// "isLoading" indicates whether the node is still retrieving messages

	// Wait for the messages to finish retrieving before processing them
	// (isLoading === false)
	messages.forEach((message) => {
    	console.log(bytesToUtf8(message.payload));
	});
}
```

:::info
To explore the available query options, check out the [Store Query Options](/guides/js-waku/store-retrieve-messages#store-query-options) guide.
:::

:::tip
You have successfully integrated `js-waku` into a React application using the `@waku/react` package. Check out the [web-chat](https://github.com/waku-org/js-waku-examples/tree/master/examples/web-chat) example for a working demo.
:::