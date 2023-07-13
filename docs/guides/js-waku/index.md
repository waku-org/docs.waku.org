---
title: JavaScript Waku SDK
---

The [JavaScript Waku SDK](https://github.com/waku-org/js-waku) (`js-waku`) provides a TypeScript implementation of the [Waku protocol](/) designed for web browser environments. Developers can seamlessly integrate Waku functionalities into web applications, enabling efficient communication and collaboration among users using the `js-waku` SDK.

## Installation

Install the `js-waku` SDK using your preferred package manager:

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs>
<TabItem value="npm" label="npm">

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

You can also use the `js-waku` SDK via a CDN without installing it on your system:

```js
import * as waku from "https://unpkg.com/@waku/sdk@latest/bundle/index.js";
```

## Getting Started

Check out the quick start guide and comprehensive tutorials to learn how to build applications using `js-waku`:

| Guide | Description |
| - | - |
| [Quick Start](/guides/js-waku/quick-start) | Quickly familiarize yourself with `js-waku` by setting up a Waku node and sending messages using the [Relay](/overview/concepts/protocols#relay) protocol |
| [Send and Receive Messages Using Relay](/guides/js-waku/relay-send-receive) | Learn how to set up a Waku node for sending and receiving messages using the [Relay](/overview/concepts/protocols#relay) protocol |
| [Send and Receive Messages Using Light Push and Filter](/guides/js-waku/light-send-receive) | Learn how to send and receive messages on light nodes using the [Light Push](/overview/concepts/protocols#light-push) and [Filter](/overview/concepts/protocols#filter) protocols |
| [Retrieve Messages Using Store](/guides/js-waku/store-retrieve-messages) | Learn how to retrieve and filter historical messages on light nodes using the [Store](/overview/concepts/protocols#store) protocol |
| [Build React DApps Using @waku/react](/guides/js-waku/build-waku-react) | Learn how to use the [@waku/react](https://www.npmjs.com/package/@waku/react) package seamlessly integrate `js-waku` into a React project |
| [Bootstrap DApps Using @waku/create-app](/guides/js-waku/waku-create-app) | Learn how to use the [@waku/create-app](https://www.npmjs.com/package/@waku/create-app) package to bootstrap your next `js-waku` project from various example templates |

## Get Help and Report Issues

To engage in general discussions, seek assistance, or stay updated with the latest news, visit the `#support` and `#js-waku-contribute` channels on the [Waku Discord](https://discord.waku.org).

If you discover bugs or want to suggest new features, do not hesitate to [open an issue](https://github.com/waku-org/js-waku/issues/new/) in the [js-waku repository](https://github.com/waku-org/js-waku). Your feedback and contributions are highly valued and will help improve the `js-waku` SDK.