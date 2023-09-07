---
title: How to Debug Your Waku DApp and WebSocket
---

This guide provides detailed steps to enable and use debug logs to troubleshoot your Waku DApp, whether in a NodeJS or browser environment and check your WebSocket connections in [nwaku](/guides/run-nwaku-node).

## Enabling Debug Logs

When resolving issues in your Waku DApp, debug logs can be helpful. The `@waku/sdk` and `libp2p` packages use the debug tool to handle and show logs that help you debug effectively.

### NodeJS Environments

To enable debug logs for `@waku/sdk` on NodeJS, you must set the `DEBUG` environment variable. To only enable debug logs for `@waku/sdk`:

```shell
export DEBUG=waku*
```

To enable debug logs for both `@waku/sdk` and `libp2p`:

```shell
export DEBUG=waku*,libp2p*
```

To enable debug logs for all components:

```shell
export DEBUG=*
```

### Browser Environments

To view debug logs in your browser's console, modify the local storage and add the `debug` key. Here are guides for various modern browsers:

- [Google Chrome](https://developer.chrome.com/docs/devtools/storage/localstorage/)
- [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/local_storage_session_storage/index.html)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

| KEY | VALUE | DESCRIPTION |
| - | - | - |
| `debug` | `waku*` | Enables `@waku/sdk` debug logs |
| `debug` | `waku*,libp2p*` | Enables `@waku/sdk` and `libp2p` debug logs |
| `debug` | `*` | Enables all debug logs |

## Checking WebSocket Setup

[Nwaku](/guides/run-nwaku-node) provides native support for WebSocket (`ws`) and WebSocket Secure (`wss`) protocols. These are the only [transports](/overview/concepts/transports) supported for connecting to the Waku Network via browsers.

It's important to note that browsers impose certain limitations on WebSocket usage:

- **Secure Context Requirement**: Insecure subroutines are prohibited in secure contexts. On an `https://` webpage, only `wss` connections are permitted, while `ws` connections are not allowed. This restriction does not apply if the webpage is served locally, like on `localhost` or `127.0.0.1`.
- **Certificate Validation**: Certificate validation rules are consistent for `https` and `wss` connections. Certificates must not be expired, issued by a recognized Certificate Authority (CA), and match the domain name, among other criteria.
- **User Feedback on Errors**: Web browsers do not display errors related to subroutines to the user. If a WebSocket connection encounters an issue, users won't be alerted directly; you'll need to check the browser's console for error details.

If you encounter difficulties when connecting to a remote node using `wss`, follow these steps:

### Try Websocat for Connection

Attempt to connect using [websocat](https://github.com/vi/websocat), a tool for WebSocket interactions. Test the WebSocket port using the command:

```shell
websocat -v wss://[WEBSOCKET HOST]:[WEBSOCKET PORT]
```

For example, consider a `nwaku` node with the multiaddr as `/dns4/nwakunode.com/tcp/1234/wss/p2p/16...`:

```shell
$ websocat -v wss://nwakunode.com:1234
# ...
[INFO  websocat::ws_client_peer] Connected to ws
```

The connection works if the `[INFO  websocat::ws_client_peer] Connected to ws` log entry appears. If not, [check that the certificate is valid](#check-certificate-validity)

### Check Certificate Validity

Verify the certificate's validity by passing the `-k` or `--insecure` flag to handle invalid certificates in `websocat`:

```shell
websocat -v -k wss://nwakunode.com:1234
```

If this works, the certificate's invalidity is the problem, and you should investigate the cause of the error if not, [check if the WebSocket port is accessible](#check-websocket-port-accessibility).

### Check WebSocket Port Accessibility

Use `telnet` or another networking tool to verify if the WebSocket port is open and accessible. For example, if the multiaddr is `/dns4/nwakunode.com/tcp/1234/wss/p2p/16...`, use the command:

```shell
$ telnet nwakunode.com 1234
Trying 123.123.123.123...
Connected to nwakunode.com.
# ...
```

If the connection succeeds, there might be an issue with `nwaku`. Consider seeking support on the [Waku Discord](https://discord.waku.org) or [raise an issue](https://github.com/waku-org/nwaku/issues/new). If the connection fails, ensure that the WebSocket port is open.