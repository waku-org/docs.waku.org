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

When choosing a content topic, it is crucial to consider privacy implications. The `Filter`, `Store`, and `Light Push` protocols disclose content topics to peers, enabling said peer to link IP and content topic interests. `Relay` provides recipient anonymity thanks to `GossipSub`, but this may be lost if the content topic reveals information about the user.

:::info
Waku is developing privacy preserving features like [Anonymous Filter Subscription](https://rfc.vac.dev/spec/12/#future-work) for the `Filter` protocol and [Anonymous Query](https://rfc.vac.dev/spec/13/#future-work) for the `Store` protocol to hide content topics from potential adversaries.
:::

You can preserve the anonymity of individual identities by increasing [k-anonymity](https://www.privitar.com/blog/k-anonymity-an-introduction/), where k is proportional to the network size (number of subscribers). This involves using a single content topic across the entire application or specific features such as notifications or private messages, allowing multiple users to share it.

However, maintaining functionality with a single content topic can introduce complexity. We recommend switching functionality using the Protocol Buffer message format. By doing so, applications can retain a high granularity and functionality while using a single content topic, preserving user privacy.