# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

For our current stage, we use Vercel for Deployment and hosting. [Vercel](https://vercel.com/about) provides us with various benefits in the areas of performance and ease of use that is great for our initial stage.
Each project first needs to be defined & imported to Vercel (for this you can always contact Comms people).
After your project has been imported, all subsequent pushes to branches will generate [Preview Deployments](https://vercel.com/docs/concepts/deployments/environments#preview), and all changes made to the [Production Branch](https://vercel.com/docs/concepts/git#production-branch) (usually "main" or "master") will result in a [Production Deployment](https://vercel.com/docs/concepts/deployments/environments#production).
