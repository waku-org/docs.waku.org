---
title: Quick Start
---

Please refer to the [Installation guide](/guides/js-waku/#installation) for steps on adding `js-waku` to your project using a package manager or CDN.

:::tip
You can use the `stop()` function to stop a running node.
:::

:::info
Setting the `defaultBootstrap` option to `true` allows your node to connect to a set of pre-defined nodes.
:::

To ensure the node has connected to peers on the Waku Network, use the `waitForRemotePeer()` function:

```js
import { waitForRemotePeer } from "@waku/sdk";

// Start the node
await node.start();

// Wait for a successful peer connection
await waitForRemotePeer(node);
```

The `protocols` option allows you to specify the [protocols](/overview/concepts/protocols) that the remote peers should have enabled:

```js
// Wait for peer connections with specific protocols
await waitForRemotePeer(node, ["filter", "lightpush"]);
```

:::tip Congratulations!
You have successfully added decentralized communication features to your application using `js-waku`.
:::