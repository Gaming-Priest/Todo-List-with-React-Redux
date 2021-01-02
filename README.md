# React Hot (Experimental) Template

This is a React (with Hot-reloading) project template using webpack for Spck Editor Pro. This project template was made with the help of `createapp.dev`.

## Known Issues

Eruda Console does not work with Hot reloading templates because the DOM is handled by React-Hot-DOM and Eruda Console works by injecting a shadow node into the DOM. If you need console for this project switch the "Console" mode to "Legacy" in the settings which uses the legacy WebView basic console.

## Building and Running

Pressing the ▶ button will open the preview window.  If `dist/bundle.js` file does not exist, it indicates this may be the first run and `install-dep` in `package.json` will be called. If the url `http://localhost:9950` is unreachable, it will start the webpack-dev-server by running `start` in `package.json`. The `spck.config.json` file controls which command to call when pressing ▶ (which can be modified in **Run Settings**).

Some packages like `webpack`, `typescript`, `babel`, `react`, `ts-loader` have been installed globally to save space, unfortunately other packages do not work when installed globally and must be installed in the project folder such as `@babel/preset-env`, and `css-loader`.

The task `build-dev` creates a development build of the project and generates:

- `dist/bundle.js`

When `build-dev` finishes, the preview window will launch.

## Limitations in Android

Due to security restrictions in Android, execute permissions on write-allowed storage is likely forbidden on most stock devices. This prevents some npm scripts from working properly as `npm run` rely on the use of `sh` which requires exec permissions.

The `node` program is also built as a shared library for compatibility with future versions of Android and can only be accessed from the terminal and not `sh`.

For these reasons, using `npm run ...` will not work from the terminal, but entering the command (`webpack --mode development`) directly in the terminal will work.
