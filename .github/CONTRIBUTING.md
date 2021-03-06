# Contributing Guide

# Table of Contents

- [Branch Naming](#branch-naming)
- [Commit Messages](#commit-messages)
- [Committing](#committing)
- [Opening a PR](#opening-a-pr)
- [Creating a new Release](#creating-a-new-release)
- [Troubleshooting](#troubleshooting)

## Standards

_The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt)._

### Branch Naming

Every branch **MUST** be prefixed with a valid type that describes its main purpose.

| Type          | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| main          | Represents production code                                                  |
| feature/\*    | Represents new features or improvements on some feature that already exists |
| bugfix/\*     | Represents a bugfix                                                         |
| release/x.x.x | New release                                                                 |
| hotfix/\*     | Fix to be applied on production code                                        |
| chore/\*      | Represents changes that do not affect codebase                              |

### Commit Messages

We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) with [Angular Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines) as pattern.

Shortly, a commit:

- **MUST** have a valid type;
- **MAY** have a scope;
- **MUST** have a description, starting with capital letter;
- **MAY** have a body;
- **MAY** have footer(s);
- **MUST NOT** end with period

#### Valid Types

- **_fix_**: Patches a bug in the codebase;
- **_feat_**: Introduces a new feature to the codebase;
- **_build_**: Changes that affect the build system or external dependencies;
- **_ci_**: Changes to our CI configuration files and scripts;
- **_docs_**: Documentation only changes;
- **_style_**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc);
- **_refactor_**: A code change that neither fixes a bug nor adds a feature;
- **_perf_**: A code change that improves performance;
- **_test_**: Adding missing tests or correcting existing tests;
- **_chore_**: Changes that do not affect codebase and doesn't fit any other type;

#### Examples

![Bad](https://img.shields.io/badge/-Bad-red)

```
feat: implement GhostButton.
```

![Bad](https://img.shields.io/badge/-Bad-red)

```
Implement GhostButton
```

![Good](https://img.shields.io/badge/-Good-green)

```
feat(Buttons): Implement GhostButton

```

### Committing

We recommend you to use `yarn cz` when committing. That way, you'll be presented an interactive prompt to build out commit message. But don't worry, if you prefer to commit in any other way, our project uses CommitLint to make sure patterns are being followed.

### Opening a PR

Where applicable, you **MUST** add the Jira ticket from our board on the PR's title in the following pattern: `[JIRA_TICKET] Your PR Title`. _eg_.:

```
[AST-42] Fix Button alignment
```

#### QA Proccess

After your PR is approved and before it's merged, it must be ran through the QA process. For that, you **MUST** write a script for testing the changes you've made. The QA will be done in a dev environment using an iOS Simulator or Android Emulator.

:warning: Don't forget to implement the stories in storybook, in order to make QA possible.

#### Merging Branches

It is **RECOMMENDED** that you choose the `Rebase and Merge` approach when merging a PR into main branch.

### Creating a new Release

We use [Semantic Versioning](https://semver.org/) on this package's release. A quick summary of this principle is:

**Given a version number _MAJOR.MINOR.PATCH_, increment the:**

1. _MAJOR_ version when you make incompatible API changes,
2. _MINOR_ version when you add functionality in a backwards compatible manner, and
3. _PATCH_ version when you make backwards compatible bug fixes.

To release a new version, you **MUST** create a new branch from main with name in the release format `release/vx.x.x`. After that, simply run `npm version [major|minor|patch]` according to the release type you're doing.

This command will do a lot for you:

1. bump the package.json version;
2. generate the changelog; and
3. commit these changes in a single commit.

After that, you can just push this to remote and open the release PR. :rocket:

:warning: _Don't forget to add the **release** label_ :wink:

Once your PR is approved and merged, you **MUST** [draft a new release](https://github.com/magnetis/astro-native/releases/new) targeting the bump version commit and with the changelog generated by the bump. After you publish this release, the npm deploy will be done automatically by our CI.

### Troubleshooting

#### Key words for use to indicate requirement levels

1. `MUST` This word, or the terms "REQUIRED" or "SHALL", mean that the definition is an absolute requirement of the specification.

2. `MUST NOT` This phrase, or the phrase "SHALL NOT", mean that the
   definition is an absolute prohibition of the specification.

3. `SHOULD` This word, or the adjective "RECOMMENDED", mean that there may exist valid reasons in particular circumstances to ignore a particular item, but the full implications must be understood and carefully weighed before choosing a different course.

4. `SHOULD NOT` This phrase, or the phrase "NOT RECOMMENDED" mean that there may exist valid reasons in particular circumstances when the particular behavior is acceptable or even useful, but the full implications should be understood and the case carefully weighed before implementing any behavior described with this label.

5. `MAY` This word, or the adjective "OPTIONAL", mean that an item is
   truly optional.
