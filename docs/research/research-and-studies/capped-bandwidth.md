---
title: Capped Bandwidth in Waku
---

This post explains i) why The Waku Network requires a capped bandwidth per shard and ii) how to achieve it by rate limiting with RLN v2.

## Problem

First of all, let's begin with the terminology. We have talked in the past about "predictable" bandwidth, but a better name would be "capped" bandwidth. This is because it is totally fine that the waku traffic is not predictable, as long as it is capped. And it has to be capped because otherwise, no one will be able to run a node.

Since we aim that everyone can run a full waku node (at least subscribed to a single shard) it is of paramount importance that the bandwidth requirements (up/down) are i) reasonable to run with a residential internet connection in every country and ii) limited to an upper value, aka capped. If the required bandwidth to stay up to date with a topic is higher than what the node has available, then it will start losing messages and won't be able to stay up to date with the topic messages. And not to mention the problems this will cause to other services and applications being used by the user.

The main problem is that one can't just choose the bandwidth it allocates to `relay`. One could set the maximum bandwidth willing to allocate to `store` but this is not how `relay` works. The required bandwidth is not set by the node, but by the network. If a pubsub topic `a` has a traffic of 50 Mbps (which is the sum of all messages being sent multiplied by its size, times the D_out degree), then if a node wants to stay up to date in that topic, and relay traffic in it, then it will require 50 Mbps. There is no thing such as "partially contributing" to the topic (with eg 25Mbps) because then you will be losing messages, becoming an unreliable peer and potentially be disconnected. The network sets the pace.

So waku needs an upper boundary on the in/out bandwidth (mbps) it consumes. Just like apps have requirements on cpu and memory, we should set a requirement on bandwidth, and then guarantee that if you have that bandwidth, you will be able to run a node without any problem. And this is the tricky part. This metric is Waku's constraint, similar to the gas-per-block limit in blockchains.

## Previous Work

Quick summary of the evolution to solve this problem:
* Waku started with no rate-limiting mechanism. The network was subject to DoS attacks.
* RLN v1 was introduced, which allowed to rate-limit in a privacy-preserving and anonymous way. The rate limit can be configured to 1 message every `y` seconds. However, this didn't offer much granularity. A low `y` would allow too many messages and a high `y` would make the protocol unusable (impossible to send two messages in a row).
* RLN v2 was introduced, which allows to rate-limit each user to `x` messages every `y` seconds. This offers the granularity we need. It is the current solution deployed in The Waku Network.

## Current Solution (RLN v2)

The current solution to this problem is the usage of RLN v2, which allows to rate-limit `x` messages every `y` seconds. On top of this, the introduction of [WAKU2-RLN-CONTRACT](https://github.com/waku-org/specs/blob/master/standards/core/rln-contract.md) enforces a maximum amount of messages that can be sent to the network per `epoch`. This is achieved by limiting the amount of memberships that can be registered. The current values are:
* `R_{max}`: 160000 mgs/epoch
* `r_{max}`: 600 msgs/epoch
* `r_{min}`: 20 msgs/epoch

In other words, the contract limits the amount of memberships that can be registered from `266` to `8000` depending on which rate limit users choose.

On the other hand [64/WAKU2-NETWORK](https://github.com/vacp2p/rfc-index/blob/main/waku/standards/core/64/network.md) states that:
* `rlnEpochSizeSec`: 600. Meaning the epoch size is 600 seconds.
* `maxMessageSize`: 150KB. Meaning the maximum message size that is allowed. Note: recommended average of 4KB.

Putting this all together and assuming:
* Messages are sent uniformly distributed.
* All users totally consumes its rate-limit.

We can expect the following message rate and bandwidth for the whole network:
* A traffic of `266 msg/second` on average (`160000/600`)
* A traffic of `6 MBps` on average (266 * 4KB * 6), where `4KB` is the average message size and `6` is the average gossipsub D-out degree.

And assuming a uniform distribution of traffic among 8 shards:
* `33 msg/second` per shard.
* `0.75 MBps` per shard. 
