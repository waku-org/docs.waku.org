---
title: Run Nwaku with Docker Compose
---

`nwaku-compose` is a ready-to-use `docker-compose` setup that runs a nwaku node and monitors it with already configured [Prometheus](https://prometheus.io/) and [Grafana](https://grafana.com/) instances.

This guide provides detailed steps to build, configure, run, and monitor a `nwaku` node with [nwaku-compose](https://github.com/alrevuelta/nwaku-compose).

## Prerequisites

- [Git](https://git-scm.com/) or [GitHub Desktop](https://desktop.github.com/)
- [Docker](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Clone the Repository

```bash
git clone https://github.com/alrevuelta/nwaku-compose
cd nwaku-compose
```

## Configure the Setup

Modify the `docker-compose.yml` file to customize your node's configuration, including the [Docker image](https://hub.docker.com/r/statusteam/nim-waku/tags) and [nwaku arguments](/guides/reference/node-config-options).

## Run Docker Compose

Export your public IP (`MY_EXT_IP`) and run `nwaku-compose`:

```bash
export MY_EXT_IP=$(dig TXT +short o-o.myaddr.l.google.com @ns1.google.com | awk -F'"' '{ print $2}')
docker-compose up -d
```

## Monitor the Node

Visit <http://localhost:3000/d/yns_4vFVk/nwaku-monitoring?orgId=1> to view your node metrics in real-time.

![nwaku compose dashboard](/img/nwaku-compose-dashboard.png)

:::tip
To access Grafana from outside your machine, remove `127.0.0.1` and open the port. Consider setting up a password for Grafana to ensure security.
:::