---
title: Transports in Waku
---

Waku v2 is built in top of libp2p, and like libp2p it strives to be transport agnostic. We define a set of recommended transports in order to achieve a baseline of interoperability between clients.

This section describes these recommended transports:

- Waku nodes uses TCP to communicate by default. A service node should be using TCP to listen to, and connect to other nodes.
- For browser environments, secure websocket is used. Service nodes are encouraged to setup a SSL certificate to enable incoming connections from browser and serve them.
- Other protocols such as [WebRTC](https://github.com/waku-org/js-waku/issues/20), [WebTransport](https://github.com/waku-org/js-waku/issues/697) and QUIC have been studied.
