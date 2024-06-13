## Start Scripts

The following NPM scripts are defined to help you start and serve various parts of the application:

```sh
"start": "nx serve host --open --devRemotes=\"dashboard,invoice,auth\"",
"start:host": "nx serve host --open",
"start:dashboard": "nx serve dashboard --open",
"start:invoice": "nx serve invoice --open"
```

### npm run start
Will start host with all micro frontends and allow them to hot reload. Will open in default browser when it's built

Port: `4200`

### npm run start:host
Will start host with all micro frontends. Will open in default browser when it's built

Port: `4200`

### npm run start:dashboard
Will start dashboard micro frontend. Will open in default browser when it's built

Port: `4201`

### npm run start:invoice

Will start invoice micro frontend. Will open in default browser when it's built

Port: `4202`
