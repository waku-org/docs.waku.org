---
title: Encrypt and Decrypt Your Waku Messages
hide_table_of_contents: true
---

This guide provides detailed steps to use the [@waku/message-encryption](https://www.npmjs.com/package/@waku/message-encryption) package to encrypt and decrypt your messages using [Waku message payload encryption](/learn/glossary#waku-message-payload-encryption) methods.

:::info
Waku lacks protocol-level message encryption because it does not know the communication parties. This design choice enhances Waku's encryption flexibility, encouraging developers to freely use custom protocols or [Waku message payload encryption](/learn/glossary#waku-message-payload-encryption) methods.
:::

## Installation

Install the `@waku/message-encryption` package using your preferred package manager:

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs groupId="package-manager">
<TabItem value="npm" label="NPM">

```shell
npm install @waku/message-encryption
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn add @waku/message-encryption
```

</TabItem>
</Tabs>

## Symmetric encryption

Symmetric encryption uses a single, shared key for message encryption and decryption. Use the `generateSymmetricKey()` function to generate a random symmetric key:

```js
import { generateSymmetricKey } from "@waku/message-encryption";

// Generate a random symmetric key
const symKey = generateSymmetricKey();
```

To send encrypted messages, create a symmetric message `encoder` and send the message as usual:

```js
import { createEncoder } from "@waku/message-encryption/symmetric";

// Create a symmetric message encoder
const encoder = createEncoder({
	contentTopic: contentTopic, // message content topic
	symKey: symKey, // symmetric key for encrypting messages
});

// Send the message using Light Push
await node.lightPush.send(encoder, { payload });
```

To decrypt the messages you receive, create a symmetric message `decoder` and process the messages as usual:

```js
import { createDecoder } from "@waku/message-encryption/symmetric";

// Create a symmetric message decoder
const decoder = createDecoder(contentTopic, symKey);

// Receive messages from a Filter subscription
const subscription = await node.filter.createSubscription();
await subscription.subscribe([decoder], callback);

// Retrieve messages from Store peers
await node.store.queryWithOrderedCallback([decoder], callback);
```

## ECIES encryption

ECIES encryption uses a public key for encryption and a private key for decryption. Use the `generatePrivateKey()` function to generate a random private key:

```js
import { generatePrivateKey, getPublicKey } from "@waku/message-encryption";

// Generate a random private key, keep secure
const privateKey = generatePrivateKey();

// Generate a public key from the private key, provide to the sender
const publicKey = getPublicKey(privateKey);
```

To send encrypted messages, create an ECIES message `encoder` with the public key and send the message as usual:

```js
import { createEncoder } from "@waku/message-encryption/ecies";

// Create an ECIES message encoder
const encoder = createEncoder({
	contentTopic: contentTopic, // message content topic
	publicKey: publicKey, // ECIES public key for encrypting messages
});

// Send the message using Light Push
await node.lightPush.send(encoder, { payload });
```

To decrypt the messages you receive, create an ECIES message `decoder` with the private key and process the messages as usual:

```js
import { createDecoder } from "@waku/message-encryption/ecies";

// Create an ECIES message decoder
const decoder = createDecoder(contentTopic, privateKey);

// Receive messages from a Filter subscription
const subscription = await node.filter.createSubscription();
await subscription.subscribe([decoder], callback);

// Retrieve messages from Store peers
await node.store.queryWithOrderedCallback([decoder], callback);
```

:::tip Congratulations!
You have successfully encrypted and decrypted your messages using `symmetric` and `ECIES` encryption methods. Have a look at the [flush-notes](https://github.com/waku-org/js-waku-examples/tree/master/examples/flush-notes) example for a working demo.
:::