---
title: The Waku Network
hide_table_of_contents: true
displayed_sidebar: learn
---

The Waku Network is a shared p2p messaging network that is open-access, useful for generalized messaging, privacy-preserving, scalable and accessible even to resource-restricted devices. Some of the most prominent features include:

1. DoS/spam protection with privacy-preserving Rate-Limiting Nullifiers.
2. Scalability by sharding traffic into 8 pubsub topics.
3. Automatic shard selection based on content topic.
4. Services for resource-restricted nodes, including historical message storage and retrieval, filtering, etc.

:::tip
If you want to learn more about the Waku Network, [The Waku Network: Technical Overview](https://blog.waku.org/2024-03-26-waku-network-tech-overview/) article provides an in-depth look under the hood.
:::

## Why join the Waku network?

1. Applications or projects can build decentralized communication components on this network, gaining from the fault-tolerance of shared infrastructure, the out-of-the-box censorship resistance of a p2p network and the privacy-preservation of Waku protocols.
2. Supporters of public goods and decentralized infrastructure can run their nodes to support the network.
3. We are also working on incentivisation vectors to encourage more node operators to provide services to the network.

## Prerequisites

1. **Ethereum Sepolia HTTPS endpoint**, which can be yours or from a third party. Have a look at the [Access a Sepolia Node Using Infura](https://github.com/waku-org/nwaku/blob/master/docs/tutorial/pre-requisites-of-running-on-chain-spam-protected-chat2.md#3-access-a-node-on-the-sepolia-testnet-using-infura) guide for a free Infura option. This node is used to interact with the [on-chain RLN membership contract](https://rfc.vac.dev/waku/standards/core/17/rln-relay/).
2. **Wallet with Sepolia Ethereum** (less than 0.1 Sepolia ETH). Have a look at the [Create a Sepolia Ethereum Wallet](https://github.com/waku-org/nwaku/blob/master/docs/tutorial/pre-requisites-of-running-on-chain-spam-protected-chat2.md#1-create-a-sepolia-ethereum-account-and-obtain-its-private-key) and [Obtain Sepolia Ethereum from Faucet](https://github.com/waku-org/nwaku/blob/master/docs/tutorial/pre-requisites-of-running-on-chain-spam-protected-chat2.md#2-obtain-sepolia-eth-from-faucet) guides to get a Sepolia wallet and fund it with some Sepolia Ethereum. This wallet is required to register [RLN membership](https://rfc.vac.dev/waku/standards/core/17/rln-relay/#setup-and-registration), which is essential for publishing on the network.

## Running a Waku network node

Have a look at the [Run Nwaku with Docker Compose](/guides/nwaku/run-docker-compose) guide for instructions on running a [nwaku](https://github.com/waku-org/nwaku) node in the Waku Network. Use the Sepolia node and wallet you obtained above.

:::info
The public Waku Network replaces the previous experimental shared routing layer based on a default pubsub topic (`/waku/2/default-waku/proto`). If your project currently uses this or any other shared pubsub topics, we encourage you to migrate to the public Waku Network with built-in DoS protection, scalability, and reasonable bandwidth usage.
:::
