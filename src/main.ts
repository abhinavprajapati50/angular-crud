import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));



  // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCnEvW1xIfgpUxq2aLFsETo5M04RPkVEYs",
//   authDomain: "angular-test-crud.firebaseapp.com",
//   projectId: "angular-test-crud",
//   storageBucket: "angular-test-crud.appspot.com",
//   messagingSenderId: "978500674151",
//   appId: "1:978500674151:web:e883625cd9d81a56d7eac2",
//   measurementId: "G-4MCLBGEPGF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);