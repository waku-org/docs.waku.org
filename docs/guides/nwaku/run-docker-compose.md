---
title: Run Nwaku with Docker Compose
---

`nwaku-compose` is a ready-to-use Docker Compose setup that runs a nwaku node and monitors it with already configured [Prometheus](https://prometheus.io/) and [Grafana](https://grafana.com/) instances.

This guide provides detailed steps to build, configure, run, and monitor a `nwaku` node with [nwaku-compose](https://github.com/waku-org/nwaku-compose).

## Prerequisites

- [Git](https://git-scm.com/) or [GitHub Desktop](https://desktop.github.com/)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Clone the Repository

```bash
git clone https://github.com/waku-org/nwaku-compose
cd nwaku-compose
```

## Configure the Setup

Modify the `run_node.sh` file to customise your [node's configuration](/guides/reference/node-config-options) and `docker-compose.yml` to specify particular [Docker image](https://hub.docker.com/r/statusteam/nim-waku/tags) tag.

## Run Docker Compose

Spin up the containers using `docker-compose`:

```bash
docker-compose up -d
```

## Monitor the Node

Visit <http://localhost:3000/d/yns_4vFVk/nwaku-monitoring?orgId=1> to view your node metrics in real-time.

![nwaku compose dashboard](/img/nwaku-compose-dashboard.png)

:::tip
To access Grafana from outside your machine, remove `127.0.0.1` and open the port. Consider setting up a password for Grafana to ensure security.
:::

:::tip Congratulations!
You have successfully started a `nwaku` node using Docker Compose. Have a look at the [Nwaku Configuration Examples](/guides/nwaku/configure-nwaku) guide to learn how to configure `nwaku` for different use cases.
:::