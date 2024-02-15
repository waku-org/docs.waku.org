---
title: Incentivisation
---

Waku is a family of decentralised communication protocols.
The Waku Network (TWN) consists of independent nodes running Waku protocols.
TWN needs incentivisation (shortened to i13n) to ensure proper node behaviour.

The goal of this document is to outline and contextualize our approach to TWN i13n.
After providing an overview of Waku and relevant prior work,
we focus on Waku Store - a client-server protocol for querying historical messages.
We introduce a minimal viable addition to Store to enable i13n,
and list research directions for future work.

# Incentivisation in decentralised networks
## Incentivisation tools

We can think of incentivisation tools as a two-by-two matrix:
- rewards vs punishment;
- monetary vs reputation.

In other words, there are four quadrants:
- monetary reward: the node gets rewarded;
- monetary punishment: the nodes deposits funds that are taken away (slashed) if it misbehaves;
- reputation reward: the node's reputation increases if it behaves well;
- reputation punishment: the node's reputation decreases if it behaves badly.

Reputation only works if high reputation brings tangible benefits.
For example, if nodes chose neighbors based on reputation, low-reputation nodes miss out on potential revenue.
Reputation scores may be local (a node assigns scores to its neighbors) or global (each node gets a uniform score).
Global reputation in its simplest form involves a trusted third party,
although decentralised approaches are also possible.

## Prior work

We may split incentivized decentralised networks into early file-sharing, blockchains, and decentralised storage.

### Early P2P file-sharing

Early P2P file-sharing networks employ reputation-based approaches and sticky defaults.
For instance, the BitTorrent protocol rewards uploading peers with faster downloads.
The download bandwidth available to a peer depends on how much it has uploaded.
Moreover, peers share pieces of a file before having received it in whole.
This non-monetary i13n policy has been proved to work in practice.

### Blockchains

Bitcoin has introduced proof-of-work (PoW) for native monetary rewards in a P2P network.
PoW miners are automatically assigned newly mined coins for generating blocks.
Miners must expend physical resources to generate a block.
If the block is invalid, these expenses are not compensated (implicit monetary punishment).
Proof-of-stake (PoS), used in Ethereum and many other cryptocurrencies, introduces explicit monetary punishments.
PoS validators lock up (stake) native tokens and get rewarded for validating blocks or slashed for misbehaviour.

### Decentralised storage

Post-Bitcoin decentralised storage networks include Codex, Storj, Sia, Filecoin, IPFS.
Their i13n methods combine techniques from early P2P file-sharing with blockchain-inspired reward mechanisms.

# Waku background

