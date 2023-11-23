---
title: Run Nwaku in a Docker Container
hide_table_of_contents: true
---

This guide provides detailed steps to build and run a `nwaku` node in a Docker container. If you prefer a pre-configured setup with a monitoring dashboard, see the [Run Nwaku with Docker Compose](/guides/nwaku/run-docker-compose) guide.

## Prerequisites

Ensure [Docker](https://www.docker.com/) is installed on your system using the appropriate instructions provided in the [Docker documentation](https://docs.docker.com/engine/install/).

## Get Docker Image

The Nwaku Docker images are available on the Docker Hub public registry under the [statusteam/nim-waku](https://hub.docker.com/r/statusteam/nim-waku) repository. Please visit [statusteam/nim-waku/tags](https://hub.docker.com/r/statusteam/nim-waku/tags) for images of specific releases.

You can also build the Docker image locally:

```bash
# Clone the repository
git clone --recurse-submodules https://github.com/waku-org/nwaku
cd nwaku

# Build docker image
make docker-image
```

## Run Docker Container

Run `nwaku` in a new Docker container:

```bash
docker run [OPTIONS] [IMAGE] [ARG...]
```

- `OPTIONS` are your selected [Docker options](https://docs.docker.com/engine/reference/commandline/run/#options)
- `IMAGE` is the image and tag you pulled from the registry or built locally
- `ARG...` is the list of arguments for your [node configuration options](/guides/nwaku/config-options)

Run `nwaku` using the most typical configuration:

```bash
docker run -i -t -p 60000:60000 -p 9000:9000/udp statusteam/nim-waku:v0.20.0 \
  --dns-discovery=true \
  --dns-discovery-url=enrtree://ANEDLO25QVUGJOUTQFRYKWX6P4Z4GKVESBMHML7DZ6YK4LGS5FC5O@prod.wakuv2.nodes.status.im \
  --discv5-discovery=true \
  --rpc-address=0.0.0.0 \
  --nat=extip:[YOUR PUBLIC IP] # or, if you are behind a nat: --nat=any
```

To find your public IP, use:

```bash
dig TXT +short o-o.myaddr.l.google.com @ns1.google.com | awk -F'"' '{ print $2}'
```

:::tip
We recommend using explicit port mappings (`-p`) when exposing ports accessible from outside the host (listening and discovery ports, API servers).
:::

:::tip Congratulations!
You have successfully built and started a `nwaku` node in a Docker container. Have a look at the [Node Configuration Examples](/guides/nwaku/configure-nwaku) guide to learn how to configure `nwaku` for different use cases.
:::
