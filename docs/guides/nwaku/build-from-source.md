---
title: Build Nwaku from Source
---

This guide provides detailed steps to build a `nwaku` node from the source to access the latest development version or a specific commit of nwaku. If you prefer a more stable version, [download a pre-compiled binary](https://github.com/waku-org/nwaku/tags) instead.

## Prerequisites

- 2GB of RAM
- [Git](https://git-scm.com/) or [GitHub Desktop](https://desktop.github.com/)
- [Nim](https://nim-lang.org/install.html) installed on your system

## Install Dependencies

To clone and build nwaku, you will need the standard developer tools, including a C compiler, Make, Bash, and Git.

#### Linux

To install the dependencies on common Linux distributions, use:

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs>
<TabItem value="debian" label="Debian and Ubuntu">

```bash
sudo apt-get install build-essential git
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```bash
dnf install @development-tools
```

</TabItem>
<TabItem value="arch" label="Arch Linux">

```bash
# Using your favorite AUR helper
[AUR HELPER] -S base-devel
```

</TabItem>
</Tabs>

#### macOS

If you use [Homebrew](https://brew.sh/) to manage packages, use:

```bash
brew install cmake
```

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

To build the `nwaku` binary, use:

```bash
make wakunode2
```

The first `make` invocation updates to all Git submodules. After each `git pull`, run `make update` to keep the submodules updated in the future.

```bash
make update wakunode2
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
- [Run Nwaku in Docker Container](/guides/nwaku/run-docker)
- [Run Nwaku with Docker Compose](/guides/nwaku/run-docker-compose)

## Run Test Suite

To run the tests for both `Waku v1` and `Waku v2`, use:

```bash
make test
```