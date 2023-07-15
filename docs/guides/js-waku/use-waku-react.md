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
npm install @waku/react @waku/sdk
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn add @waku/react @waku/sdk
```

</TabItem>
</Tabs>

## Create a Relay Node

Use the `useCreateRelayNode()` hook to create a Relay Node:

```js title="App.js"
import { useCreateRelayNode } from "@waku/react";

function App() {
	// Create and start a Relay Node
	const { node, error, isLoading } = useCreateRelayNode({
		options: {
			defaultBootstrap: true,
			emitSelf: true,
		}
	});

	// "node" is the created Relay Node
	// "error" captures any error that occurs during node creation
	// "isLoading" indicates whether the node is still being created
	// Use these to handle states and render the UI in your application
}
```

## Create a Light Node

Use the `useCreateLightNode()` hook to create a Light Node and specify the [protocols](/overview/concepts/protocols) for remote peers:

```js title="App.js"
import { useCreateLightNode } from "@waku/react";
import { Protocols } from "@waku/interfaces";

function App() {
	// Create and start a Light Node and wait for remote peers
	const { node, error, isLoading } = useCreateLightNode({
		options: { defaultBootstrap: true },
		protocols: [Protocols.LightPush, Protocols.Filter],
	});

	// "node" is the created Light Node
	// "error" captures any error that occurs during node creation
	// "isLoading" indicates whether the node is still being created
	// Use these to handle states and render the UI in your application
}
```

## Create an Encoder and Decoder

Use the `useCreateContentPair()` hook to create a message `encoder` and `decoder` pair:

```js title="App.js"
import { useCreateContentPair } from "@waku/react";

function App() {
	// Choose a content topic
	const contentTopic = "/waku-react-guide/1/message/utf8";
	const ephemeral = false;

	// Create a message encoder and decoder pair
	const { encoder, decoder } = useCreateContentPair(contentTopic, ephemeral);

	// "encoder" is the message encoder
	// "decoder" is the message decoder
	// Use these to handle the messages in your application
}
```

## Send Messages Using Light Push

Use the `useLightPush()` hook to bind `Light Push` methods to a node and `encoder`:

```js title="App.js"
import {
	useCreateLightNode,
	useCreateContentPair,
	useLightPush,
} from "@waku/react";
import { Protocols } from "@waku/interfaces";
import { utf8ToBytes } from "@waku/sdk";

