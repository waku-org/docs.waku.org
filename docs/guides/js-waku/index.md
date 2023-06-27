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

Check out the quick start guide and comprehensive tutorials to learn how to build applications with `js-waku`.

| Guide | Description |
| - | - |
| [Quick Start](/guides/js-waku/quick-start) | Quickly familiarize yourself with `js-waku` by learning to send and receive messages using the `Filter` and `Light Push` protocols. |

You can explore [examples.waku.org](https://examples.waku.org) to find working proofs-of-concept that showcase how to use `js-waku` effectively. You can also interact with these examples live:

- [web-chat](https://examples.waku.org/web-chat): A simple public chat.
- [eth-pm](https://examples.waku.org/eth-pm): End-to-end encrypted private messages.
- [rln-js](https://examples.waku.org/rln-js): Demonstration of [RLN](https://rfc.vac.dev/spec/32/), an economic spam protection protocol that rate limit using zero-knowledge for privacy preserving purposes.

:::tip
To further explore the `js-waku` SDK API, visit the TypeDoc documentation at <https://js.waku.org/>.
:::

## Get Help and Report Issues

To engage in general discussions, seek assistance, or stay updated with the latest news, visit the `#support` and `#js-waku-contribute` channels on the [Waku Discord](https://discord.waku.org).

If you discover bugs or want to suggest new features, do not hesitate to [open an issue](https://github.com/waku-org/js-waku/issues/new/) in the [js-waku repository](https://github.com/waku-org/js-waku). Your feedback and contributions are highly valued and will help improve the `js-waku` SDK.