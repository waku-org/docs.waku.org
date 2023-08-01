# Waku Documentation Portal

[![Waku Documentation Portal](https://img.shields.io/badge/docs.waku.org-black)](https://docs.waku.org/)

The Waku Documentation Portal can be accessed at <https://docs.waku.org/> and was built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/)

## Installation

Clone this repository:

```bash
git clone https://github.com/waku-org/docs.waku.org
```

Install the dependencies:

```bash
yarn

# or

yarn install
```

## Running Locally

```bash
yarn start
```

Check for spelling errors before deploying:

```bash
yarn check:spell
```

Create a production build locally to check for errors:

```bash
yarn build

# test the build

yarn serve
```

## Configuration

Edit the `docusaurus.config.js` file located in the repository's root directory, and update the `businessUnit` field within the presets section. Here is a list of valid values for this field:

- Logos
- Codex
- Waku

Example:

```js
presets: [
  [
    '@acid-info/logos-docusaurus-preset',
    {
      businessUnit: 'Waku',
    },
  ],
],
```

This should suffice since Logos plugins will handle other configurations linked to the designated business unit. However, if you encounter any inaccuracies in the data provided by Logos Plugins, please visit the [Logos Docusaurus Plugins](https://github.com/acid-info/logos-docusaurus-plugins) page and submit an issue.

## Customisation

You can find the instructions on adding more documentation sections, localisation, and versioning on the [Docusaurus](https://docusaurus.io/docs) website.

> Note that theme customisation is limited; for further instructions on customizing your theme, head over to [Logos Docusaurus Theme](https://github.com/acid-info/logos-docusaurus-plugins/tree/main/packages/logos-docusaurus-theme/).

## Troubleshooting

Docusaurus depends heavily on caching to enhance site performance. If you make changes that do not appear in the portal, try clearing the cache by running:

```bash
yarn clear
```