# Waku Documentation Portal

[![Waku Documentation Portal](https://img.shields.io/badge/docs.waku.org-black)](https://docs.waku.org/)

The Waku Documentation Portal can be accessed at [https://docs.waku.org/](https://docs.waku.org/) and was built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/en/)

## Installation

Clone this repository:

```shell
git clone https://github.com/waku-org/docs.waku.org
```

Install the dependencies:

```shell
yarn

# or

yarn install
```

## Running Locally

```shell
yarn start # Run 'node fetch-content.js' in the root directory to fetch remote files
```

Check for spelling errors before deploying:

```shell
yarn check:spell
```

Create a production build locally to check for errors:

```shell
yarn build # Runs 'node fetch-content.js' and then 'docusaurus build'
# The 'fetch-content.js' script fetches documents from the nwaku and research repositories.

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

```shell
yarn clear
```

## CI/CD

- [CI builds](https://ci.infra.status.im/job/website/job/docs.waku.org/) `master` and pushes to `deploy-master` branch, which is hosted at [https://docs.waku.org/](https://docs.waku.org/).
- [CI builds](https://ci.infra.status.im/job/website/job/dev-docs.waku.org/) `develop` and pushes to `deploy-develop` branch, which is hosted at [https://dev-docs.waku.org/](https://dev-docs.waku.org/).

The hosting is done using [Caddy server with Git plugin for handling GitHub webhooks](https://github.com/status-im/infra-misc/blob/master/ansible/roles/caddy-git).

Information about deployed build can be also found in `/build.json` available on the website.

## Change Process

1. Create a new working branch from develop: git checkout develop; git checkout -b my-changes.
2. Make your changes, push them to the origin, and open a Pull Request against the develop branch.
3. After approval, merge the pull request, and verify the changes on the staging server (e.g., https://dev.vac.dev).
4. When ready to promote changes to the live website, rebase the master branch on the staging changes: git checkout master; git pull origin master; git rebase origin/develop; git push.
