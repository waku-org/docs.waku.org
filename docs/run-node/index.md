---
title: Run a Waku Node
hide_table_of_contents: true
displayed_sidebar: runNode
---

Nwaku is a lightweight and robust Nim client for running a Waku node, equipped with tools to monitor and maintain a running node. Nwaku is highly configurable, enabling operators to select the [protocols](/learn/concepts/protocols) they want to support based on their needs, motivations, and available resources.

## Video Tutorial

<div class="video-container">
  <iframe class="yt-video" src="https://www.youtube.com/embed/fs0ynLk4z0I" title="How to run a Waku node using Nwaku Compose" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## Quick Start with Docker Compose (Recommended)

The easiest way to run a Waku node is using [Docker Compose](/run-node/run-docker-compose). This setup automatically configures:

- A `nwaku` node with [Relay](/learn/concepts/protocols#relay), [Store](/learn/concepts/protocols#store), and [RLN](/learn/concepts/protocols#rln-relay) protocols
- A simple web interface to send and receive messages
- Grafana dashboard for monitoring your node

### Prerequisites

- **Git**
- [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/)
- **Linea Sepolia RPC endpoint**: You can get a free endpoint from [Infura](https://www.infura.io/) or any other Linea Sepolia RPC provider.

:::info System Requirements
We recommend at least 2GB of RAM, especially if WSS is enabled. For a Relay-only node, 0.5GB of RAM is sufficient.
:::

### Get Started

```shell
# Clone the repository
git clone https://github.com/waku-org/nwaku-compose
cd nwaku-compose

# Configure your node
cp .env.example .env
# Edit .env with your settings

# Start your node
docker-compose up -d
```

For detailed setup instructions, see [Run Nwaku with Docker Compose](/run-node/run-docker-compose).

## Alternative Installation Methods

While Docker Compose is recommended, you can also:

- **[Run in Docker Container](/run-node/run-docker)** - For custom Docker deployments
- **[Build from Source](/run-node/build-source)** - Compile the latest nwaku code
- **[Download Binary](https://github.com/waku-org/nwaku/tags)** - Use precompiled releases

## Node Configuration

Once your node is running, you can:

- **[Configure Discovery](/run-node/configure-discovery)** - Set up peer discovery mechanisms
- **[Configure Your Node](/run-node/configure-nwaku)** - Customize protocols and settings
- **[Find Node Addresses](/run-node/find-node-address)** - Locate your node's network addresses

## Monitoring and Maintenance

- Access the Grafana dashboard at `http://localhost:3000` (if using Docker Compose)
- Use the [REST API](https://waku-org.github.io/waku-rest-api/) to interact with your node
- Check node health at `http://localhost:8645/health`

:::tip
Download the [Waku Node Operator Cheatsheet](/Waku-NodeOperator.pdf) for quick reference on operating your node.
:::

## Get Help

If you encounter issues or need assistance:

- Visit the #help-desk channel on [Discord](https://discord.waku.org/)
- Check the [FAQ](/run-node/faq) for common questions
- Review the [upgrade instructions](/run-node/upgrade-instructions) when updating your node