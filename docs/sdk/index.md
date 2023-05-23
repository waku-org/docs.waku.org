---
title: Overview
slug: /sdk/overview
---

# Waku SDKs

:::caution
While Waku comes with risks and limitations, as it is still in development and preparing for extensive adoption, it is already demonstrating its capabilities by [powering various applications](/powered-by-waku). Join our [community](/community) to stay updated on our progress.
:::

Ready to integrate Waku into your application for private, secure, censorship-free communication? Explore the available integration options and contribute by running a Waku node.

## Running a Waku Node

The Waku network is permissionless and decentralized, consisting of nodes. It is open for anyone to run their node, use the network, and contribute to its support. Please visit the [nwaku guide for operators](https://github.com/waku-org/nwaku/tree/master/docs/operators) to learn more.

## Library Integration

| SDK | Description | Documentation |
| - | - | - |
| [nwaku](https://github.com/waku-org/nwaku) | Nim SDK recommended for deploying a node in the cloud or at home | |
| [js-waku](https://github.com/waku-org/js-waku) | JavaScript/TypeScript SDK designed for browser environments | |
| [go-waku](https://github.com/waku-org/go-waku) | Golang SDK designed for native integration in Golang applications, includes C bindings for usage in C/C++, C#/Unity, Swift, Kotlin, and NodeJS | |
| [waku-rust-bindings](https://github.com/waku-org/waku-rust-bindings) | Rust wrapper using bindings provided by `go-waku` and is designed for Rust applications | |
| [waku-ui](https://github.com/waku-org/waku-ui) | React components and UI adapters designed for seamless integration with `js-waku` | |

## API Integration

| API Protocol | Description | Documentation |
| - | - | - |
| JSON-RPC | `JSON-RPC API` provided by Waku nodes for seamless access and interaction with the Waku network | |

## Mobile Integration

| Language | Description | Documentation |
| - | - | - |
| React Native | React Native wrapper using bindings provided by `go-waku` and is designed for mobile integration. | |
| Swift (iOS) | Swift applications can seamlessly integrate Waku with the C bindings provided by `go-waku`. | |
| Kotlin (Android) | Kotlin applications can seamlessly integrate Waku with the C bindings provided by `go-waku`. | |