# eslint-plugin-pixellot

Plugin used by Pixellot company

## Installation

Install `@pixellot/eslint-plugin`:
```sh
npm install @pixellot/eslint-plugin --save-dev
```
> **NOTE:**  You'll need npm 7 and above to install this plugin.

## Usage (one time per repo)

1. Install the plugin as explained above
2. Add `@pixellot` to the plugins section of your `.eslintrc` configuration file, then choose the configuration you wish (e.g: `cloudInfra`):
```json
{
    "plugins": [
        "@pixellot"
    ],
    "extends": ["plugin:@pixellot/cloudInfra"]
}
```
3. Add `.eslintignore` file to indicate ESLint to skip these files/folders (add others, if needed):
```js
node_modules
coverage
```
4. Add the eslint to the `.dockerignore`
```
.eslintrc.js
.eslintignore
```
5. Add the following to the `scripts` property in the `package.json` file:
```json
"lint": "eslint .",
"lint:fix": "eslint . --fix"
```
> **NOTE:**  You can now run `npm run lint` and `npm run lint:fix` to run the linter on all files / fix them accordingly.
6. Add the lint validation to the CI. You can use the `npm run lint` mentioned above.

## Configurations
### _cloudInfra_
Used by the cloud infra team.
Based on `airbnb-base`, `eslint:recommended` and `jest`, and some rule tweaks

## VSCode Integration
To use eslint with the VSCode IDE:
1. Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) VSCode extension
2. In VSCode menu choose: `File->Preferences->Settings`
3. **Add** the following to the `User` settings and save:
```json
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.format.enable": true,
    "editor.formatOnSave": true,
    "editor.formatOnType": true
```
> **NOTE:**  Use: VSCode >= 1.63.2, ESLint Extension >= 2.2.2