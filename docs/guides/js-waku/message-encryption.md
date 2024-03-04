---
title: Encrypt, Decrypt, and Sign Your Messages
hide_table_of_contents: true
---

This guide provides detailed steps to use the [@waku/message-encryption](https://www.npmjs.com/package/@waku/message-encryption) package to encrypt, decrypt, and sign your messages using [Waku message payload encryption](/learn/glossary#waku-message-payload-encryption) methods.

:::info
Waku uses libp2p noise encryption for node-to-node connections. However, no default encryption method is applied to the data sent over the network. This design choice enhances Waku's encryption flexibility, encouraging developers to freely use custom protocols or [Waku message payload encryption](/learn/glossary#waku-message-payload-encryption) methods.
:::

## Installation

Install the required packages for integrating `@waku/message-encryption` using your preferred package manager:

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
const symmetricKey = generateSymmetricKey();
```

To send encrypted messages, create a `Symmetric` message `encoder` and send the message as usual:

```js title="Sender client"
import { createEncoder } from "@waku/message-encryption/symmetric";

// Create a symmetric message encoder
const encoder = createEncoder({
	contentTopic: contentTopic, // message content topic
	symKey: symmetricKey, // symmetric key for encrypting messages
});

// Send the message using Light Push
await node.lightPush.send(encoder, { payload });
```

To decrypt the messages you receive, create a symmetric message `decoder` and process the messages as usual:

```js title="Receiver client"
import { createDecoder } from "@waku/message-encryption/symmetric";

// Create a symmetric message decoder
const decoder = createDecoder(contentTopic, symmetricKey);

// Receive messages from a Filter subscription
await subscription.subscribe([decoder], callback);

// Retrieve messages from Store peers
await node.store.queryWithOrderedCallback([decoder], callback);
```

:::tip
The symmetric key exchange between users can happen through an [out-of-band method](/learn/glossary#out-of-band). For example, where the key is embedded within the URL shared by a user to access a specific resource.
:::

## ECIES encryption

`ECIES` encryption uses a public key for encryption and a private key for decryption. Use the `generatePrivateKey()` function to generate a random `ECDSA` private key:

```js
import { generatePrivateKey, getPublicKey } from "@waku/message-encryption";

// Generate a random ECDSA private key, keep secure
const privateKey = generatePrivateKey();

// Generate a public key from the private key, provide to the sender
const publicKey = getPublicKey(privateKey);
```

To send encrypted messages, create an `ECIES` message `encoder` with the public key and send the message as usual:

```js title="Sender client"
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

```js title="Receiver client"
import { createDecoder } from "@waku/message-encryption/ecies";

// Create an ECIES message decoder
const decoder = createDecoder(contentTopic, privateKey);

// Receive messages from a Filter subscription
await subscription.subscribe([decoder], callback);

// Retrieve messages from Store peers
await node.store.queryWithOrderedCallback([decoder], callback);
```

:::tip
Users can share their public key through broadcasting or [out-of-band methods](/learn/glossary#out-of-band), such as embedding it in a URL or sending an unencrypted message on another content topic for others to retrieve.
:::

## Signing encrypted messages

Message signing helps in proving the authenticity of received messages. By attaching a signature to a message, you can verify its origin and integrity with absolute certainty.

:::info
Signing messages is only possible when encrypted, but if your application does not require encryption, you can generate a symmetric key through hardcoded or deterministic methods using information available to all users.
:::

The `sigPrivKey` option allows the `Symmetric` and `ECIES` message `encoders` to sign the message before encryption using an `ECDSA` private key:

```js title="Alice (sender) client"
import { generatePrivateKey, getPublicKey } from "@waku/message-encryption";
import { createEncoder as createSymmetricEncoder } from "@waku/message-encryption/symmetric";
import { createEncoder as createECIESEncoder } from "@waku/message-encryption/ecies";

// Generate a random ECDSA private key for signing messages
// ECIES encryption and message signing both use ECDSA keys
// For this example, we'll call the sender of the message Alice
const alicePrivateKey = generatePrivateKey();
const alicePublicKey = getPublicKey(alicePrivateKey);

// Create a symmetric encoder that signs messages
const symmetricEncoder = createSymmetricEncoder({
	contentTopic: contentTopic, // message content topic
	symKey: symmetricKey, // symmetric key for encrypting messages
	sigPrivKey: alicePrivateKey, // private key for signing messages before encryption
});

// Create an ECIES encoder that signs messages
const ECIESEncoder = createECIESEncoder({
	contentTopic: contentTopic, // message content topic
	publicKey: publicKey, // ECIES public key for encrypting messages
	sigPrivKey: alicePrivateKey, // private key for signing messages before encryption
});

// Send and receive your messages as usual with Light Push and Filter
await subscription.subscribe([symmetricEncoder], callback);
await node.lightPush.send(symmetricEncoder, { payload });

await subscription.subscribe([ECIESEncoder], callback);
await node.lightPush.send(ECIESEncoder, { payload });
```

You can extract the `signature` and its public key (`signaturePublicKey`) from the [DecodedMessage](https://js.waku.org/classes/_waku_message_encryption.DecodedMessage.html) and compare it with the expected public key or use the `verifySignature()` function to verify the message origin:

```js title="Bob (receiver) client"
import { generatePrivateKey } from "@waku/message-encryption";
import { createEncoder } from "@waku/message-encryption/symmetric";

// Generate a random private key for signing messages
// For this example, we'll call the receiver of the message Bob
const bobPrivateKey = generatePrivateKey();

// Create an encoder that signs messages
const encoder = createEncoder({
	contentTopic: contentTopic,
	symKey: symmetricKey,
	sigPrivKey: bobPrivateKey,
});

// Modify the callback function to verify message signature
const callback = (wakuMessage) => {
	// Extract the message signature and public key of the signature
	// You can compare the signaturePublicKey with Alice public key
	const signature = wakuMessage.signature;
	const signaturePublicKey = wakuMessage.signaturePublicKey;

	// Verify the message was actually signed and sent by Alice
	// Alice's public key can be gotten from broadcasting or out-of-band methods
	if (wakuMessage.verifySignature(alicePublicKey)) {
		console.log("This message was signed by Alice");
	} else {
		console.log("This message was NOT signed by Alice");
	}
};

await subscription.subscribe([encoder], callback);
```

## Storing encryption keys

We used randomly generated keys for encryption and message signing in the provided examples, but real-world applications require consistent keys among client restarts. Have a look at the [Key Pair Handling](https://github.com/waku-org/js-waku-examples/tree/master/examples/eth-pm/src/key_pair_handling) example, which demonstrates the secure storage and retrieval of key information from local storage using [Subtle Crypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto).

If you need a simple way to store your keys in hexadecimal format across your application, you can use the [@waku/utils](https://www.npmjs.com/package/@waku/utils) package:

```js
import { bytesToHex, hexToBytes } from "@waku/utils/bytes";

// Generate random symmetric and private keys
const symmetricKey = generateSymmetricKey();
const privateKey = generatePrivateKey();

// Store the keys in hexadecimal format
const symmetricKeyHex = bytesToHex(symmetricKey);
const privateKeyHex = bytesToHex(privateKey);

// Restore the keys from hexadecimal format
const restoredSymmetricKey = hexToBytes(symmetricKeyHex);
const restoredPrivateKey = hexToBytes(privateKeyHex);
```

:::tip Congratulations!
You have successfully encrypted, decrypted, and signed your messages using `Symmetric` and `ECIES` encryption methods. Have a look at the [eth-pm](https://github.com/waku-org/js-waku-examples/tree/master/examples/eth-pm) example for a working demo.
:::

<!-- [flush-notes](https://github.com/waku-org/js-waku-examples/tree/master/examples/flush-notes) and -->