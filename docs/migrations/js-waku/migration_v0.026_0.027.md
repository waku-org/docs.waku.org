# Migrating to Waku v0.027

A migration guide for refactoring your application code from Waku v0.026 to v0.027.

## Table of Contents

- [Migrating to Waku v0.027](#migrating-to-waku-v0027)
  - [Table of Contents](#table-of-contents)
  - [Network Configuration](#network-configuration)
    - [Default Network Configuration](#default-network-configuration)
    - [Static Sharding](#static-sharding)
    - [Auto Sharding](#auto-sharding)
  - [Pubsub Topic Configuration](#pubsub-topic-configuration)
  - [Removed APIs](#removed-apis)
  - [Type Changes](#type-changes)
  - [Internal/Private Utility Function Changes](#internalprivate-utility-function-changes)

## Network Configuration

The way to configure network settings for a Waku node has been simplified. The new NetworkConfig type only allows for Static Sharding or Auto Sharding.

### Default Network Configuration

If no network configuration is provided when creating a Light Node, The Waku Network configuration will be used by default.

**Before**
```typescript
import { createLightNode } from "@waku/sdk";

const waku = await createLightNode();
// This would use the default pubsub topic, that was, `/waku/2/default-waku/proto`
```

**After**
```typescript
import { createLightNode } from "@waku/sdk";

const waku = await createLightNode();
// This will now use The Waku Network configuration by default:
// { clusterId: 1, shards: [0,1,2,3,4,5,6,7] }
```

### Static Sharding

**Before**
```typescript
import { createLightNode } from "@waku/sdk";

const waku = await createLightNode({
  shardInfo: {
    clusterId: 1,
    shards: [0, 1, 2, 3]
  }
});
```

**After**
```typescript
import { createLightNode } from "@waku/sdk";

const waku = await createLightNode({
  networkConfig: {
    clusterId: 1,
    shards: [0, 1, 2, 3]
  }
});
```


### Auto Sharding

**Before**
```typescript
import { createLightNode } from "@waku/sdk";

const waku = await createLightNode({
  shardInfo: {
    clusterId: 1,
    contentTopics: ["/my-app/1/notifications/proto"]
  }
});
```

**After**
```typescript
import { createLightNode } from "@waku/sdk";

const waku = await createLightNode({
  networkConfig: {
    clusterId: 1,
    contentTopics: ["/my-app/1/notifications/proto"]
  }
});
```

## Pubsub Topic Configuration

Named pubsub topics are no longer supported. You must use either Static Sharding or Auto Sharding to configure pubsub topics.

**Before**
```typescript
import { createLightNode } from "@waku/sdk";

const waku = await createLightNode({
  pubsubTopics: ["/waku/2/default-waku/proto"]
});
```

**After**

Use Static Sharding:
```typescript
import { createLightNode } from "@waku/sdk";

const waku = await createLightNode({
  networkConfig: {
    clusterId: 1,
    shards: [0, 1, 2, 3, 4, 5, 6, 7]
  }
});
```

Or use Auto Sharding:
```typescript
import { createLightNode } from "@waku/sdk";

const waku = await createLightNode({
  networkConfig: {
    clusterId: 1,
    contentTopics: ["/your-app/1/default/proto"]
  }
});
```

## Removed APIs

The following APIs have been removed:

- ApplicationInfo type: Use `string` for application and version in `NetworkConfig` instead.
- `shardInfo` option in `createLightNode`: Use `networkConfig` instead.
- `pubsubTopics` option in `createLightNode`: Use `networkConfig` with Static Sharding or Auto Sharding instead.

If you were using `ApplicationInfo` before, you should now use `ContentTopicInfo` (Auto Sharding) and specify your application and version in the content topic `string`.

**Before**
```typescript
import { createLightNode } from "@waku/sdk";

const waku = await createLightNode({
  shardInfo: {
    clusterId: 1,
    application: "my-app",
    version: "1"
  }
});
```

**After**
```typescript
import { createLightNode } from "@waku/sdk";

const waku = await createLightNode({
  networkConfig: {
    clusterId: 1,
    contentTopics: ["/my-app/1/default/proto"]
  }
});
```

## Type Changes

- `ShardingParams` has been removed. Use `NetworkConfig` instead.
- `NetworkConfig` is now defined as `StaticSharding` | `AutoSharding`.
- `StaticSharding` is equivalent to the previous `ShardInfo`.
- `AutoSharding` is equivalent to the previous `ContentTopicInfo`.

## Internal/Private Utility Function Changes

Several utility functions have been updated or added:

- `ensureShardingConfigured` has been removed. Use `derivePubsubTopicsFromNetworkConfig` instead.
- New function `derivePubsubTopicsFromNetworkConfig` has been added to derive pubsub topics from the network configuration.
- `shardInfoToPubsubTopics` now accepts `Partial<NetworkConfig>` instead of `Partial<ShardingParams>`.
- New function `pubsubTopicsToShardInfo` has been added to convert pubsub topics to a ShardInfo object.

If you were using any of these utility functions directly, you'll need to update your code accordingly.

**Before**
```typescript
import { ensureShardingConfigured } from "@waku/utils";

const result = ensureShardingConfigured(shardInfo);
```

**After**
```typescript
import { derivePubsubTopicsFromNetworkConfig } from "@waku/utils";

const pubsubTopics = derivePubsubTopicsFromNetworkConfig(networkConfig);
```
Note: The default `NetworkConfig` for The Waku Network is now `{ clusterId: 1, shards: [0,1,2,3,4,5,6,7] }.`
