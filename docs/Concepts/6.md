---
title: Content Topic and How to Choose One
---

A content topic is used for content based filtering and allows you to filter out the messages that your dApp processes,
both when receiving live messages (Relay or Filter) or retrieving historical messages (Store).

The recommended format for content topics is as follows:

`/{dapp-name}/{version}/{content-topic-name}/{encoding}`

- `dapp-name`: The name of your dApp, it must be unique to avoid conflict with other dApps.
- `version`: We usually start at `1`, useful when introducing breaking changes in your messages.
- `content-topic-name`: The actual content topic name to use for filtering.
  If your dApp uses Waku for several features,
  you should use a content topic per feature.
- `encoding`: The encoding format of the message, [Protobuf](https://developers.google.com/protocol-buffers) is most often used: `proto`.

For example: Your dApp's name is SuperCrypto,
it enables users to receive notifications and send private messages.
You may want to use the following content topics:

- `/supercrypto/1/notification/proto`
- `/supercrypto/1/private-message/proto`
