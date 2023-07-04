---
title: "Bootstrap DApps with @waku/create-app"
---

This guide provides detailed steps to bootstrap your next `js-waku` project from [various example templates](https://github.com/waku-org/js-waku-examples) using the [@waku/create-app](https://www.npmjs.com/package/@waku/create-app) package.

## Usage

Initialize a new `js-waku` template using any of the following methods:

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs>
<TabItem value="npx" label="npx">

```shell
npx @waku/create-app [PROJECT DIRECTORY]
```

</TabItem>
<TabItem value="npm" label="npm">

```shell
npm init @waku/app [PROJECT DIRECTORY]
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn create @waku/app [PROJECT DIRECTORY]
```

</TabItem>
</Tabs>

Next, select a template to initialize your app from:

```shell
npx @waku/create-app my-app       
? Select template … 
❯ light-chat
  eth-pm
  light-js

  <...>
```

:::tip
If you have previously installed `@waku/create-app` globally, we recommend uninstalling the package to ensure that `npx` always uses the latest version.
:::

## Contributing New Templates

We welcome and appreciate the contributions of templates for the `@waku/create-app` package. To contribute a template, please follow these steps:

1. Create the template, ensuring it is user-friendly and thoroughly tested.
2. Place the template in the `examples` folder in the [js-waku-examples](https://github.com/waku-org/js-waku-examples) repository's root.
3. Commit your changes with a detailed message and push them to your forked repository.
4. Finally, submit a pull request to the [js-waku-examples](https://github.com/waku-org/js-waku-examples) repository.
5. Our team will carefully review your submission and merge it upon approval.