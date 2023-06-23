---
title: Nodes and SDKs
---

:::caution
Waku has risks and limitations as it is still developing and preparing for extensive adoption. However, it is already demonstrating its capabilities by [powering various applications](/powered-by-waku). [Join our community](/community) to stay updated on our progress.
:::

Ready to integrate Waku into your application for private, secure, censorship-free communication? Explore the available SDKs and contribute by running a node.

## Run a Waku Node

The Waku Network is a decentralized, permissionless system where anyone can run nodes, use the network, and contribute to its support.

| | Description | Documentation |
| - | - | - |
| [nwaku](https://github.com/waku-org/nwaku) | Nim-based Waku implementation to run a standalone node and access the network (recommended) | [Run a Nwaku Node](/guides/run-nwaku-node) |
| [go-waku](https://github.com/waku-org/go-waku) | Golang-based Waku implementation to run a standalone node and access the network | [Run a Go-Waku Node](https://github.com/waku-org/go-waku/tree/master/docs/operators) |

## Integrate Using SDKs

Waku is implemented in multiple SDKs, allowing it to integrate with different languages and address various use cases efficiently.

| | Description | Documentation |
| - | - | - |
| [js-waku](https://github.com/waku-org/js-waku) | JavaScript/TypeScript SDK designed for browser environments | [JavaScript Waku SDK](/guides/js-waku/) |
| [nwaku](https://github.com/waku-org/nwaku) | Nim SDK designed for integration with native Nim applications | |
| [go-waku](https://github.com/waku-org/go-waku) | Golang SDK designed for integration with Golang applications, includes C bindings for usage in C/C++, C#/Unity, Swift, and Kotlin | |
| [waku-rust-bindings](https://github.com/waku-org/waku-rust-bindings) | Rust wrapper using `go-waku` bindings designed for integration in Rust applications | |

## Run on Mobile Devices

Waku provides integrations tailored for mobile applications, enabling Waku to run efficiently on mobile devices.

| | Description | Documentation |
| - | - | - |
| [React Native](https://github.com/waku-org/waku-react-native) | React Native wrapper using `go-waku` bindings designed for native mobile integration | |
| Swift (iOS) | `go-waku` bindings for Swift applications to seamlessly integrate Waku | |
| Kotlin (Android) | `go-waku` bindings for Kotlin applications to seamlessly integrate Waku | |

## More Integrations

| | Description | Documentation |
| - | - | - |
| JSON-RPC API | `JSON-RPC` API interface provided by `nwaku` and `go-waku` to interact with the Waku Network | |
| [@waku/react](https://www.npmjs.com/package/@waku/react) | React components and UI adapters designed for seamless integration with `js-waku` | |
| [@waku/create-app](https://www.npmjs.com/package/@waku/create-app) | Starter kit to bootstrap your next `js-waku` project from various example templates | |
| [nwaku-compose](https://github.com/alrevuelta/nwaku-compose) | Pre-configured `docker-compose` setup for running and monitoring a `nwaku` node using Prometheus and Grafana. | [Run Nwaku with Docker Compose](/guides/nwaku/run-docker-compose) |