---
title: Content Topics
hide_table_of_contents: true
---

`Content Topics` are metadata strings set by developers on outgoing messages to facilitate protocol-level features like selectively processing incoming messages ([Relay](/learn/concepts/protocols#relay) or [Filter](/learn/concepts/protocols#filter)) and retrieving historical messages ([Store](/learn/concepts/protocols#store)) that meet specific filtering criteria. Have a look at the [WAKU2-TOPICS](https://rfc.vac.dev/spec/23/#content-topics) specification to learn more.

## Naming format

Here is the recommended format for content topics:

`/{application-name}/{version}/{content-topic-name}/{encoding}`

- `application-name`: This is the unique name of your decentralised application (DApp) to prevent conflicts with other DApps.
- `version`: Typically starting at `1`, this field helps track breaking changes in your messages.
- `content-topic-name`: The specific name of the content topic used for filtering.
- `encoding`: The message encoding or serialisation format, with [Protocol Buffers](https://protobuf.dev/) (`proto`) being the recommended choice.

For example, if your DApp is called `SuperCrypto` and it allows users to receive notifications and send private messages, you can consider using the following content topics:

- `/supercrypto/1/notification/proto`
- `/supercrypto/1/private-message/proto`

:::tip
While you can choose any encoding format for your `Content Topic`, we highly recommend using Protocol Buffers (`proto`) because of its efficiency. Choosing a lightweight format ensures optimal performance of your DApp.
:::

## Naming considerations

When choosing a content topic, it is essential to consider the privacy implications. Here are several factors to keep in mind:

### Protocols disclose content topics to peers

The `Filter`, `Store`, and `Light Push` protocols share content topics with peers, allowing them to link IP and content topic interests. The `Relay` protocol, using `GossipSub`, provides recipient anonymity, which can be compromised if the content topic exposes user information.

For example, instead of using Personally Identifiable Information (PII) in the content topic (e.g., a public key), you can create buckets (e.g., based on the first 4 bytes of the public key hash).

:::info
Waku is developing privacy-preserving features like [Anonymous Filter Subscription](https://rfc.vac.dev/spec/12/#future-work) for the `Filter` protocol and [Anonymous Query](https://rfc.vac.dev/spec/13/#future-work) for the `Store` protocol to hide content topics from potential adversaries.
:::

### Increasing k-anonymity preserves user anonymity

You can increase [k-anonymity](https://www.privitar.com/blog/k-anonymity-an-introduction/) within the network by using a unified content topic across the entire application or targeting specific features like notifications or private messages, allowing multiple users to share it.

We recommend switching functionality using the Protocol Buffer (`proto`) message format. By doing so, applications can retain a high granularity and functionality while using a single content topic, preserving user privacy. For example:

```js
message NotificationPayload {
...
}

message FeatureAbcPayload {
...
}

// By default, all fields in protobuf are optional so only field may be encoded at a time
message Payload {
	NotificationPayload notification = 1;
	FeatureAbcPayload feature_abc = 2;
}
```

### Creating buckets help in distributing traffic

When an application uses a single content topic, all users using [request/response protocols](/learn/concepts/network-domains#requestresponse-domain) (`Filter`, `Store`) receive all its messages. For heavy traffic, developers can create buckets by hashing a unique identifier (e.g., recipient's ID, public key, or app domain topic) and adding its first byte to the content topic, like `/my-app/0/a/proto`.

This approach divides traffic into multiple topics, reducing the messages users have to download. Developers can add more first bytes to the content topic over time to improve efficiency and privacy based on messages and user needs.

:::info
The **k** value of **k-anonymity** equals the number of IDs for which the first character of the hash is `"a"`. For example, using a single content topic in an application with 10,000 users results in **k = 10,000**. However, using the hash ID's first character, **k** reduces to **10,000 / 16 = 625**.
:::