Waku is a [family of protocols](https://waku.org/about/architect) for a modular privacy-preserving censorship-resistant decentralised communication network.
The backbone of Waku is the Relay protocol (and its spam-protected version [RLN-Relay](https://rfc.vac.dev/spec/17/)).
Additionally, there are light protocols: Store, Filter, and Lightpush.
Light protocols are also referred to as client-server protocols and request-response protocols.

A server is a node running Relay and a server-side of at least one light protocol.
A client is a node running a client-side of any of the light protocols.
A server may sometimes be referred to as a full node, and a client as a light node.
There is no strict definition of a full node vs a light node in Waku (see [discussion](https://github.com/waku-org/research/issues/28)).

In light protocols, a client sends a request to a server, and a server performs some actions and returns a response:
- [Store](https://rfc.vac.dev/spec/13/): the server responds with messages relayed that match a set of criteria;
- [Filter](https://rfc.vac.dev/spec/12/): the server will relay (only) messages that pass a filter to the client;
- [Lightpush](https://rfc.vac.dev/spec/19/): the server publishes the client's message to the Relay network.

## Waku i13n challenges

Waku has no consensus and no native token, which brings it closer to reputation-incentivised file-sharing networks.
As of late 2023, Waku only operates under reputation-based rewards and punishments.
While [RLN-Relay](https://rfc.vac.dev/spec/17/) adds monetary punishments for spammers, slashing is yet to be activated.

Monetary rewards and punishments should ideally be atomically linked with the node's behaviour.
A benefit of blockchains in this respect is that the desired behaviour of miners or validators can be verified automatically.
Enforcing atomicity in a communication network is more challenging:
it is non-trivial to prove that a given piece of data has been relayed.

Our goal is to combine monetary and reputation-based incentives for Waku.
Monetary incentives have demonstrated their robustness in blockchains.
We think they are necessary to scale the network beyond the initial phase when it's maintained altruistically.

## Waku Store

Waku Store is a light protocol for querying historic messages that works as follows:
1. the client sends a `HistoryQuery` to the server;
2. the server sends a `HistoryResponse` to the client.

The response may be split into multiple parts, as specified by pagination parameters in `PagingInfo`.

We define a _relevant_ message as a message that matches client-defined criteria (e.g., relayed within a given time frame).
Upon receiving a request, a server should quickly send back a response containing all and only relevant messages.

# Waku Store incentivisation

An incentivised Store protocol has the following extra steps:
1. pricing:
	1. cost calculation
	2. price advertisement
	3. price negotiation
2. payment:
	1. payment itself
	2. proof of payment
3. reputation
4. results cross-checking

In this document, we focus on the simplest proof-of-concept (PoC) i13n for Store.
Compared to the fully-fledged protocol, the PoC version is simplified in the following ways:
- cost calculation is based on a common-knowledge price;
- there is no price advertisement and no price negotiation;
- each query is paid for in a separate transaction, `txid` acts a proof of payment;
- the reputation system is simplified (see below);
- the results are not cross-checked.

In the PoC protocol:
1. the client calculates the price based on the known rate per hour of history;
2. the client pays the appropriate amount to the server's address;
3. the client sends a `HistoryQuery` to the server alongside the proof of payment (`txid`);
4. the server checks that the `txid` corresponds to a confirmed transaction with at least the required amount;
5. the server sends a `HistoryResponse` to the client.

In further subsections, we list the potential direction for future work towards a fully-fledged i13n mechanism.

## Pricing

For PoC, we assume a constant price per hour of history.
This price and the blockchain address of the server are assumed to be common knowledge.
This simplifies the client-server interaction, avoiding the price negotiation step.

In the future versions of the protocol, the price will be negotiated and will depend on multiple parameters,
such as the total size of the relevant messages in the response.

### Future work

- DoS protection - see https://github.com/waku-org/research/issues/66
- Cost calculation - see https://github.com/waku-org/research/issues/35
- Price advertisement - see https://github.com/waku-org/research/issues/51
- Price negotiation - see https://github.com/waku-org/research/issues/52

## Payment

For the PoC, each request is paid for with a separate transaction.
The transaction hash (`txid`) acts as a proof of payment.
The server verifies the payment by ensuring that:
1. the transaction has been confirmed;
2. the transaction is paying the proper amount to the server's account;
3. the `txid` does not correspond to any prior response.

The client gives proof of payment before it receives the response.
Other options could be:
1. the client pays after the fact;
2. the client pays partly upfront and partly after the fact;
3. a centralised third party (either trusted or semi-trusted, like a smart contract) ensures atomicity;
4. cryptographically ensured atomicity (similar to atomic swaps, Lightning, or Hopr).

Our design considerations are:
- the PoC protocol should be simple;
- servers are more "permanent" entities and are more likely to have long-lived identities;
- it is more important to protect the clients's privacy than the server's privacy.

In light of these criteria, we suggest that the client pays first.
This is simpler than splitting the payment, or involving an extra atomicity-enforcing mechanism.
Moreover, pre-payment is arguably more privacy-preserving than post-payment, which encourages servers to deanonymise clients to prevent fraud.

### Future work

- Add more payment methods - see https://github.com/waku-org/research/issues/58
- Design a subscription model with service credentials - see https://github.com/waku-org/research/issues/59
- Add privacy to service credentials - see https://github.com/waku-org/research/issues/60
- Consider the impact of network disruptions - see https://github.com/waku-org/research/issues/65

## Reputation

We use reputation to discourage the server from taking the payment and not responding.
The client keeps track of the server's reputation:
- all servers start with zero reputation points;
- if the server honours the request, it gets `+n` points;
- if the server does not respond before a timeout, it gets `-m` points.
- if the server's reputation drops below `k` points, the client will never query it again.

`n`, `m`, and `k` are subject to configuration.

Optionally, a client may treat a given server as trusted, assigning it a constant positive reputation.

Potential issues:
- An attacker can establish new server identities and continue running away with clients' money. Countermeasures:
	- a client only queries trusted servers (which however leads to centralisation);
	- when querying a new server, a client first sends a small (i.e. cheap) request as a test;
	- more generally, the client selects a server on a case-by-case basis, weighing the payment amount against the server's reputation.
- The ban mechanism can theoretically be abused. For instance, a competitor may attack the victim server and cause the clients who were awaiting the response to ban that server. Countermeasure: prevent DoS-attacks.

### Future work

Design a more comprehensive reputation system:
- local reputation - see https://github.com/waku-org/research/issues/48
- global reputation - see https://github.com/waku-org/research/issues/49

## Results cross-checking

As there is no consensus over past messages, a client may want to query multiple servers and merge their responses.
Cross-checking helps ensure that servers are a) not censoring real messages; b) not injecting fake messages into history.
Cross-checking is absent in PoC but may be considered later.

### Future work

- Cross-checking the results against censorship - see https://github.com/waku-org/research/issues/57
- Use RLN to limit fake message insertion - see https://github.com/waku-org/research/issues/38

# Evaluation

We should think about what the success metrics for an incentivised protocol are, and how to measure them both in simulated settings, as well as in a live network.

# Longer-term future work

- Analyze privacy issues - see https://github.com/waku-org/research/issues/61
- Analyze decentralised storage protocols and their relevance e.g. as back-end storage for Store servers - see https://github.com/waku-org/research/issues/34
- Analyze the role of message senders, in particular, whether they should pay for sending non-ephemeral messages - see https://github.com/waku-org/research/issues/32
- Generalise incentivisation protocol to other Waku light protocols (Lightpush and Filter) - see https://github.com/waku-org/research/issues/67.