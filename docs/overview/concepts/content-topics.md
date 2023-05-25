---
title: Content Topics
---

`Content Topics` are metadata strings set by developers on outgoing messages to facilitate protocol-level features like selectively processing incoming messages ([Relay](/overview/concepts/protocols#relay) or [Filter](/overview/concepts/protocols#filter)) and retrieving historical messages ([Store](/overview/concepts/protocols#store)) that meet specific filtering criteria. Please refer to the [WAKU2-TOPICS](https://rfc.vac.dev/spec/23/#content-topics) specification to learn more.

## Content Topic Format

Here is the recommended format for content topics:

`/{application-name}/{version}/{content-topic-name}/{encoding}`

- `application-name`: This is the unique name of your decentralized application (dApp) to prevent conflicts with other dApps.
- `version`: Typically starting at 1, this field helps track breaking changes in your messages.
- `content-topic-name`: The specific name of the content topic used for filtering. If your dApp utilizes Waku for multiple features, it is advisable to have a separate content topic for each feature.
- `encoding`: The message serialization/encoding format, with [Protocol Buffers](https://protobuf.dev/) (`proto`) being the commonly used choice.

For instance, if your dApp is called `SuperCrypto` and it allows users to receive notifications and send private messages, you can consider utilizing the following content topics:

- `/supercrypto/1/notification/proto`
- `/supercrypto/1/private-message/proto`

:::info
While you can choose any encoding format for your `Content Topic`, we highly recommend using [Protocol Buffers](https://protobuf.dev/) (`proto`) because of its efficiency. Choosing a lightweight format ensures optimal performance of your dApp.
:::