---
summary: Demonstrate how to sign messages using Waku
authors:
- Fryorcraken
date: 2022-08-15
---

# Sign Messages Using Waku Message Version 1

The Waku Message format provides an easy way to sign messages using elliptic curve cryptography.

It also allows the sender to encrypt messages,
see [Encrypt Messages Using Waku Message Version 1](/docs/guides/04_encrypt_messages_version_1/) to learn how.

You can find more details about Waku Message Payload Signature in [26/WAKU-PAYLOAD](https://rfc.vac.dev/spec/26/).

See [Cryptographic Libraries](/docs/crypto_libraries/) for more details on the cryptographic libraries used by js-waku.

## Create new keypair

Generate a new keypair to sign your messages:

```ts
import { generatePrivateKey, getPublicKey } from "js-waku";

const privateKey = generatePrivateKey();
const publicKey = getPublicKey(privateKey);
```

## Sign Waku Messages

As per version 1's [specs](https://rfc.vac.dev/spec/26/), signatures are only included in encrypted messages.
In the case where your app does not need encryption then you could use symmetric encryption with a trivial key.

You can learn more about encryption at [Encrypt Messages Using Waku Message Version 1](/docs/guides/04_encrypt_messages_version_1/).

### Using symmetric encryption

Given `symKey` the symmetric key used for encryption:

```ts
import { WakuMessage } from "js-waku";

const message = await WakuMessage.fromBytes(payload, myAppContentTopic, {
  encPublicKey: symKey,
  sigPrivKey: privateKey,
});
```

If encryption is not needed for your use case,
then you can create a symmetric key from the content topic:

```ts
import { hexToBuf } from "js-waku/lib/utils";
import { keccak256 } from "ethers/lib/utils";

const symKey = hexToBuf(keccak256(Buffer.from(myAppContentTopic, "utf-8")));
```

`symKey` can then be used to encrypt and decrypt messages on `myAppContentTopic` content topic.
Read [How to Choose a Content Topic](/docs/guides/01_choose_content_topic/) to learn more about content topics.

### Using asymmetric encryption

Given `recipientPublicKey` the public key of the message's recipient:

```ts
import { WakuMessage } from "js-waku";

const message = await WakuMessage.fromBytes(payload, myAppContentTopic, {
  encPublicKey: recipientPublicKey,
  sigPrivKey: privateKey,
});
```

## Verify Waku Message signatures

Two fields are available on signed `WakuMessage`s:

- `signaturePublicKey`: Holds the public key of the signer,
- `signature`: Holds the actual signature.

Thus, if you expect messages to be signed by Alice,
you can simply compare `WakuMessage.signaturePublicKey` with Alice's public key.
As comparing hex string can lead to issues (is the `0x` prefix present?),
simply use helper function `equalByteArrays`.

```ts
import { equalByteArrays } from "js-waku/lib/utils";

const sigPubKey = wakuMessage.signaturePublicKey;

const isSignedByAlice = sigPubKey && equalByteArrays(sigPubKey, alicePublicKey);

if (!isSignedByAlice) {
  // Message is not signed by Alice
}
```
