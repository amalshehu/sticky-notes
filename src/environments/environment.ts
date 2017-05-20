// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
   firebase: {
    apiKey: 'AIzaSyAin5DbqVpuaC64ymdfGvd8McTXC9U3uVc',
    authDomain: 'sticky-notes-c7b4f.firebaseapp.com',
    databaseURL: 'https://sticky-notes-c7b4f.firebaseio.com',
    projectId: 'sticky-notes-c7b4f',
    storageBucket: 'sticky-notes-c7b4f.appspot.com',
    messagingSenderId: '149288624175'
  }
};
