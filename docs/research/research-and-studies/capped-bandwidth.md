---
title: Capped Bandwidth in Waku
---

This issue explains i) why The Waku Network requires a capped bandwidth per shard and ii) how to solve it by rate limiting with RLN by daily requests (instead of every x seconds), which would require RLN v2, or some modifications in the current circuits to work. It also explains why the current rate limiting RLN approach (limit 1 message every x seconds) is not practical to solve this problem.

## Problem

First of all, lets begin with the terminology. We have talked in the past about "predictable" bandwidth, but a better name would be "capped" bandwidth. This is because it is totally fine that the waku traffic is not predictable, as long as its capped. And it has to be capped because otherwise no one will be able to run a node.

Since we aim that everyone is able to run a full waku node (at least subscribed to a single shard) its of paramount importance that the bandwidth requirements (up/down) are i) reasonable to run with a residential internet connection in every country and ii) limited to an upper value, aka capped. If the required bandwidth to stay up to date with a topic is higher than what the node has available, then it will start losing messages and won't be able to stay up to date with the topic messages. And not to mention the problems this will cause to other services and applications being used by the user.

The main problem is that one can't just chose the bandwidth it allocates to `relay`. One could set the maximum bandwidth willing to allocate to `store` but this is not how `relay` works. The required bandwidth is not set by the node, but by the network. If a pubsub topic `a` has a traffic of 50 Mbps (which is the sum of all messages being sent multiplied by its size, times the D_out degree), then if a node wants to stay up to date in that topic, and relay traffic in it, then it will require 50 Mbps. There is no thing such as "partially contribute" to the topic (with eg 25Mbps) because then you will be losing messages, becoming an unreliable peer. The network sets the pace.

So waku needs an upper boundary on the in/out bandwidth (mbps) it consumes. Just like apps have requirements on cpu and memory, we should set a requirement on bandwidth, and then guarantee that if you have that bandwidth, you will be able to run a node without any problem. And this is the tricky part.

## Current approach

With the recent productisation effort of RLN, we have part of the problem solved, but not entirely. RLN offers an improvement, since now have a pseudo-identity (RLN membership) that can be used to rate limit users, enforcing a limit on how often it can send a message (eg 1 message every 10 seconds). We assume of course, that getting said RLN membership requires to pay something, or put something at stake, so that it can't be sibyl attacked.

Rate limiting with RLN so that each entity just sends 1 message every x seconds indeed solves the spam problem but it doesn't per se cap the traffic. In order to cap the traffic, we would first need to cap the amount of memberships we allow. Lets see an example: 
- We limit to 10.000 RLN memberships
- Each ones is rate limited to send 1 message/10 seconds
- Message size of 50 kBytes

Having this, the worst case bandwidth that we can theoretically have, would be if all of the memberships publish messages at the same time, with the maximum size, continuously. That is `10.000 messages/sec * 50 kBytes = 500 MBytes/second`. This would be a burst every 10 seconds, but enough to leave out the majority of the nodes. Of course this assumption is not realistic as most likely not everyone will continuously send messages at the same time and the size will vary. But in theory this could happen.

A naive (and not practical) way of fixing this, would be to design the network for this worst case. So if we want to cap the maximum bandwidth to 5 MBytes/s then we would have different options on the maximum i) amount of RLN memberships and ii) maximum message size:
- `1.000` RLN memberships, `5` kBytes message size: `1000 * 5 = 5 MBytes/s`
- `10.000` RLN memberships, `500` Bytes message size: `10000 * 0.5 = 5 MBytes/s`

In both cases we cap the traffic, however, if we design The Waku Network like this, it will be massively underutilized. As an alternative, the approach we should follow is to rely on statistics, and assume that i) not everyone will be using the network at the same time and ii) message size will vary. So while its impossible to guarantee any capped bandwidth, we should be able to guarantee that with 95 or 99% confidence the bandwidth will stay around a given value, with a maximum variance.

The current RLN approach of rate limiting 1 message every x seconds is not very practical. The current RLN limitations are enforced on 1 message every x time (called `epoch`). So we currently can allow 1 msg per second or 1 msg per 10 seconds by just modifying the `epoch` size. But this has some drawbacks. Unfortunately, neither of the options are viable for waku:
1. A small `epoch` size (eg `1 seconds`) would allow a membership to publish `24*3600/1=86400` messages a day, which would be too much. In exchange, this allows a user to publish messages right after the other, since it just have to wait 1 second between messages. Problem is that having an rln membership being able to publish this amount of messages, is a bit of a liability for waku, and hinders scalability.
2. A high `epoch` size (eg `240 seconds`) would allow a membership to publish `24*3600/240=360` messages a day, which is a more reasonable limit, but this won't allow a user to publish two messages one right after the other, meaning that if you publish a message, you have to way 240 seconds to publish the next one. Not practical, a no go.

But what if we widen the window size, and allow multiple messages within that window?

## Solution

In order to fix this, we need bigger windows sizes, to smooth out particular bursts. Its fine that a user publishes 20 messages in one second, as long as in a wider window it doesn't publish more than, lets say 500. This wider window could be a day. So we could say that a membership can publish `250 msg/day`. With this we solve i) and ii) from the previous section.

Some quick napkin math on how this can scale:
- 10.000 RLN memberships
- Each RLN membership allow to publish 250 msg/day
- Message size of 5 kBytes

Assuming a completely random distribution:
- 10.000 * 250 = 2 500 000 messages will be published a day (at max)
- A day has 86 400 seconds. So with a random distribution we can say that 30 msg/sec (at max)
- 30 msg/sec * 5 kBytes/msg = 150 kBytes/sec (at max)
- Assuming D_out=8: 150 kBytes/sec * 8 = 1.2 MBytes/sec (9.6 Mbits/sec)

So while its still not possible to guarantee 100% the maximum bandwidth, if we rate limit per day we can have better guarantees. Looking at these numbers, considering a single shard, it would be feasible to serve 10.000 users considering a usage of 250 msg/day.

TODO: Analysis on 95%/99% interval confidence on bandwidth given a random distribution.

## TLDR

- Waku should guarantee a capped bandwidth so that everyone can run a node.
- The guarantee is a "statistical guarantee", since there is no way of enforcing a strict limit.
- Current RLN approach is to rate limit 1 message every x seconds. A better approach would be x messages every day, which helps achieving such bandwidth limit.
- To follow up: Variable RLN memberships. Eg. allow to chose tier 1 (100msg/day) tier 2 (200msg/day) etc.