function App() {
	// Create and start a Light Node and wait for remote peers
	const { node, error, isLoading } = useCreateLightNode({
		options: { defaultBootstrap: true },
		protocols: [Protocols.LightPush, Protocols.Filter],
	});

	// Choose a content topic and create an encoder
	const contentTopic = "/waku-react-guide/1/message/utf8";
	const { encoder  } = useCreateContentPair(contentTopic);

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

Use the `useFilterMessages()` hook to receive messages from a `Filter` subscription:

```js title="App.js"
import {
	useCreateLightNode,
	useCreateContentPair,
	useFilterMessages,
} from "@waku/react";
import { Protocols } from "@waku/interfaces";

function App() {
	// Create and start a Light Node and wait for remote peers
	const { node } = useCreateLightNode({
		options: { defaultBootstrap: true },
		protocols: [Protocols.LightPush, Protocols.Filter],
	});

	// Choose a content topic and create a decoder
	const contentTopic = "/waku-react-guide/1/message/utf8";
	const { decoder } = useCreateContentPair(contentTopic);

	// Receive messages from Filter subscription
	const { error, messages, isLoading } = useFilterMessages({ node, decoder });
	console.log(messages);

	// "error" captures any error that occurs while receiving messages
	// "messages" contains a list of messages the subscription received
	// "isLoading" indicates whether the node is still subscribing to Filter
	// Use these to handle states and render the UI in your application
}
```

## Retrieve Messages Using Store

Use the `useStoreMessages()` hook to retrieve messages from the `Store` protocol:

```js title="App.js"
import {
	useCreateLightNode,
	useCreateContentPair,
	useStoreMessages,
} from "@waku/react";
import { Protocols, PageDirection } from "@waku/interfaces";

function App() {
	// Create and start a Light Node and wait for remote peers
	const { node } = useCreateLightNode({
		options: { defaultBootstrap: true },
		protocols: [Protocols.LightPush, Protocols.Filter],
	});

	// Choose a content topic and create a decoder
	const contentTopic = "/waku-react-guide/1/message/utf8";
	const { decoder } = useCreateContentPair(contentTopic);

	// Set the query options
	const options = {
		pageDirection: PageDirection.BACKWARD,
		pageSize: 20,
	};

	// Query the Store peer
	const { error, messages, isLoading } = useStoreMessages({ node, decoder, options });
	console.log(messages);

	// "error" captures any error that occurs during message retrieval
	// "messages" contains a list of messages retrieved from the Store peer
	// "isLoading" indicates whether the node is still retrieving messages
	// Use these to handle states and render the UI in your application
}
```

:::info
To explore the available query options, please refer to the [Store Query Options](/guides/js-waku/store-retrieve-messages#store-query-options) guide.
:::

## Using @waku/react Providers

The `@waku/react` package provides a collection of [context providers](https://react.dev/reference/react/createContext#provider) to pass configuration options throughout the component hierarchy:

### `RelayNodeProvider`

The `RelayNodeProvider` context provider passes configuration options for creating a Relay Node:

```js title="index.js"
import { RelayNodeProvider } from "@waku/react";
import { Protocols } from "@waku/interfaces";

// Set the Relay Node options
const NODE_OPTIONS = {
	defaultBootstrap: true,
	emitSelf: true,
};

// Set the remote peer connections to wait for
const PROTOCOLS = [Protocols.Relay];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		// Use the Relay Node context provider
		<RelayNodeProvider options={NODE_OPTIONS} protocols={PROTOCOLS}>
			<App />
		</RelayNodeProvider>
	</React.StrictMode>
);
```

```js title="App.js"
import { useWaku } from "@waku/react";

function App() {
	// Create and start a Relay Node
	const { node, error, isLoading } = useWaku();
	// Use these to handle states and render the UI in your application
}
```

### `LightNodeProvider`

The `LightNodeProvider` context provider passes configuration options for creating a Light Node:

```js title="index.js"
import { LightNodeProvider } from "@waku/react";
import { Protocols } from "@waku/interfaces";

// Set the Light Node options
const NODE_OPTIONS = { defaultBootstrap: true };

// Set the remote peer connections to wait for
const PROTOCOLS = [
	Protocols.LightPush,
	Protocols.Filter,
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		// Use the Light Node context provider
		<LightNodeProvider options={NODE_OPTIONS} protocols={PROTOCOLS}>
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
	// Use these to handle states and render the UI in your application
}
```

### `ContentPairProvider`

The `ContentPairProvider` context provider passes configuration options for creating an `encoder` and `decoder` pair:

```js title="index.js"
import { ContentPairProvider } from "@waku/react";

// Choose a content topic
const CONTENT_TOPIC = "/waku-react-guide/1/message/utf8";
const EPHEMERAL = false;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		// Use the content pair context provider
		<ContentPairProvider contentTopic={CONTENT_TOPIC} ephemeral={EPHEMERAL}>
			<App />
		</ContentPairProvider>
	</React.StrictMode>
);
```

```js title="App.js"
import { useContentPair } from "@waku/react";

function App() {
	// Create a message encoder and decoder pair
	const { encoder, decoder } = useContentPair();
	// Use these to handle the messages in your application
}
```

:::tip
You have successfully integrated `js-waku` into a React application using the `@waku/react` package. Check out the [web-chat](https://github.com/waku-org/js-waku-examples/tree/master/examples/web-chat) example for a working demo.
:::