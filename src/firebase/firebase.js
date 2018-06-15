import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyA1nmx9Cn7-oibNbYzebngvQRo1uy5aI9w",
    authDomain: "imagelibrary-47a2f.firebaseapp.com",
    databaseURL: "https://imagelibrary-47a2f.firebaseio.com",
    projectId: "imagelibrary-47a2f",
    storageBucket: "imagelibrary-47a2f.appspot.com",
    messagingSenderId: "282133875840"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const storage = firebase.storage();

export {
    db,
    auth,
    storage
};