---
title: Run Nwaku in a Docker Container
hide_table_of_contents: true
---

This guide provides detailed steps to build and run a `nwaku` node in a Docker container. If you prefer a pre-configured setup with a monitoring dashboard, see the [Run Nwaku with Docker Compose](/guides/nwaku/run-docker-compose) guide.

## Prerequisites

Ensure [Docker](https://www.docker.com/) is installed on your system using the appropriate instructions provided in the [Docker documentation](https://docs.docker.com/engine/install/).

:::info
We recommend running a `nwaku` node with at least 2GB of RAM, especially if `WSS` is enabled. If running just a `Relay` node, 0.5GB of RAM is sufficient.
:::

## Get Docker image

The Nwaku Docker images are available on the Docker Hub public registry under the [wakuorg/nwaku](https://hub.docker.com/r/wakuorg/nwaku) repository. Please visit [wakuorg/nwaku/tags](https://hub.docker.com/r/wakuorg/nwaku/tags) for images of specific releases.

## Build Docker image

You can also build the Docker image locally:

```shell
# Clone the repository
git clone --recurse-submodules https://github.com/waku-org/nwaku
cd nwaku

# Build docker image
make docker-image
```

## Run Docker container

Run `nwaku` in a new Docker container:

```shell
docker run [OPTIONS] [IMAGE] [ARG...]
```

- `OPTIONS` are your selected [Docker options](https://docs.docker.com/engine/reference/commandline/run/#options)
- `IMAGE` is the image and tag you pulled from the registry or built locally
- `ARG...` is the list of arguments for your [node configuration options](/guides/nwaku/config-options)

Run `nwaku` using the most typical configuration:

```shell
docker run -i -t -p 60000:60000 -p 9000:9000/udp wakuorg/nwaku:v0.32.0 \
  --dns-discovery=true \
  --dns-discovery-url=enrtree://AIRVQ5DDA4FFWLRBCHJWUWOO6X6S4ZTZ5B667LQ6AJU6PEYDLRD5O@sandbox.waku.nodes.status.im \
  --discv5-discovery=true \
  --nat=extip:[YOUR PUBLIC IP] # or, if you are behind a nat: --nat=any
```

To find your public IP, use:

```shell
dig TXT +short o-o.myaddr.l.google.com @ns1.google.com | awk -F'"' '{ print $2}'
```

For more detailed information about all possible configurations, please run

```shell
docker run -t wakuorg/nwaku:v0.32.0 --help
```

:::info
Note that running a node in The Waku Network (--cluster-id=1) requires a special set of configurations and therefore, it is recommended to run in this case with docker compose
:::

:::info
We recommend using explicit port mappings (`-p`) when exposing ports accessible from outside the host (listening and discovery ports, API servers).
:::

:::tip
If you encounter issues running your node or require assistance with anything, please visit the [#node-help channel](https://discord.com/channels/1110799176264056863/1216748184592711691) on our Discord.
:::

:::tip Congratulations!
You have successfully built and started a `nwaku` node in a Docker container. Have a look at the [Node Configuration Examples](/guides/nwaku/configure-nwaku) guide to learn how to configure `nwaku` for different use cases.
:::
