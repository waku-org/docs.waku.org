---
title: Node Configuration Methods
hide_table_of_contents: true
---

Waku nodes can be configured using a combination of the following methods:

1. Command line options and flags
2. Environment variables
3. TOML configuration files (currently the only supported format)
4. Default values

:::info
Take note of the precedence order: Each configuration method overrides the one below it (e.g., command line options override environment variables and configuration files).
:::

## Command line options

Node configuration is primarily done using command line options, which override other methods. Specify [configuration options](/guides/nwaku/config-options) by providing them in this format after the binary name:

```shell
./build/wakunode2 --tcp-port=65000
```

When running your node with Docker, provide the command line options after the image name in this format:

```shell
docker run statusteam/nim-waku --tcp-port=65000
```

## Environment variables

Nodes can be configured using environment variables by prefixing the variable name with `WAKUNODE2_` and using the configuration option in [SCREAMING_SNAKE_CASE](https://en.wiktionary.org/wiki/screaming_snake_case) format.

To set the `tcp-port` configuration, the `wakunode2` binary should be called in this format:

```shell
WAKUNODE2_TCP_PORT=65000 ./build/wakunode2
```

When running your node with Docker, start the node using the `-e` command option:

```shell
docker run -e "WAKUNODE2_TCP_PORT=65000" statusteam/nim-waku
```

:::info
This is the second configuration method in order of precedence. [Command Line Options](#command-line-options) override environment variables.
:::

## Configuration files

Nodes can be configured using a configuration file following the [TOML](https://toml.io/en/) format:

```toml title="TOML Config File" showLineNumbers
log-level = "DEBUG"
tcp-port = 65000
topic = ["/waku/2/default-waku/proto"]
metrics-logging = false
```

The `config-file` [configuration option](/guides/nwaku/config-options) lets you specify the configuration file path:

```shell
./build/wakunode2 --config-file=[TOML CONFIGURATION FILE]
```

You can also specify the configuration file via environment variables:

```shell
# Using environment variables
WAKUNODE2_CONFIG_FILE=[TOML CONFIGURATION FILE] ./build/wakunode2

# Using environment variables with Docker
docker run -e "WAKUNODE2_CONFIG_FILE=[TOML CONFIGURATION FILE]" statusteam/nim-waku
```

:::info
This is the third configuration method in order of precedence. [Command Line Options](#command-line-options) and [Environment Variables](#environment-variables) override configuration files.
:::

## Default configuration values

The default configuration is used when no other options are specified. By default, a `nwaku` node does the following:

- Generate a new `Node Key` and `PeerID`.
- Listen for incoming libp2p connections on the default TCP port (`60000`).
- Subscribe to the default Pub/Sub topic (`/waku/2/default-waku/proto`).
- Enable the `Relay` protocol for relaying messages.
- Enable the `Store` protocol as a client, allowing it to query peers for historical messages but not store any message itself.

To see the default values of all [configuration options](/guides/nwaku/config-options), run `wakunode2 --help`:

```shell
./build/wakunode2 --help
```

:::tip
To explore the available node configuration options, have a look at the [Node Configuration Options](/guides/nwaku/config-options) guide.
:::
