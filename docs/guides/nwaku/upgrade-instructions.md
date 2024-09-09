---
title: Upgrade Instructions
hide_table_of_contents: true
sidebar_label: Upgrade Instructions
---

import { AccordionItem } from '@site/src/components/mdx'

If you are currently using Nwaku, running an old version and want to upgrade your node, please follow the below migration instructions for each release newer than your current running version

<AccordionItem title="v0.31.0">
Named sharding was deprecated in this version. This means that pubsub topics will only be supported if they comply with the static sharding format: <code>/waku/2/rs/&lt;CLUSTER_ID&gt;/&lt;SHARD_ID&gt;</code><br /><br />

In order to migrate your existing application, you need to:

1. Make sure that your clients are sending messages to pubsub topics in the required format. Check that in your interactions with Nwaku's REST API or when using `js-waku`, the configured pubsub topics follow the static sharding format defined above.
2. When running a node with the `--pubsub-topic` CLI flag, the values provided should comply with the static sharding format.
3. If your application relies on nodes or clients that may not be updated immediately, keep your node on an older version while subscribing to both the current pubsub topic and the new pubsub topic that will comply with the static sharding format. In that case, you can keep backward compatibility for a migration period.

</AccordionItem>
