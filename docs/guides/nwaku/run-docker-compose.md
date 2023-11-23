---
title: Run Nwaku with Docker Compose
hide_table_of_contents: true
---

`nwaku-compose` is a ready-to-use Docker Compose setup that runs the following:

- `nwaku` node running [Relay](/learn/concepts/protocols#relay) and [Store](/learn/concepts/protocols#store) protocols with [RLN](/learn/concepts/protocols#rln-relay) enabled.
- Simple frontend to interact with your node and the network to send and receive messages.
- [Grafana](https://grafana.com/) metrics dashboard for advanced users or node operators.

This guide provides detailed steps to configure, run, monitor, and interact with a `nwaku` node with [nwaku-compose](https://github.com/waku-org/nwaku-compose).

## Prerequisites

- [Git](https://git-scm.com/) or [GitHub Desktop](https://desktop.github.com/)
- [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Ethereum Sepolia WebSocket Endpoint](https://github.com/waku-org/nwaku/blob/master/docs/tutorial/pre-requisites-of-running-on-chain-spam-protected-chat2.md#3-access-a-node-on-the-sepolia-testnet-using-infura)
- [Wallet with Sepolia Ethereum](https://github.com/waku-org/nwaku/blob/master/docs/tutorial/pre-requisites-of-running-on-chain-spam-protected-chat2.md#2-obtain-sepolia-eth-from-faucet) (less than 0.1 Sepolia ETH)
- A password to protect your RLN membership

## Clone the repository

```shell
git clone https://github.com/waku-org/nwaku-compose
cd nwaku-compose
```

## Configure the setup

Modify the `run_node.sh` file to customise your [node's configuration](/guides/nwaku/config-options) and `docker-compose.yml` to specify particular [Docker image](https://hub.docker.com/r/statusteam/nim-waku/tags) tag. Next, export your Ethereum Sepolia configuration and membership password:

```shell
export ETH_CLIENT_ADDRESS=wss://sepolia.infura.io/ws/v3/[INFURA API KEY]
export ETH_TESTNET_KEY=[INFURA API KEY]
export KEYSTORE_PASSWORD=[RLN MEMBERSHIP PASSWORD]
```

## Register RLN membership

The RLN membership is your access key to The Waku Network. Its registration is done on-chain and allows your `nwaku` node to send messages decentralised and privately, respecting some rate limits. Other peers won't relay messages exceeding the rate limit:

```shell
./register_rln.sh
```

:::info
If you only want to relay traffic without sending messages to the network, you don't need to register for RLN membership.
:::

## Run the node

Start all processes: `nwaku` node, database and Grafana for metrics. Your RLN membership is loaded into nwaku under the hood:

```shell
docker-compose up -d
```

## Interact with the node

Visit <http://localhost:3000/d/yns_4vFVk/nwaku-monitoring> to view your node metrics in real-time.

![nwaku compose dashboard](/img/nwaku-compose-dashboard.png)

:::tip
To access Grafana from outside your machine, remove `127.0.0.1` and open the port. Consider setting up a password for Grafana to ensure security.
:::

## Use the REST API

Your `nwaku` node provides a [REST API](https://waku-org.github.io/waku-rest-api/) on port `8645` for interacting with it:

```shell
# Get nwaku version
curl --location 'http://127.0.0.1:8645/debug/v1/version'

# Get nwaku info
curl --location 'http://127.0.0.1:8645/debug/v1/info'
```

Send a message to a `contentTopic`, which all subscribers will receive. Please note that the payload is encoded in `base64`.

```shell
curl --location 'http://127.0.0.1:8645/relay/v1/auto/messages' \
--header 'Content-Type: application/json' \
--data '{
    "payload": "'$(echo -n "Hello Waku Network - from Anonymous User" | base64)'",
    "contentTopic": "/my-app/2/chatroom-1/proto"
}'
```

Retrieve messages sent to a `contentTopic`. Please note that this query can be made to any `Store` node within the network:

```shell
curl --location 'http://127.0.0.1:8645/store/v1/messages?contentTopics=%2Fmy-app%2F2%2Fchatroom-1%2Fproto&pageSize=50&ascending=true' \
--header 'Accept: application/json'
```

:::tip Congratulations!
You have successfully started a `nwaku` node with `RLN` enabled using Docker Compose. Have a look at the [Node Configuration Examples](/guides/nwaku/configure-nwaku) and [Advanced Configuration](https://github.com/waku-org/nwaku-compose/blob/master/ADVANCED.md) guides to learn how to configure `nwaku` for different use cases.
:::