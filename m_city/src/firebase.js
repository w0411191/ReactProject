import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyC0F2fuvJXbkRnu0TKlue8KLx1e8S26-iY",
    authDomain: "m-city-d3fbf.firebaseapp.com",
    databaseURL: "https://m-city-d3fbf.firebaseio.com",
    projectId: "m-city-d3fbf",
    storageBucket: "m-city-d3fbf.appspot.com",
    messagingSenderId: "297004915617"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();

  firebaseDB.ref('matches').once('value').then((snapshot) => {
    console.log(snapshot.val())
  })