---
title: "Build React DApps Using @waku/react"
hide_table_of_contents: true
---

:::caution
Currently, the JavaScript Waku SDK is NOT compatible with React Native. We plan to add support for React Native in the future.
:::

The [@waku/react](https://www.npmjs.com/package/@waku/react) package provides components and UI adapters to integrate `@waku/sdk` into React applications effortlessly. This guide provides detailed steps for using `@waku/react` in your project.

## Install the dependencies

First, set up a project using any [production-grade React framework](https://react.dev/learn/start-a-new-react-project) or an existing React application. For this guide, we will create a boilerplate using [ViteJS](https://vitejs.dev/guide/):

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs groupId="package-manager">
<TabItem value="npm" label="NPM">

```shell
npm create vite@latest [PROJECT DIRECTORY] -- --template react
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn create vite [PROJECT DIRECTORY] --template react
```

</TabItem>
</Tabs>

Next, install the required libraries for integrating `@waku/sdk` using your preferred package manager:

<Tabs groupId="package-manager">
<TabItem value="npm" label="NPM">

```shell
npm install @waku/react @waku/sdk protobufjs
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn add @waku/react @waku/sdk protobufjs
```

</TabItem>
</Tabs>

## Initialise the Waku provider

In the `main.jsx` file, which serves as the entry point for a React app, we will set up the `LightNodeProvider` [context provider](https://react.dev/reference/react/createContext#provider) to wrap the entire application within the Waku provider. Import the following on top of your file:

```js title="src/main.jsx"
import { LightNodeProvider } from "@waku/react";

// Set the Light Node options
const NODE_OPTIONS = { defaultBootstrap: true };

ReactDOM.createRoot(document.getElementById('root')).render(
  // Use the Light Node context provider
  <React.StrictMode>
    <LightNodeProvider options={NODE_OPTIONS}>
      <App />
    </LightNodeProvider>
  </React.StrictMode>,
)
```

Next, create and start a [Light Node](/learn/glossary#light-node) using the `useWaku()` function within the `App.jsx` file:

```js title="src/App.jsx"
import { useWaku } from "@waku/react";

function App() {
	// Create and start a Light Node
	const { node, error, isLoading } = useWaku();

	// "node" is the created Light Node
	// "error" captures any error that occurs during node creation
	// "isLoading" indicates whether the node is still being created
}
```

## Build the application interface

Let's build a user interface for sending messages and viewing past messages, modify the `App.jsx` file with the following code block:

```js title="src/App.jsx"
import { useState, useEffect } from 'react';
import { useWaku } from "@waku/react";
import { createEncoder, createDecoder } from "@waku/sdk";
import protobuf from 'protobufjs';
import './App.css'

function App() {
	const [inputMessage, setInputMessage] = useState("");
	const [messages, setMessages] = useState([]);

	// Update the inputMessage state as the user input changes
	const handleInputChange = (e) => {
		setInputMessage(e.target.value);
	};

	// Create and start a Light Node
	const { node, error, isLoading } = useWaku();

	// Create a message encoder and decoder
	const contentTopic = "/waku-react-guide/1/chat/proto";
	const encoder = createEncoder({ contentTopic });
	const decoder = createDecoder(contentTopic);

	// Create a message structure using Protobuf
	const ChatMessage = new protobuf.Type("ChatMessage")
		.add(new protobuf.Field("timestamp", 1, "uint64"))
		.add(new protobuf.Field("message", 2, "string"));

	// Send the message using Light Push
	const sendMessage = async () => {}

	return (
		<>
			<div className="chat-interface">
				<h1>Waku React Demo</h1>
				<div className="chat-body">
					{messages.map((message, index) => (
						<div key={index} className="chat-message">
							<span>{new Date(message.timestamp).toUTCString()}</span>
							<div className="message-text">{message.message}</div>
						</div>
					))}
				</div>
				<div className="chat-footer">
					<input
						type="text"
						id="message-input"
						value={inputMessage}
						onChange={handleInputChange}
						placeholder="Type your message..."
					/>
					<button className="send-button" onClick={sendMessage}>Send</button>
				</div>
			</div>
		</>
	)
}

export default App
```

:::info
In the code above, we also created a message `encoder` and `decoder` using the `createEncoder()` and `createDecoder()` functions, along with the application [message structure](/guides/js-waku/#message-structure) with Protobuf.
:::

Next, modify the `App.css` file with the following code block:

```css title="src/App.css"
#root {
	margin: 0 auto;
}

.chat-interface {
	display: flex;
	flex-direction: column;
	height: 100vh;
	border: 1px solid #ccc;
}

.chat-body {
	flex-grow: 1;
	overflow-y: auto;
	padding: 10px;
}

.message-text {
	background-color: #f1f1f1;
	color: #000;
	padding: 10px;
	margin-bottom: 10px;
}

.chat-footer {
	display: flex;
	padding: 10px;
	background-color: #f1f1f1;
	align-items: center;
}

#message-input {
	flex-grow: 1;
	border-radius: 4px;
	padding: 10px;
	margin-right: 10px;
}

.send-button {
	background-color: #007bff;
	border-radius: 4px;
}
```

## Send messages using light push

To send messages in our application, we need to modify the `sendMessage()` function to serialize user input into our Protobuf structure and [push it to the network](/guides/js-waku/light-send-receive#send-messages-using-light-push) using the `useLightPush()` function:

```js title="src/App.jsx"
import { useLightPush } from "@waku/react";

function App() {
	// Bind push method to a node and encoder
	const { push } = useLightPush({ node, encoder });

	// Send the message using Light Push
	const sendMessage = async () => {
		if (!push || inputMessage.length === 0) return;

		// Create a new message object
		const timestamp = Date.now();
		const protoMessage = ChatMessage.create({
			timestamp: timestamp,
			message: inputMessage
		});

		// Serialise the message and push to the network
		const payload = ChatMessage.encode(protoMessage).finish();
		const { recipients, errors } = await push({ payload, timestamp });

		// Check for errors
		if (errors.length === 0) {
			setInputMessage("");
			console.log("MESSAGE PUSHED");
		} else {
			console.log(errors);
		}
	};
}
```

## Receive messages using filter

To display messages in our application, we need to use the `useFilterMessages()` function to create a [Filter subscription](/guides/js-waku/light-send-receive/#receive-messages-using-filter), receive incoming messages, and render them in our interface:

```js title="src/App.jsx"
import { useFilterMessages } from "@waku/react";

function App() {
	// Receive messages from Filter subscription
	const { messages: filterMessages } = useFilterMessages({ node, decoder });

	// Render the list of messages
	useEffect(() => {
		setMessages(filterMessages.map((wakuMessage) => {
			if (!wakuMessage.payload) return;
			return ChatMessage.decode(wakuMessage.payload);
		}));
	}, [filterMessages]);
}
```

## Retrieve messages using store

To display messages from the past, we need to retrieve them from the [Store protocol](/guides/js-waku/store-retrieve-messages) using the `useStoreMessages()` function when our application initialises and then render them alongside newly received messages:

```js title="src/App.jsx"
import { useFilterMessages, useStoreMessages } from "@waku/react";

function App() {
	// Query Store peers for past messages
	const { messages: storeMessages } = useStoreMessages({ node, decoder });

	// Receive messages from Filter subscription
	const { messages: filterMessages } = useFilterMessages({ node, decoder });

	// Render both past and new messages
	useEffect(() => {
		const allMessages = storeMessages.concat(filterMessages);
		setMessages(allMessages.map((wakuMessage) => {
			if (!wakuMessage.payload) return;
			return ChatMessage.decode(wakuMessage.payload);
		}));
	}, [filterMessages, storeMessages]);
}
```

:::info
To explore the available Store query options, have a look at the [Retrieve Messages Using Store Protocol](/guides/js-waku/store-retrieve-messages#store-query-options) guide.
:::

:::tip
You have successfully integrated `@waku/sdk` into a React application using the `@waku/react` package. Have a look at the [web-chat](https://github.com/waku-org/js-waku-examples/tree/master/examples/web-chat) example for a working demo.
:::