---
title: JavaScript Waku SDK
hide_table_of_contents: true
---

The [JavaScript Waku SDK](https://github.com/waku-org/js-waku) (`@waku/sdk`) provides a TypeScript implementation of the [Waku protocol](/) designed for web browser environments. Developers can seamlessly integrate Waku functionalities into web applications, enabling efficient communication and collaboration among users using the `@waku/sdk` package.

## Installation

Install the `@waku/sdk` package using your preferred package manager:

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs groupId="package-manager">
<TabItem value="npm" label="NPM">

```shell
npm install @waku/sdk
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn add @waku/sdk
```

</TabItem>
</Tabs>

You can also use the `@waku/sdk` package via a CDN without installing it on your system:

```js
import * as waku from "https://unpkg.com/@waku/sdk@latest/bundle/index.js";
```

## Message structure

We recommend creating a message structure for your application using [Protocol Buffers](https://protobuf.dev/) for the following reasons:

1. **Consistency:** Ensures uniform message format for easy parsing and processing.
2. **Interoperability:** Facilitates effective communication between different parts of your application.
3. **Compatibility:** Allows smooth communication between older and newer app versions.
4. **Payload Size:** Minimizes payload overhead, especially for byte arrays, unlike JSON which adds significant overhead.

To get started, install the `protobufjs` package using your preferred package manager:

<Tabs groupId="package-manager">
<TabItem value="npm" label="NPM">

```shell
npm install protobufjs
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn add protobufjs
```

</TabItem>
</Tabs>

You can also use the `protobufjs` package via a CDN without installing it on your system:

```js
// Import the CDN
import "https://cdn.jsdelivr.net/npm/protobufjs@latest/dist/protobuf.min.js";
```

```html
<!-- Or include the protobufjs script -->
<script src="https://cdn.jsdelivr.net/npm/protobufjs@latest/dist/protobuf.min.js"></script>
```

## Getting started

Have a look at the quick start guide and comprehensive tutorials to learn how to build applications using `@waku/sdk`:

| Guide | Description |
| - | - |
| [Send and Receive Messages Using Light Push and Filter](/guides/js-waku/light-send-receive) | Learn how to send and receive messages on light nodes using the [Light Push](/learn/concepts/protocols#light-push) and [Filter](/learn/concepts/protocols#filter) protocols |
| [Retrieve Messages Using Store Protocol](/guides/js-waku/store-retrieve-messages) | Learn how to retrieve and filter historical messages on light nodes using the [Store protocol](/learn/concepts/protocols#store) |
| [Encrypt, Decrypt, and Sign Your Messages](/guides/js-waku/message-encryption) | Learn how to use the [@waku/message-encryption](https://www.npmjs.com/package/@waku/message-encryption) package to encrypt, decrypt, and sign your messages |
| [Build React DApps Using @waku/react](/guides/js-waku/use-waku-react) | Learn how to use the [@waku/react](https://www.npmjs.com/package/@waku/react) package seamlessly integrate `@waku/sdk` into a React application |
| [Scaffold DApps Using @waku/create-app](/guides/js-waku/use-waku-create-app) | Learn how to use the [@waku/create-app](https://www.npmjs.com/package/@waku/create-app) package to bootstrap your next `@waku/sdk` project from various example templates |
| [Bootstrap Nodes and Discover Peers](/guides/js-waku/configure-discovery) | Learn how to bootstrap your node using [Static Peers](/learn/concepts/static-peers) and discover peers using [DNS Discovery](/learn/concepts/dns-discovery) |
| [Run @waku/sdk in a NodeJS Application](/guides/js-waku/run-waku-nodejs) | Learn our suggested approach for using the `@waku/sdk` package within a NodeJS application |
| [Debug Your Waku DApp and WebSocket](/guides/js-waku/debug-waku-dapp) | Learn how to troubleshoot your Waku DApp using debug logs and check [WebSocket](/learn/concepts/transports) connections in [nwaku](/guides/nwaku/run-node) |
| [Manage Your Filter Subscriptions](/guides/js-waku/manage-filter) | Learn how to manage [filter subscriptions](/learn/concepts/protocols#filter) and handle node disconnections in your application |

:::tip
Until [node incentivisation](/learn/research#prevention-of-denial-of-service-dos-and-node-incentivisation) is in place, you should [operate extra nodes](/#run-a-waku-node) alongside the ones provided by the Waku Network. When running a node, we recommend using the [DNS Discovery and Static Peers](/guides/js-waku/configure-discovery#configure-dns-discovery-and-static-peers) configuration to connect to both the Waku Network and your node.
:::

## Get help and report issues

To engage in general discussions, seek assistance, or stay updated with the latest news, visit the `#support` and `#js-waku-contribute` channels on the [Waku Discord](https://discord.waku.org).

If you discover bugs or want to suggest new features, do not hesitate to [open an issue](https://github.com/waku-org/js-waku/issues/new/) in the [js-waku repository](https://github.com/waku-org/js-waku). Your feedback and contributions are highly valued and will help improve the `@waku/sdk` package.