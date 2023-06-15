---
title: Run Nwaku in Docker Container
---

This guide provides detailed steps to build and run a `nwaku` node in a Docker container. If you prefer a pre-configured setup that includes a monitoring dashboard, see the [Run Nwaku with Docker Compose](/guides/nwaku/run-docker-compose) guide.

## Prerequisites

Ensure [Docker](https://www.docker.com/) is installed on your system using the appropriate instructions provided in the [Docker documentation](https://docs.docker.com/engine/install/). For example, you can use Docker's convenience script for installation:

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

## Get Docker Image

The Nwaku Docker images are available on the Docker Hub public registry under the [statusteam/nim-waku](https://hub.docker.com/r/statusteam/nim-waku) repository. Please visit [statusteam/nim-waku/tags](https://hub.docker.com/r/statusteam/nim-waku/tags) for images of specific releases.

To pull the latest image, use:

```bash
docker pull statusteam/nim-waku
```

You can also build the Docker image locally using:

```bash
# Clone the repository
git clone --recurse-submodules https://github.com/waku-org/nwaku
cd nwaku

# Build image using make
make docker-image

# Build image using docker build
docker build -t statusteam/nim-waku:latest .
```

## Run Docker Container

To run `nwaku` in a new Docker container, use:

```bash
docker run [OPTIONS] [IMAGE] [ARG...]
```

- `OPTIONS` are your selected [Docker options](https://docs.docker.com/engine/reference/commandline/run/#options)
- `IMAGE` is the image and tag you pulled from the registry or built locally
- `ARG...` is the list of `nwaku` arguments for your [chosen nwaku configuration](https://github.com/waku-org/nwaku/blob/master/docs/operators/how-to/configure.md)

:::tip
We recommend using explicit port mappings (`-p`) when exposing ports accessible from outside the host (libp2p listening ports, discovery, HTTP server).
:::

To run `nwaku` in a Docker container using the [default configuration](/guides/run-nwaku-node#run-the-node), use:

```bash
docker run -i -t -p 60000:60000 -p 8545:8545 statusteam/nim-waku
```