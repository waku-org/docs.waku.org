---
title: "Build React DApps Using @waku/react"
---

The [@waku/react](https://www.npmjs.com/package/@waku/react) package provides components and UI adapters to effortlessly integrate `js-waku` into React projects. This guide provides detailed steps for using `@waku/react` in your project.

## Install the Dependencies

First, setup a project using any [production-grade React framework](https://react.dev/learn/start-a-new-react-project) or [Create React App (CRA)](https://create-react-app.dev/docs/getting-started) or existing React project. For this guide, we will create a boilerplate using `Create React App`:

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

<Tabs>
<TabItem value="npx" label="npx">

```shell
npx create-react-app [PROJECT DIRECTORY]
```

</TabItem>
<TabItem value="npm" label="npm">

```shell
npm init react-app [PROJECT DIRECTORY]
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn create react-app [PROJECT DIRECTORY]
```

</TabItem>
</Tabs>

Next, install the `@waku/react` package using your preferred package manager:

<Tabs>
<TabItem value="npm" label="npm">

```shell
npm install @waku/react
```

</TabItem>
<TabItem value="yarn" label="Yarn">

```shell
yarn add @waku/react
```

</TabItem>
</Tabs>

## Create a Waku Node

## Create an Encoder and Decoder

## Send Messages Using Light Push

## Receive Messages Using Filter

## Retrieve Messages Using Store

:::tip
You have successfully integrated `js-waku` into a React project using the `@waku/react` package. For a working demo, check out the [web-chat](https://github.com/waku-org/js-waku-examples/tree/master/examples/web-chat) example.
:::