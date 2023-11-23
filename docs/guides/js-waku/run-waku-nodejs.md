---
title: "Run @waku/sdk in a NodeJS Application"
---

While the `@waku/sdk` package is primarily designed for browser environments, you can use it in a NodeJS application. However, there are certain limitations and considerations to keep in mind. This guide provides a comprehensive overview of using `@waku/sdk` in NodeJS.

## Limitations

### API Compatibility

`@waku/sdk` prioritises browser compatibility, avoiding NodeJS APIs for simpler bundling. This design choice enhances browser API compatibility but sacrifices NodeJS optimisation. While many browser APIs work in NodeJS, they might need better optimisation.

### Protocol Implementation

`@waku/sdk` focuses on the client side of the [Request/Response protocol](/learn/concepts/network-domains#requestresponse-domain). We'll have to replicate all the functionalities added to [nwaku](/guides/run-nwaku-node) to implement extra features.

### Codebase Complexity

`@waku/sdk` aims to provide optimal default for the browser, striking a balance between browser and NodeJS compatibility while ensuring simplicity will add complexity.

### Browser-Specific Protocols

Certain features in `@waku/sdk` are tailored for browsers and might not translate seamlessly to NodeJS. For example, only `WebSocket` is supported in the browser, whereas a NodeJS application can benefit from using [transport methods](/learn/concepts/transports) like `TCP`.

`@waku/sdk` default peer management caters to the browser's ephemeral nature, which is different for NodeJS. This is why [DNS Discovery](/learn/concepts/dns-discovery) and [Peer Exchange](/learn/concepts/peer-exchange) are the default discovery mechanisms for the browser but not for NodeJS and desktop applications.

## Recommendations

Before using `@waku/sdk` in a NodeJS environment, take into account these limitations. For a more optimised solution, we recommend [running nwaku in a Docker container](/guides/nwaku/run-docker) and consuming its [REST API](https://waku-org.github.io/waku-rest-api/).

## Future Developments

There are plans to release a NodeJS package based on [nwaku](/guides/run-nwaku-node) to streamline the process of using Waku Network features in NodeJS applications. You can track the progress and updates here: <https://github.com/waku-org/nwaku/issues/1332>.