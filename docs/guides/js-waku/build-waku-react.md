---
title: "Build React DApps Using @waku/react"
---

The [@waku/react](https://www.npmjs.com/package/@waku/react) package provides components and UI adapters to effortlessly integrate `js-waku` into React projects. This guide provides detailed steps for using `@waku/react` in your project.

## Install the Dependencies

First, setup a project using any [production-grade React framework](https://react.dev/learn/start-a-new-react-project) or [Create React App (CRA)](https://create-react-app.dev/docs/getting-started) or existing React project. For this guide, we will create a boilerplate using `Create React App`:

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs>
<TabItem value="npx" label="npx">

```shell
npx create-react-app [PROJECT DIRECTORY]
```

</TabItem>
<TabItem value="npm" label="npm">

```shell
npm init react-app [PROJECT DIRECTORY]
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn create react-app [PROJECT DIRECTORY]
```

</TabItem>
</Tabs>

Next, install the `@waku/react` package using your preferred package manager:

<Tabs>
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

Use the `useCreateRelayNode()` function to create a relay node helper hook:

```js title="App.js" showLineNumbers
import { useCreateRelayNode } from "@waku/react";

function App() {
	// Create and start a relay node
	const { node, error, isLoading } = useCreateRelayNode({
		options: { defaultBootstrap: true }
	});
}
```

## Create a Light Node

Use the `useCreateLightNode()` function to create a light node helper hook and specify the [protocols](/overview/concepts/protocols) for remote peers:

```js title="App.js" showLineNumbers
import { useCreateLightNode } from "@waku/react";
import { Protocols } from "@waku/interfaces";

function App() {
	// Create and start a light node and wait for remote peers
	const { node, error, isLoading } = useCreateLightNode({
		options: { defaultBootstrap: true },
		protocols: [Protocols.LightPush, Protocols.Filter],
	});
}
```

## Create an Encoder and Decoder

Use the `useCreateContentPair()` function to create a message `encoder` and `decoder` pair:

```js title="App.js" showLineNumbers
import { useCreateContentPair } from "@waku/react";

function App() {
	// Choose a content topic
	const contentTopic = "/waku-react-guide/1/message/utf8";
	const ephemeral = false;

	// Create a message encoder and decoder pair
	const { encoder, decoder } = useCreateContentPair(contentTopic, ephemeral);
}
```

## Send Messages Using Light Push

Use the `useLightPush()` function to bind `Light Push` methods to a node and `encoder`:

```js title="App.js" showLineNumbers
import {
	useCreateLightNode,
	useCreateContentPair,
	useLightPush
} from "@waku/react";
import { Protocols } from "@waku/interfaces";
import { utf8ToBytes } from "@waku/sdk";

function App() {
	// Create and start a light node and wait for remote peers
	const { node, error, isLoading } = useCreateLightNode({
		options: { defaultBootstrap: true },
		protocols: [Protocols.LightPush, Protocols.Filter],
	});

	// Choose a content topic and create an encoder
	const contentTopic = "/waku-react-guide/1/message/utf8";
	const { encoder  } = useCreateContentPair(contentTopic);

	// Wait for the node to finish loading before sending messages
	// (isLoading === false)

  	// Bind push function to a node and encoder
  	const { push } = useLightPush({ node, encoder });

	// Send the message using Light Push
	const sendMessage = async (text: string) => {
		if (!push || !text) {
      		return;
    	}
		const payload = utf8ToBytes(text);
		await push({ payload });
    }
	sendMessage("Hello, World!");
  };
}
```

:::info
Wait for the node to finish loading before sending messages (`isLoading` === `false`).
:::

## Receive Messages Using Filter

## Retrieve Messages Using Store

:::tip
You have successfully integrated `js-waku` into a React project using the `@waku/react` package. For a working demo, check out the [web-chat](https://github.com/waku-org/js-waku-examples/tree/master/examples/web-chat) example.
:::