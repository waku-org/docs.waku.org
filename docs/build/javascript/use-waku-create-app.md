---
title: "Scaffold DApps Using @waku/create-app"
hide_table_of_contents: true
---

This guide provides detailed steps to bootstrap your next `@waku/sdk` project from [various example templates](https://github.com/waku-org/js-waku-examples/tree/master/examples) using the [@waku/create-app](https://www.npmjs.com/package/@waku/create-app) package.

## Usage

Initialise a new `@waku/sdk` template using any of the following methods:

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs>
<TabItem value="npm" label="NPM">

```shell
npx @waku/create-app [PROJECT DIRECTORY]
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn create @waku/app [PROJECT DIRECTORY]
```

</TabItem>
</Tabs>

Next, select a template to initialise your app from:

![waku create app demo](/img/waku-create-app-demo.gif)

:::tip
If you have previously installed `@waku/create-app` globally, we recommend uninstalling the package to ensure that `npx` always uses the latest version.
:::

## Contributing new templates

We welcome and appreciate the contributions of templates for the `@waku/create-app` package. To contribute a template, please follow these steps:

1. Create the template, ensuring it is user-friendly and thoroughly tested.
2. Place the template in the `examples` folder in the [js-waku-examples](https://github.com/waku-org/js-waku-examples) repository's root.
3. Commit your changes with a detailed message and push them to your forked repository.
4. Finally, submit a pull request to the [js-waku-examples](https://github.com/waku-org/js-waku-examples) repository.
5. Our team will carefully review and merge your submission upon approval.

Waku also provides bounties to encourage community members to contribute to the network and earn rewards. To participate in the bounty program, head to [https://github.com/waku-org/bounties](https://github.com/waku-org/bounties).
