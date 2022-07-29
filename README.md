## Description

Content of `https://waku.guide` website. 

## Practical notes
- Please keep this repo clean and for markdown content ONLY
- In case you have any issue with rendering, how website looks (design), etc, please file an issue on [logos website builder](https://github.com/acid-info/logos-site-builder/issues). And/or feel free to contact Amir.

## Continuous Integration

- `develop` branch is pushed to [dev.waku.guide](https://dev.waku.guide) via GitHub Action.
- `master` branch is pushed to [waku.guide](https://waku.guide) via GitHub Action.

## Change Process

1. Create a new working branch from `develop`: `git checkout develop; git checkout -b my-changes`,
2. Proceed with changes, push to `origin` and open a Pull Request against `develop`,
3. Once approved, merge pull request, check changes on [dev.waku.guide](https://dev.waku.guide),
4. Once ready to promote to live website, rebase master on develop: `git checkout master; git pull master; git rebase origin/develop; git push`.
