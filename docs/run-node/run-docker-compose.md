---
title: Run Nwaku with Docker Compose
hide_table_of_contents: true
displayed_sidebar: runNode
---

[nwaku-compose](https://github.com/waku-org/nwaku-compose) is a ready-to-use Docker Compose setup that configures the following automatically:

- `nwaku` node running [Relay](/learn/concepts/protocols#relay) and [Store](/learn/concepts/protocols#store) protocols with [RLN](/learn/concepts/protocols#rln-relay) enabled.
- Simple frontend to interact with the node and Waku network to send and receive messages.
- [Grafana](https://grafana.com/) metrics dashboard for advanced users and node operators to monitor the node.

## Video tutorial

<div class="video-container">
  <iframe class="yt-video" src="https://www.youtube.com/embed/fs0ynLk4z0I" title="How to run a Waku node using Nwaku Compose" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

:::tip
Check out the [Waku Node Operator Cheatsheet](/Waku-NodeOperator.pdf) to learn how to easily run, monitor, and interact with a node.
:::

## Prerequisites

- [Git](https://git-scm.com/) or [GitHub Desktop](https://desktop.github.com/)
- [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Ethereum Sepolia HTTPS Endpoint](https://github.com/waku-org/nwaku/blob/master/docs/tutorial/pre-requisites-of-running-on-chain-spam-protected-chat2.md#3-access-a-node-on-the-sepolia-testnet-using-infura)
- [Wallet with Sepolia Ethereum](https://github.com/waku-org/nwaku/blob/master/docs/tutorial/pre-requisites-of-running-on-chain-spam-protected-chat2.md#2-obtain-sepolia-eth-from-faucet) (~0.6 Sepolia ETH)
- A password to protect your RLN membership

:::info
We recommend running a `nwaku` node with at least 2GB of RAM, especially if `WSS` is enabled. If running just a `Relay` node, 0.5GB of RAM is sufficient.
:::

## Clone the repository

```shell
git clone https://github.com/waku-org/nwaku-compose
cd nwaku-compose
```

## Configure the setup

Docker Compose [reads the .env file](https://docs.docker.com/compose/environment-variables/set-environment-variables/#additional-information-3) from the filesystem. You can use `.env.example` as a template to provide the configuration values. The recommended process for working with `.env` files is to duplicate `.env.example`, rename it as `.env`, and then make the necessary value edits.

```shell
cp .env.example .env
${EDITOR} .env
```

:::caution
Ensure that you do **NOT** include any secrets in the `.env.example` file, as it could accidentally be shared in your Git repository.
:::

## Register for RLN membership

The RLN membership is your access key to The Waku Network. Its registration is done on-chain, allowing your `nwaku` node to send messages decentralised and privately, respecting some rate limits. Other peers won't relay messages that exceed the rate limit.

This command registers your membership and saves it in the `keystore/keystore.json` file. You should have Docker running at this step:

```shell
./register_rln.sh
```

:::tip
If you only want to relay traffic without sending messages to the network, you don't need to register for RLN membership.
:::

## Run the node

Launch all the processes: `nwaku` node, database for storing messages, and Grafana for metrics with the following command. Your RLN membership is loaded into `nwaku` under the hood:

```shell
docker-compose up -d
```

View the logs of the node to confirm that it is running correctly:

```shell
docker-compose logs -f nwaku
```

## Monitor the node

Visit [http://localhost:3000/d/yns_4vFVk/nwaku-monitoring](http://localhost:3000/d/yns_4vFVk/nwaku-monitoring) to view your node metrics in real time.

![nwaku compose dashboard](/img/nwaku-compose-dashboard.png)

:::tip
To access Grafana from outside your machine, remove `127.0.0.1` and open the port. Consider setting up a password for Grafana to ensure security.
:::

## Interact with the node

Your `nwaku` node provides a [REST API](https://waku-org.github.io/waku-rest-api/) on port `8645` for interacting with it:

```shell
# Get nwaku version
curl --location 'http://127.0.0.1:8645/debug/v1/version'

# Get nwaku info
curl --location 'http://127.0.0.1:8645/debug/v1/info'
```

Send a message to a `contentTopic`, which all subscribers will receive. Please note that the `payload` is encoded in `base64`.

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

:::tip
If you encounter issues running your node or require assistance with anything, please visit the [#node-help channel](https://discord.com/channels/1110799176264056863/1216748184592711691) on our Discord.
:::

:::tip Congratulations!
You have successfully started a `nwaku` node with `RLN` enabled using Docker Compose. Have a look at the [Node Configuration Examples](/guides/nwaku/configure-nwaku) and [Advanced Configuration](https://github.com/waku-org/nwaku-compose/blob/master/ADVANCED.md) guides to learn how to configure `nwaku` for different use cases.
:::
