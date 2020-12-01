//import firebase SDK from npm install firebase node package
// Core firebase SDK
import firebase from 'firebase/app';
// Realtime database library
import 'firebase/database';

// our web app's configuration object
const firebaseConfig = {
  apiKey: "AIzaSyC29wsQViC0bRew3ZhWlRvbl2oH3bq9NnE",
  authDomain: "bookshelf-project-8f0d7.firebaseapp.com",
  databaseURL: "https://bookshelf-project-8f0d7.firebaseio.com",
  projectId: "bookshelf-project-8f0d7",
  storageBucket: "bookshelf-project-8f0d7.appspot.com",
  messagingSenderId: "543625730724",
  appId: "1:543625730724:web:4b1000b1da0e499ce7e431"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;