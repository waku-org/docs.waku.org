---
title: Maximum Bandwidth for Global Adoption
---

**TLDR**: This issue aims to **set the maximum bandwidth** in `x Mbps` that each waku shard should consume so that the **maximum amount of people can run a full waku node**. It is up to https://github.com/waku-org/research/issues/22 to specify how this maximum will be enforced.

**Conclusion:** Limit to `10 Mbps` each waku shard.

## Introduction

Waku is designed in a way that everyone should be able to run a full node on an average laptop with a residential Internet connection, at least in one shard. This will enable true decentralization and give power to the users, since they won't need to rely on third parties to send/receive messages. Professional node operators running in data centers, can of course contribute to multiple shards, but we should keep the bandwidth/hardware requirements of single shard rather low.

This vision opposes the federated approach, where a few nodes requiring vast amounts of resources (cpu, memory, bandwidth) run in data centres, taking the power from the user. While federated approaches are an improvement from traditional client-server architectures, waku envisions a fully peer-to-peer architecture where anyone should be able to run a node.

In order to ensure that anyone can run a node **in desktop**, there are two main **limiting factors**:
1. Bandwidth consumption in Mbps
2. CPU/memory resources (mainly limited by RLN proof verification)

This issue focuses on i) bandwidth consumption and https://github.com/waku-org/research/issues/30 on ii) CPU/memory resources. Note that on https://github.com/waku-org/research/issues/23 an analysis on the impact on RLN was already made, but wasn't focused on scalability. Said issues do.

In https://github.com/waku-org/research/issues/22 we discussed **why** and **how** to limit the maximum bandwidth per shard, but we haven't come up with a specific number in Mbps. **This issue i) presents data from the available bandwidth at different locations and ii) suggests a maximum bandwidth in Mbps that waku should enforce**.

## Bandwidth availability and usage

The following tables show:
- Table [1] The Q25, Q75 and average bandwidth (upload/download) in Mbps available on different continents. Raw data is available [here](https://www.measurementlab.net/data/) and credits to [@leobago](https://github.com/leobago) for the summarized version. Note: The below numbers were rounded to the nearest integer.
- Table [2] The median global bandwidth (upload/download) in Mbps, taken from [speedtest](https://www.speedtest.net/global-index) (accessed 12 Oct 2023). 
- Table [3] Download bandwidth requirements in Mbps for Netflix video streaming, [source](https://www.comparethemarket.com/broadband/content/broadband-for-streaming/).

|    *Table [1]*             | Download (Mbps) |            |        | Upload (Mbps) |            |        |
|------------------|-----------------|------------|--------|---------------|------------|--------|
|                  |   **Q25**           |   **Average**  |  **Q75**  |   **Q25**         |   **Average**  |   **Q75**  |
|   North-America  |   58            |   107      |   137  |   38          |   68       |   85   |
|   South-America  |   21            |   54       |   72   |   13          |   33       |   44   |
|   Europe         |   49            |   93       |   119  |   30          |   56       |   72   |
|   Asia           |   23            |   53       |   71   |   15          |   37       |   50   |
|   Oceania        |   44            |   84       |   108  |   27          |   50       |   63   |
|   Africa         |   12            |   26       |   33   |   7           |   17       |   22   |

|   *Table [2]*     | Median Download (Mbps) | Median Upload (Mbps) |
|--------|------------------------|----------------------|
| Global | 83                     | 38                   |

| *Table [3]* **Video resolution** | **Recommended Bandwidth** | 
|----------------------|---------------------------|
| HD                   | 3 Mbps                    | 
| Full HD              | 5 Mbps                    | 
| 4K/UHD               | 15 Mbps                   | 

## Selecting a maximum bandwidth

With the above data, we should be informed to take a decision on the maximum bandwidth that we should enforce per shard. With this number, we will apply the techniques explained in https://github.com/waku-org/research/issues/22 to ensure (with some statistical confidence) that the bandwidth won't exceed that number.

The **trade-off is clear**:
- We **enforce a low bandwidth**: more people can run full waku nodes, overall network throughput is less, network decentralization is easier, gives power to the user as its fully sovereign.
- We **don't enforce a low bandwidth**: not possible to run full waku nodes in laptops acting as a centralization force, nodes are run by few professional operators in data centers, waku users just use light clients, network throughput can scale way easier, federated approach.

So it's about where to draw this line.

Points to take into account:
- **Relay contributes to bandwidth the most**: Relay is the protocol that mostly contributes to bandwidth usage, and it can't choose to allocate fewer bandwidth resources like other protocols (eg `store` can choose to provide less resources and it will work). In other words, the network sets the relay bandwidth requirements, and if the node can't meet them, it just wont work.
- **Upload and download bandwidth are the same**: Due to how gossipsub works, and hence `relay`, the bandwidth consumption is symmetric, meaning that upload and download bandwidth is the same. This is because of `D` and the reciprocity of the connections, meaning that one node upload is another download.
- **Nodes not meeting requirements can use light clients**. Note that nodes not meeting the bandwidth requirements can still use waku, but they will have to use light protocols, which are a great alternative, especially on mobile, but with some drawbacks (trust assumptions, less reliability, etc)
- **Waku can't take all the bandwidth:** Waku is meant to be used in conjunction with other services, so it shouldn't consume all the existing bandwidth. If Waku consumes `x Mbps` and someone bandwidth is `x Mpbs`, the UX won't be good.
- **Compare with existing well-known services:** As shown in *Table [3]*, Netflix 4K video streaming takes 15Mbps, so that is an order of magnitude to take into account.

Coming up with a number:
- Lowest average download speed across continents is Africa (26 Mbps)
- Lowest average upload speed across continents is Africa (17 Mbps)
- Since in waku the bandwidth consumption is symmetric, we are limited by the lowest (17 Mpbs)
- However waku should not consume all bandwidth, leaving some room for other applications.
- We could set 10 Mbps, which is between Full HD video and 4K.
- With 10Mbps the % of average bandwidth waku will consume is:
  - North-America 9 %
  - South-America 18 %
  - Europe  11 %
  - Asia 18 %
  - Oceania 12 %
  - Africa 38 %

**Conclusion:** Limit to `10 Mbps` each waku shard. How? Not trivial, see https://github.com/waku-org/research/issues/22#issuecomment-1727795042

*Note:* This number is not set in stone and is subject to modifications, but it will most likely stay in the same order of magnitude if changed.