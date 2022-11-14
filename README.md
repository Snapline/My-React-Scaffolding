# Basic Architect Tool: Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). We call it CRA for short.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them.
# CRACO

CRACO means Create React App Configuration Override. It's an easy and comprehensible configuration layer for create-react-app.

We all know the one of the benefits of CRA is its encapsulation for webpack. If we use `yarn eject`, this benefit is gone.

Get all the benefits of create-react-app and customization without using 'eject' by adding a single configuration (e.g. `craco.config.js`) file at the root of your application and customize your eslint, babel, postcss configurations and many more.

**So the scripts in `package.json` all replace `react-scripts` to be `craco`**

# Files  Structure

```
main files and folders
│   craco.config.js   //the webpack customized config
│   global.d.ts   //global declare for typescript
│   tsconfig.json   //the configuration of typescript
│
└───config
│   └───dev.js    //the development config
│   └───prod.js    //the production config
│   └───test.js    //the test config
│
└───src
│   │   declarations.d.ts   //the declare for typescript
│   │   index.tsx   //the entrance of project
│   │   App.tsx   //the root component of project
│   │
│   └───__test__    //the unit test files
│   └───assets    //the icons or images files
│   └───components    //the components for the whole project
│   └───enum    //enum declaration of typescript
│   └───helper    //the library or tool for the whole project
│   └───hooks    //the customized hooks
│   └───interfaces    //interfaces declaration of typescript
│   └───pages    //the pages on web portal
│   └───redux    //the customized hooks
│       └───features    //the module reducers and actions
│       └───store    //the store of redux
│   └───route    //the routes for every page
│   └───services    //the request module
│   └───types    //types declaration of typescript
```
