// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBX1h29N8A2ypc_cR6HPw2IlhZ3SprNkPY',
    authDomain: 'dobeerman-movie-quotes.firebaseapp.com',
    databaseURL: 'https://dobeerman-movie-quotes.firebaseio.com',
    projectId: 'dobeerman-movie-quotes',
    storageBucket: 'dobeerman-movie-quotes.appspot.com',
    messagingSenderId: '522977842520'
  }
};
