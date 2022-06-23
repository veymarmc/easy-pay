# React basic pay application for typescript.

This is a basic paying react application implemented with typescript powered by [create-react-app](https://create-react-app.dev/) typescript template.



# Application Information

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:ci`

Launches the test runner whitout interactive watch mode.\
This will be useful for ci/cd work later.

### `npm run lint`

Launches the eslint inspector intended also for ci/cd work.

### `npm run lint:fix`

Launches the eslint inspector and also run the --fix option in orden\
to apply all the lint defined rules.

### `npm run prettify`

Launches the prettier corrector.

### `npm run eslint-prettier-test`

Launches the eslint-config-prettier extra tool for checking if there\ are styles that are inconsistent with the eslint set rules.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Application Features

The current application was implemented taking on account the following features.

- The application has a single source of true as its storage state managed by redux.
- Using react-router for the application routing.
- Updating interface components according to the context (See AppBar)
- Sub components technique as used for most libraries.
- Class-free application only implemented with react-hooks.
- trying to follow good practices for organizing applications folder structure, using custom hooks, trying to avoid spaguetti code.
- powered by semantic-ui-react as the design library
- powered by SASS preprocessor.
- Applying component layouts to the application.
- following a more modular perspective when exporting packages (expose only the necessary things).
- using eslint-prettier tools with precommit hooks for unifying and standardizing the code when necessary.
- Making adjustments for making requests with the no-cache option if necessary.
- working with the last annd modern approach of redux (redux/toolkit)
- Using BEM notation for better encapsulate the application styles.
- Grouping the most common useful styles in order to easily use then when necessary.
- Making a pixel perfect intention for a little landing page.
- full adoption of custom hooks, also working with the the so useful hooks like: useRef, useMemo, useCallback, and the redux, and router useful hooks. (However the useRedux was not implemented).
- Make basic test with the environemnt of the routes and redux, However I was running off time for enriching the application with tests.

# Usage

- first ensure to have the back-end service run before get this up.
- **Important:** the previous provided back-end tested with this application has not cors permissions, so you should enable the cors permissions before running the app.
- Once all the first is done please make
```
npm i
npm start
```

- The current application only has the most basic functionality with an extra landing-page.

# The next steps
- This application like any other, always is required for continuous improvement in all complete areas. However for the next work (if any) the work will be required for completing the test and also implemented a test coverage control for teh application.

- **For the next demo,** this application will be deployed for testing it online :).