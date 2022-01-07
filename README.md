# eslint-plugin-pixellot

Plugin used by Pixellot company

## Installation

Install `@pixellot/eslint-plugin`:

```sh
npm install @pixellot/eslint-plugin --save-dev
```

## Usage

Add `pixellot` to the plugins section of your `.eslintrc` configuration file.
Then choose the configuration you wish (e.g: `cloudInfra`):

```json
{
    'plugins': [
        'pixellot'
    ],
    'extends': ['plugin:@pixellot/eslint-plugin/cloudInfra']
}
```

## Configurations
### _cloudInfra_
Used by the cloud infra team.
Based on `airbnb-base`, `eslint:recommended` and `jest`, and some rule tweaks
