# dfua-feedback

Extracted from Project Tardis and rewrited using Polymer 3, Firebase Firestore
and other

## Running the app locally

In order to run this app you will need to create a configuration file for 
development environment. In order to do that create a file named
`development.js` in the `app/src` directory.

```bash
mkdir -p ./app/src/config/
cat >./app/src/config/development.js <<EOF
const config = {
  firebase: {
    apiKey: '<YOUR_FIREBASE_KEY_HERE>',
    authDomain: '<YOUR_AUTH_DOMAIN_HERE>',
    projectId: '<YOUR_PROJECT_ID_HERE>',
  },
};

export default config;
EOF
```

When you have successfully created the development configuration file, run the
app with `yarn start` command and visit http://localhost:8080 to try your app in
action.
