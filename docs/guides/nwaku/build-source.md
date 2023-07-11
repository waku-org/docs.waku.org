---
title: Build Nwaku from Source
---

This guide provides detailed steps to build a `nwaku` node from the source code to access the latest development version or a specific commit or release of `nwaku`. For your convenience, [download a pre-compiled binary](https://github.com/waku-org/nwaku/tags) instead.

:::info
- A minimum of 2GB of RAM is required to build `nwaku`.
- Nwaku is available for Linux and macOS, with experimental Windows support.
:::

## Prerequisites

To build `nwaku`, you need the standard developer tools, including a C compiler, GNU Make, Bash, Git, and PostgreSQL client library.

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs>
<TabItem value="debian" label="Debian and Ubuntu">

```bash
sudo apt-get install build-essential git libpq5
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```bash
sudo dnf install @development-tools git libpq-devel
```

</TabItem>
<TabItem value="arch" label="Arch Linux">

```bash
# Using your favorite AUR helper
sudo [AUR HELPER] -S base-devel git postgresql-libs
```

</TabItem>
<TabItem value="mac" label="MacOS (Homebrew)">

```bash
brew install cmake git postgresql@15
# Create a symbolic link to libpq.5.dylib in /usr/local/lib/
sudo mkdir -p /usr/local/lib/
sudo ln -s /opt/homebrew/opt/postgresql@15/lib/libpq.5.dylib /usr/local/lib/libpq.dylib
```

</TabItem>
</Tabs>

## Clone the Repository

Get the source code from the GitHub repository. The default branch is `master`, the release candidate for major updates.

```bash
git clone https://github.com/waku-org/nwaku
cd nwaku
```

:::tip
You can use `git tag -l` to check specific version tags.
:::

## Build the Binary

Build the `nwaku` binary:

```bash
make wakunode2
```

The first `make` invocation updates to all Git submodules. After each `git pull`, run `make update` to keep the submodules updated in the future.

```bash
make update
```

## Run the Binary

Nwaku will create the `wakunode2` binary in the `./build/` directory.

```bash
# Run with default configuration
./build/wakunode2

# See available command line options
./build/wakunode2 --help
```

To learn more about running nwaku, please refer to:

- [Run a Nwaku Node](/guides/run-nwaku-node#run-the-node)
- [Run Nwaku in a Docker Container](/guides/nwaku/run-docker)
- [Run Nwaku with Docker Compose](/guides/nwaku/run-docker-compose)
- [Node Configuration Methods](/guides/reference/node-config-methods)

## Run Test Suite

Run the tests for Waku:

```bash
make test
```