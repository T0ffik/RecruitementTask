# Recruitment task

## How to run app

- You have to install Nodeal least 20.11.1 ver
- Clone This repository
- Run yarn install
- Run yarn start
- Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## Main goals of app:
- App display:
  - input to filter products by id
  - table with products fetched from api
  - pagination component for products
- Filtering and pagination should be performed within the API
- Reflecting pagination and filtering in the address URL
- User can share url to display same results
- Table rows should have backgoung color of color property of product
- User can change page of products by pagination component
- App should handle appi error like 4XX and 5XX

## Technologies used:
- Vite - create project
- React - framework
- Typescript - programming language
- Xstate - global state
- Mui - styling library

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn lint`

Run linter for project.

### `yarn lint:fix`

Fixing lint errors.

### `yarn lint:debug`

Debuging project by lint.