import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

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
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebasePlayers = firebaseDB.ref('players');


  export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebaseDB,
    firebasePlayers
  }