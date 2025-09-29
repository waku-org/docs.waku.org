---
title: Build Nwaku from Source
hide_table_of_contents: true
displayed_sidebar: runNode
---

This guide provides detailed steps to build a `nwaku` node from the source code to access the latest development version or a specific commit or release of `nwaku`. For your convenience, you may want to [download a pre-compiled binary](https://github.com/waku-org/nwaku/tags) instead.

:::info
- A minimum of 2GB of RAM is required to build `nwaku`.
- Nwaku is available for Linux and macOS, with experimental Windows support.
:::

## Prerequisites

To build `nwaku`, you need the standard developer tools, including a C compiler, GNU Make, Bash, Git, Rustup, and PostgreSQL client library.

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs>
<TabItem value="debian" label="Debian and Ubuntu">

```shell
sudo apt-get install build-essential git libpq5 jq
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source "$HOME/.cargo/env"
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```shell
sudo dnf install @development-tools git libpq-devel which
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

</TabItem>
<TabItem value="arch" label="Arch Linux">

```shell
# Using your favoured AUR helper
sudo [AUR HELPER] -S base-devel git postgresql-libs
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

</TabItem>
<TabItem value="mac" label="MacOS (Homebrew)">

```shell
brew install cmake git postgresql@15 rustup-init
# Create a symbolic link to libpq.5.dylib in /usr/local/lib/
sudo mkdir -p /usr/local/lib/
sudo ln -s /opt/homebrew/opt/postgresql@15/lib/libpq.5.dylib /usr/local/lib/libpq.dylib
```

</TabItem>
</Tabs>

## Clone the repository

Get the source code from the GitHub repository. The default branch is `master`, the release candidate for major updates.

```shell
git clone https://github.com/waku-org/nwaku
cd nwaku
```

:::tip
You can use `git tag -l` to check specific version tags.
:::

## Build the binary

Build the `nwaku` binary:

```shell
make wakunode2
```

The first `make` invocation updates to all Git submodules. After each `git pull`, run `make update` to keep the submodules updated in the future.

```shell
make update
```

## Run the binary

Nwaku will create the `wakunode2` binary in the `./build/` directory.

```shell
# Run with default configuration
./build/wakunode2

# See available command line options
./build/wakunode2 --help
```

To learn more about running nwaku, have a look at these guides:

- [Run a Nwaku Node](/run-node/)
- [Run Nwaku in a Docker Container](/run-node/run-docker)
- [Run Nwaku with Docker Compose](/run-node/run-docker-compose)
- [Node Configuration Methods](/run-node/config-methods)

## Run test suite

Run the tests for Waku:

```shell
make test
```

:::tip Congratulations!
You have successfully built the `nwaku` binary from the source code. Have a look at the [Node Configuration Examples](/run-node/configure-nwaku) guide to learn how to configure `nwaku` for different use cases.
:::
