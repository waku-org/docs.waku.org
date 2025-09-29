---
title: Nim
hide_table_of_contents: true
displayed_sidebar: build
---

Nwaku provides a native Nim implementation of the Waku protocol, allowing developers to build Waku native applications directly in Nim.
This guide demonstrates how to use the Waku library API to create and configure Waku nodes.

## Installation

To use the Waku Nim SDK, you'll need to:

1. Install [Nim](https://nim-lang.org/install.html) (version 2.2.4 or higher)
2. Add the nwaku library to your project

:::warning
Waku does not currently work with Nimble package manager. You can track progress on Nimble support in [PR #3564](https://github.com/waku-org/nwaku/pull/3564).
:::

```bash
# Install nwaku as a dependency
nimble install waku
```

## Creating a Waku Node

Waku uses blockchain smart contract to DoS protect nodes in the network.
The protocol is called [RLN relay](/learn/concepts/protocols#rln-relay).

To connect to the Waku Network, you'll need a Linea Sepolia RPC endpoint.

Let's create a simple CLI that takes an RPC URL as argument:

`your_waku_app.nim`
```nim
import std/options
import chronos, results, confutils, confutils/defs
import waku

type CliArgs = object
  ethRpcEndpoint* {.
    defaultValue: "",
    desc: "ETH RPC Endpoint for RLN support"
  .}: string

when isMainModule:
  let args = CliArgs.load()

  if args.ethRpcEndpoint == "":
    echo "Please provide a Linea Sepolia RPC endpoint to connect to the Waku Network"
    quit(QuitFailure)

  echo "Starting Waku node with RLN..."

  # Create configuration with RLN enabled
  let config = NodeConfig.init(
    ethRpcEndpoints = @[args.ethRpcEndpoint]
  )

  # Create the node
  let node = (waitFor createNode(config)).valueOr:
    echo "Failed to create node: ", error
    quit(QuitFailure)

  echo "Waku node created successfully!"

  # Start the node
  (waitFor startWaku(addr node)).isOkOr:
    echo "Failed to start node: ", error
    quit(QuitFailure)

  echo "Node started successfully with RLN enabled!"
  runForever()
```

### Running the CLI

To run your CLI:

```bash
nim c -r your_waku_app.nim --ethRpcEndpoint="https://linea-sepolia.infura.io/v3/some-api-key"
```

## Blockchain-less Development Mode

For development and testing purposes, you can create a Waku node without blockchain integration.
This mode wil not have DoS protection but allows you to experiment with the Waku protocol without needing an RPC endpoint.

`your_waku_app.nim`
```nim
import std/options
import chronos, results
import waku

when isMainModule:
  echo "Starting Waku node in development mode..."

  # Create a basic configuration without RLN
  let config = NodeConfig.init(
    wakuConfig = WakuConfig.init(
      entryNodes = @[],  # Add ENRs of bootstrap nodes if needed
      clusterId = 42      # Use a custom cluster ID for your test network
    )
  )

  # Create the node
  let node = (waitFor createNode(config)).valueOr:
    echo "Failed to create node: ", error
    quit(QuitFailure)

  echo "Waku node created successfully!"

  # Start the node
  (waitFor startWaku(addr node)).isOkOr:
    echo "Failed to start node: ", error
    quit(QuitFailure)

  echo "Node started in development mode!"
  runForever()
```

### Running in Development Mode

```bash
nim c -r your_waku_app.nimyour_waku_app.nim
```

## Configuration Options

### With Custom Bootstrap Nodes

You can specify bootstrap nodes to connect to specific networks:

```nim
let config = NodeConfig.init(
  wakuConfig = WakuConfig.init(
    entryNodes = @[
      "enr:-P-4QG_d...",  # Replace with actual ENR
      "/ip5/1.2..."       # Replace with actual multiaddr
    ],
    clusterId = 42
  )
)
```

## API Status

:::info
The Waku Nim library API is under active development. Currently, node creation and configuration are supported. Additional API verbs for message handling, subscriptions, and protocol interactions are work in progress.
:::

## Examples and Resources

- [nwaku examples](https://github.com/waku-org/nwaku/tree/master/examples) - Official examples repository
- [waku_api.nim](https://github.com/waku-org/nwaku/blob/master/examples/waku_api.nim) - Library API example
- [nwaku repo](https://github.com/waku-org/nwaku) - nwaku GitHub Repository

## Get Help

- Visit the #help-desk channel on [Discord](https://discord.waku.org/)
- Check the [nwaku GitHub repository](https://github.com/waku-org/nwaku) for issues and updates
- Review the [protocol documentation](/learn/concepts/protocols) to understand Waku's capabilities