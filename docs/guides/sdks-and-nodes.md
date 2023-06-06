---
title: SDKs and Nodes
---

:::caution
Waku has risks and limitations as it is still developing and preparing for extensive adoption. However, it is already demonstrating its capabilities by [powering various applications](/powered-by-waku). [Join our community](/community) to stay updated on our progress.
:::

Ready to integrate Waku into your application for private, secure, censorship-free communication? Explore the available SDKs and contribute by operating a node.

## Operate a Waku Node

The Waku Network is permissionless and decentralized, consisting of nodes. It is open for anyone to run a node, use the network, and contribute to its support. Please visit the [nwaku guide](https://github.com/waku-org/nwaku/tree/master/docs/operators) (recommended) or [go-waku guide](https://github.com/waku-org/go-waku/tree/master/docs/operators) for operators to learn more.

## Integrate Using SDKs

Waku is implemented in multiple SDKs, allowing it to easily integrate with different languages and address various use cases.

| SDK | Description | Documentation |
| - | - | - |
| [js-waku](https://github.com/waku-org/js-waku) | JavaScript/TypeScript SDK designed for browser environments | |
| [nwaku](https://github.com/waku-org/nwaku) | Nim SDK for running a standalone node and accessing the Waku Network | |
| [go-waku](https://github.com/waku-org/go-waku) | Golang SDK designed for integration with Golang applications, includes C bindings for usage in C/C++, C#/Unity, Swift, and Kotlin | |
| [waku-rust-bindings](https://github.com/waku-org/waku-rust-bindings) | Rust wrapper using `go-waku` bindings designed for integration in Rust applications | |

## Run on Mobile Devices

Waku provides integrations tailored for mobile applications, enabling Waku to operate efficiently on mobile devices.

| Language | Description | Documentation |
| - | - | - |
| [React Native](https://github.com/waku-org/waku-react-native) | React Native wrapper using `go-waku` bindings designed for native mobile integration | |
| Swift (iOS) | `go-waku` bindings for Swift applications to seamlessly integrate Waku | |
| Kotlin (Android) | `go-waku` bindings for Kotlin applications to seamlessly integrate Waku | |

## More Integrations

| Implementation | Description | Documentation |
| - | - | - |
| [@waku/react](https://www.npmjs.com/package/@waku/react) | React components and UI adapters designed for seamless integration with `js-waku` | |
| [@waku/create-app](https://www.npmjs.com/package/@waku/create-app) | Starter kit to bootstrap your next `js-waku` project from various example templates | |
| JSON-RPC API | `JSON-RPC` API interface provided by `nwaku` and `go-waku` to access the Waku Network | |