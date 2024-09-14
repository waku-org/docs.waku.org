---
title: Upgrade Instructions
hide_table_of_contents: true
sidebar_label: Upgrade Instructions
---

import { AccordionItem } from '@site/src/components/mdx'

If you are currently using Nwaku, running an old version and want to upgrade your node, please follow the below migration instructions for each target release newer than your current running version in ascending order.

For example, if you are interested in the version v0.32.0 and are currently running v0.30.0, follow the instructions for v0.31.0 and then the ones for v0.32.0

## Target Releases

<AccordionItem title="v0.32.0">

The `--protected-topic` CLI config was deprecated and is replaced by the new `--protected-shard` configuration. Instead of configuring `topic:public_key` you will now need to configure `shard:public_key`

For example, if you used to run your node with `--protected-topic="waku/2/rs/1/2:your_public_key"` you will need to replace this configuration for `--protected-shard="2:your_public_key"`

</AccordionItem>

<AccordionItem title="v0.31.0">
Named sharding was deprecated in this version. This means that pubsub topics will only be supported if they comply with the static sharding format: <code>/waku/2/rs/&lt;CLUSTER_ID&gt;/&lt;SHARD_ID&gt;</code><br /><br />

In order to migrate your existing application, you need to:

1. Make sure that your clients are sending messages to pubsub topics in the required format. Check that in your interactions with Nwaku's REST API or when using `js-waku`, the configured pubsub topics follow the static sharding format defined above.
2. When running a node with the `--pubsub-topic` CLI flag, the values provided should comply with the static sharding format.
3. If your application relies on nodes or clients that may not be updated immediately, keep your node on an older version while subscribing to both the current pubsub topic and the new pubsub topic that will comply with the static sharding format. In that case, you can keep backward compatibility for a migration period.

</AccordionItem>
