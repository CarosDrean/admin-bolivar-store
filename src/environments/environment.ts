// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: 'http://localhost:3000/graphql',
  firebase: {
    apiKey: 'AIzaSyD1jgA0v9eK7QMLaWhCEYAYK6-NL6kEcqo',
    authDomain: 'bolivar-store.firebaseapp.com',
    databaseURL: 'https://bolivar-store.firebaseio.com',
    projectId: 'bolivar-store',
    storageBucket: 'bolivar-store.appspot.com',
    messagingSenderId: '520979800389',
    appId: '1:520979800389:web:edadb42e70608f7deb1e2c',
    measurementId: 'G-XG93XTLQH3'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
