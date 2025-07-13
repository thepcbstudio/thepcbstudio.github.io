# Contribution Guide

## Configure Project

### Clone

- Clone the repo.

### NodeJS

You can install the right version of NodeJS via any node version manager of your choice.

#### asdf

- `asdf plugin add nodejs`
- `asdf install`
- `asdf reshim nodejs`

#### nodenv

- `nodenv install`

#### fnm

- `fnm install`

#### nvm

- `nvm install`

## Package Manager

We use [Yarn 4](https://yarnpkg.com/getting-started/install) as a package manager.

### Dependencies

- `corepack enable`
- `yarn install`

### Configure VSCode for yarn

- `yarn dlx @yarnpkg/sdks vscode`

Ref: <https://yarnpkg.com/getting-started/editor-sdks>

You may need to reload/restart your VSCode after this to put the changes in effect.

## Linting & Formatting

We use [Biome](https://biomejs.dev) to enforce linting rules and format our code.

### Configure VSCode for Biome

Add below JSON configuration in your workspace settings (`./.vscode/settings.json`) in your local git repository.

This file is ignored in git version control. So it won't be committed. It's for you to configure your workspace settings in VSCode.

```json
{
  ...

  "editor.codeActionsOnSave": {
    "quickfix.biome": "explicit",
    "source.action.useSortedAttributes.biome": "explicit",
    "source.action.useSortedKeys.biome": "explicit",
    "source.fixAll.biome": "explicit",
    "source.organizeImports.biome": "explicit"
  },
  "editor.formatOnSave": true,
  "json.format.keepLines": true,
  "[javascript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[json]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[typescript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "biomejs.biome"
  },

  ...
}
```
