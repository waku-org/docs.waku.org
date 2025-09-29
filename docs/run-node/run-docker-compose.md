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
- **Linea Sepolia RPC endpoint**: You can get a free endpoint from [Infura](https://www.infura.io/) or any other Linea Sepolia RPC provider.

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

Retrieve messages sent to a `contentTopic`. Please note that this query can be made to any `Store` node within the network:

```shell
curl --location 'http://127.0.0.1:8645/store/v1/messages?contentTopics=%2Fmy-app%2F2%2Fchatroom-1%2Fproto&pageSize=50&ascending=true' \
--header 'Accept: application/json'
```

:::tip
If you encounter issues running your node or require assistance with anything, please visit the - Visit the #help-desk channel on [Discord](https://discord.waku.org/).
:::

:::tip Congratulations!
You have successfully started a `nwaku` node with `RLN` enabled using Docker Compose. Have a look at the [Node Configuration Examples](/run-node/configure-nwaku) and [Advanced Configuration](https://github.com/waku-org/nwaku-compose/blob/master/ADVANCED.md) guides to learn how to configure `nwaku` for different use cases.
:::
