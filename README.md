# Description

The project uses NX and Module Federation. During initialization, microfrontends were created: host, dashboard, invoice, and auth. The libraries axios and react-query were used, and styled-components was utilized for styling. Axios instances were defined for two backend URLs. An .env file was created with environment variables.

Each microfrontend contains webpack configuration files, and the Module Federation configuration was extracted into a separate file. Additionally, each microfrontend has an e2e folder for writing end-to-end tests using Cypress.

### Host
Remotes: `dashboard, invoice, auth`

Contains:
- A login form 
- A button to fetch data from the `BASE_URL` route, which requires a valid token.
- Navbar

### Dashboard
Remotes: `-`

Contains:
- Title

### Invoice
Remotes: `-`

Contains:
- Title

### Auth
Remotes: `-`

Contains:
- React context with fields: `isAuth, login(), logout(), isLoading`
- `useAuth` hook is used to access these fields and validate the context

Contains:
- A login form
- A button to fetch data from the `BASE_URL` route, which requires a valid token.
- Navbar

# Project start

## Install dependencies

Run command `npm install` to install dependencies

## Start Scripts

The following NPM scripts are defined to help you start and serve various parts of the application:

```sh
"start": "nx serve host --open --devRemotes=\"dashboard,invoice,auth\"",
"start:host": "nx serve host --open",
"start:dashboard": "nx serve dashboard --open",
"start:invoice": "nx serve invoice --open"
```

### `npm run start`
Will start host with all micro frontends and allow them to hot reload. Will open in default browser when it's built

Port: `4200`

### `npm run start:host`
Will start host with all micro frontends. Will open in default browser when it's built

Port: `4200`

### `npm run start:dashboard`
Will start dashboard micro frontend. Will open in default browser when it's built

Port: `4201`

### `npm run start:invoice`

Will start invoice micro frontend. Will open in default browser when it's built

Port: `4202`

### `npx nx dep-graph`

Will start server with micro frontend dependencies
