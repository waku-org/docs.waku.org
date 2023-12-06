---
title: Encrypt, Decrypt, and Sign Your Messages
hide_table_of_contents: true
---

This guide provides detailed steps to use the [@waku/message-encryption](https://www.npmjs.com/package/@waku/message-encryption) package to encrypt, decrypt, and sign your messages using [Waku message payload encryption](/learn/glossary#waku-message-payload-encryption) methods.

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
npm install @waku/message-encryption @waku/utils
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn add @waku/message-encryption @waku/utils
```

</TabItem>
</Tabs>

## Symmetric encryption

`Symmetric` encryption uses a single, shared key for message encryption and decryption. Use the `generateSymmetricKey()` function to generate a random symmetric key:

```js
import { generateSymmetricKey } from "@waku/message-encryption";

// Generate a random symmetric key
const symKey = generateSymmetricKey();
```

To send encrypted messages, create a `Symmetric` message `encoder` and send the message as usual:

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

`ECIES` encryption uses a public key for encryption and a private key for decryption. Use the `generatePrivateKey()` function to generate a random private key:

```js
import { generatePrivateKey, getPublicKey } from "@waku/message-encryption";

// Generate a random private key, keep secure
const privateKey = generatePrivateKey();

// Generate a public key from the private key, provide to the sender
const publicKey = getPublicKey(privateKey);
```

To send encrypted messages, create an `ECIES` message `encoder` with the public key and send the message as usual:

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

To decrypt the messages you receive, create an `ECIES` message `decoder` with the private key and process the messages as usual:

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

## Signing encrypted messages

Message signing helps in proving the authenticity of received messages. By attaching a signature to a message, you can verify its origin and integrity with absolute certainty.

The `sigPrivKey` option allows the `Symmetric` and `ECIES` message `encoders` to sign the message before encryption using an `ECDSA` private key:

```js
import { generatePrivateKey } from "@waku/message-encryption";
import { createEncoder as createSymmetricEncoder } from "@waku/message-encryption/symmetric";
import { createEncoder as createECIESEncoder } from "@waku/message-encryption/ecies";

// Generate a random private key for signing messages
const sigPrivKey = generatePrivateKey();

// Create a symmetric encoder that signs messages
const symmetricEncoder = createSymmetricEncoder({
	contentTopic: contentTopic, // message content topic
	symKey: symKey, // symmetric key for encrypting messages
	sigPrivKey: sigPrivKey, // private key for signing messages before encryption
});

// Create an ECIES encoder that signs messages
const ECIESEncoder = createECIESEncoder({
	contentTopic: contentTopic, // message content topic
	publicKey: publicKey, // ECIES public key for encrypting messages
	sigPrivKey: sigPrivKey, // private key for signing messages before encryption
});

// Send and receive your messages as usual with Light Push and Filter
await subscription.subscribe([symmetricEncoder], callback);
await node.lightPush.send(symmetricEncoder, { payload });

await subscription.subscribe([ECIESEncoder], callback);
await node.lightPush.send(ECIESEncoder, { payload });
```

You can extract the `signature` and its public key (`signaturePublicKey`) from the [DecodedMessage](https://js.waku.org/classes/_waku_message_encryption.DecodedMessage.html) and compare it with the expected public key to verify the message:

```js
// Generate a random private key for signing messages
const sigPrivKey = generatePrivateKey();

// Generate a public key from the private key for verifying signatures
const sigPubKey = getPublicKey(sigPrivKey);

// Create an encoder that signs messages
const encoder = createEncoder({
	contentTopic: contentTopic,
	symKey: symKey,
	sigPrivKey: sigPrivKey,
});

// Modify the callback function to verify message signature
const callback = (wakuMessage) => {
	// Extract the message signature and public key of the signature
	const signature = wakuMessage.signature;
	const signaturePublicKey = wakuMessage.signaturePublicKey;

	// Compare the public key of the message signature with the sender's own
	if (JSON.stringify(signaturePublicKey) === JSON.stringify(sigPubKey)) {
		console.log("This message was correctly signed");
	} else {
		console.log("This message has an incorrect signature");
	}
};
```

## Restoring encryption keys

We used randomly generated keys for encryption and message signing in the provided examples, but real-world applications require consistent keys among clients. You can use the [@waku/utils](https://www.npmjs.com/package/@waku/utils) package to convert keys into a hexadecimal format for uniformity:

```js
import { bytesToHex, hexToBytes } from "@waku/utils/bytes";
import { generateSymmetricKey, generatePrivateKey } from "@waku/message-encryption";

// Generate random symmetric and private keys
const symKey = generateSymmetricKey();
const privateKey = generatePrivateKey();
console.log(symKey, privateKey);

// Convert the keys to hexadecimal format
const symKeyHex = bytesToHex(symKey);
const privateKeyHex = bytesToHex(privateKey);
console.log(symKeyHex, privateKeyHex);

// Restore the keys from hexadecimal format
const restoredSymKey = hexToBytes(symKeyHex);
const restoredPrivateKey = hexToBytes(privateKeyHex);
console.log(restoredSymKey, restoredPrivateKey);
```

:::tip Congratulations!
You have successfully encrypted, decrypted, and signed your messages using `symmetric` and `ECIES` encryption methods. Have a look at the [flush-notes](https://github.com/waku-org/js-waku-examples/tree/master/examples/flush-notes) example for a working demo.
:::