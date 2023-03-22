---
title: Security Features
---

Each protocol layer of Waku v2 provides a distinct service and is associated with a separate set of security features and concerns.
Therefore, the overall security of Waku v2 depends on how the different layers are utilized.

The security models are detailed in the RFC of the protocols.
We strive to provide well documented and open source RFCs so that Waku users know what security guarantees are and aren't provided by each protocol.

Some of the security features of Waku v2 are:

### Pseudonymity

Waku v2 by default guarantees pseudonymity for all of the protocol layers since parties do not have to disclose their true identity
and instead they utilize libp2p `PeerID` as their identifiers.
While pseudonymity is an appealing security feature, it does not guarantee full anonymity since the actions taken under the same pseudonym
i.e., `PeerID`, can be linked together and potentially result in the re-identification of the true actor.

### Anonymity / Unlinkability

At a high level, anonymity is the inability of an adversary in linking an actor to its data/performed action (the actor and action are context-dependent).
To be precise about linkability, we use the term Personally Identifiable Information (PII) to refer to any piece of data that could potentially be used to uniquely identify a party.
For example, the signature verification key, and the hash of one's static IP address are unique for each user and hence count as PII.
Notice that users' actions can be traced through their PIIs (e.g., signatures) and hence result in their re-identification risk.
As such, we seek anonymity by avoiding linkability between actions and the actors / actors' PII. Concerning anonymity, Waku v2 provides the following features:

**Publisher-Message Unlinkability**:
This feature signifies the unlinkability of a publisher to its published messages in the `WAKU-RELAY` protocol.

**Subscriber-Topic Unlinkability**:
This feature stands for the unlinkability of the subscriber to its subscribed topics in the `WAKU-RELAY` protocol.
The [Subscriber-Topic Unlinkability](https://rfc.vac.dev/spec/11/#security-analysis) is achieved through the utilization of a single PubSub topic.
As such, subscribers are not re-identifiable from their subscribed topic IDs as the entire network is linked to the same topic ID.
This level of unlinkability / anonymity is known as [k-anonymity](https://www.privitar.com/blog/k-anonymity-an-introduction/) where k is proportional to the system size (number of subscribers).
Note that there is no hard limit on the number of the pubsub topics, however, the use of one topic is recommended for the sake of anonymity.

### Spam protection

This property indicates that no adversary can flood the system (i.e., publishing a large number of messages in a short amount of time), either accidentally or deliberately, with any kind of message i.e. even if the message content is valid or useful.
Spam protection is partly provided in `WAKU2-RELAY` through the [scoring mechanism](https://github.com/libp2p/specs/blob/master/pubsub/gossipsub/gossipsub-v1.1.md#spam-protection-measures) provided for by GossipSub v1.1.
At a high level, peers utilize a scoring function to locally score the behavior of their connections and remove peers with a low score.

There's also further research being done in this domain, including the designing of [RLN (Rate Limiting Nullifiers)](./research-in-progress.md)

https://github.com/vacp2p/research/issues/148

### Data confidentiality, Integrity, and Authenticity

Confidentiality can be addressed through data encryption whereas integrity and authenticity are achievable through digital signatures.
These features are provided for in [WAKU-MESSAGE (version 1)](https://rfc.vac.dev/spec/14#version-1) and [WAKU-NOISE](https://rfc.vac.dev/spec/35/) through payload encryption as well as encrypted signatures.

:::info `WAKU-NOISE` enables secure channel negotiation over Waku.
:::

## Security Considerations

**Lack of anonymity/unlinkability in the protocols involving direct connections including [`13/WAKU2-STORE`](https://rfc.vac.dev/spec/13/) and [`12/WAKU2-FILTER`](https://rfc.vac.dev/spec/12/) protocols**:
The anonymity/unlinkability is not guaranteed in the protocols like `13/WAKU2-STORE` and `12/WAKU2-FILTER` where peers need to have direct connections to benefit from the designated service.
This is because during the direct connections peers utilize `PeerID` to identify each other,
therefore the service obtained in the protocol is linkable to the beneficiary's `PeerID` (which counts as PII).
For `13/WAKU2-STORE`, the queried node would be able to link the querying node's `PeerID` to its queried topics.
Likewise, in the `12/WAKU2-FILTER`, a full node can link the light node's `PeerID`s to its content filter.
