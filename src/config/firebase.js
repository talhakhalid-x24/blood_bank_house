import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBVQIigutKoiN28jLsq8HeWfxA9YNZhnIc",
  authDomain: "blood-bank-house.firebaseapp.com",
  databaseURL: "https://blood-bank-house-default-rtdb.firebaseio.com",
  projectId: "blood-bank-house",
  storageBucket: "blood-bank-house.appspot.com",
  messagingSenderId: "673002372494",
  appId: "1:673002372494:web:f6c2531cdf1b80aba478df",
  measurementId: "G-5QTPWXKVR4"
};

  if(!firebase.apps.length){
    var Firebase = firebase.initializeApp(firebaseConfig);
    // firebase.analytics();
  }
  export default Firebase;