## Contributing to Astro

It's awesome that you want to contribute to Astro! Before proceeding, please read our [Code of Conduct](.github/CODE_OF_CONDUCT.md).

## How to do a new package release

> Warning: Only members from Magnetis are allowed to deploy a new version.

Before starting the release process, make sure you have the access to @magnetis organization at npm and you have yarn or npm installed.

Before creating a new build, check if everything is ok

```
npm lint
```

Then, create the release branch, this must follow the pattern:

```
release/x.x.x
```

Create a new build running

```
npm build
```

And don't forget to write the changes at [Changelog](CHANGELOG.md). Create a new pull request with your changes and after the changes being merged to main branch, change your local branch to main, update it and follow the default release process for a npm package.

```
npm login
```

```
npm publish
```
