// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  BASE_URL: 'http://localhost:4200',
  firebase: {
    apiKey: "AIzaSyBkea7kv_VpJUkAjFIV5xxmfZxI1wMwUW0",
    authDomain: "training-vision.firebaseapp.com",
    databaseURL: "https://training-vision.firebaseio.com",
    projectId: "training-vision",
    storageBucket: "training-vision.appspot.com",
    messagingSenderId: "511746183482"
  }
};