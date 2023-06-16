---
title: Node Configuration Methods
---

Waku nodes can be configured using a combination of the following methods:

1. Command line options and flags
2. Environment variables (recommended)
3. [TOML](https://toml.io/) configuration file (currently the only supported format)
4. Default values

:::info
Note the precedence order: Each configuration method overrides the one below it (e.g., command line options override environment variables and configuration files).
:::

## Command Line Options

Node configuration is primarily done using command line options, which override other methods. Specify [configuration options](/guides/reference/node-config-options) by providing them in this format after the binary name:

```bash
wakunode2 --tcp-port=65000
```

When running your node with Docker, provide the command line options after the image name in this format:

```bash
docker run statusteam/nim-waku --tcp-port=65000
```

## Environment Variables

Nodes can be configured using environment variables by prefixing the variable name with `WAKUNODE2_` and using the configuration option in [SCREAMING_SNAKE_CASE](https://en.wiktionary.org/wiki/screaming_snake_case) format.

To set the `tcp-port` configuration, the `wakunode2` binary should be called in this format:

```bash
WAKUNODE2_TCP_PORT=65000 wakunode2
```

When running your node with Docker, start the node using the `-e` command option:

```bash
docker run -e "WAKUNODE2_TCP_PORT=65000" statusteam/nim-waku
```

:::info
This is the second configuration method in order of precedence. [Command line options](#command-line-options) override environment variables.
:::

## Configuration File

Nodes can be configured using a configuration file following the [TOML](https://toml.io/en/) format:

```toml title="TOML Config File" showLineNumbers
log-level = "DEBUG"
tcp-port = 65000
```

The `config-file` [configuration option](/guides/reference/node-config-options) lets you specify the configuration file path:

```bash
wakunode2 --config-file=[TOML CONFIGURATION FILE]
```

You can also specify the configuration file via environment variables:

```bash
# Using environment variables
WAKUNODE2_CONFIG_FILE=[TOML CONFIGURATION FILE] wakunode2

# Using environment variables with Docker
docker run -e "WAKUNODE2_CONFIG_FILE=[TOML CONFIGURATION FILE]" statusteam/nim-waku
```

:::info
This is the third configuration method in order of precedence. [Command line options](#command-line-options) and [environment variables](#environment-variables) override configuration files.
:::

## Configuration Default Values

The default configuration is used if no other options are specified. To see the default values of all [configuration options](/guides/reference/node-config-options), run `wakunode2 --help`:

```bash
$ wakunode2 --help
Usage: 

wakunode2 [OPTIONS]...

The following options are available:

 --config-file             Loads configuration from a TOML file (cmd-line parameters take precedence).
 --tcp-port                TCP listening port. [=60000].

<...>
```

:::tip
To explore the available node configuration options, please refer to the [Node Configuration Options](/guides/reference/node-config-options) guide.
:::