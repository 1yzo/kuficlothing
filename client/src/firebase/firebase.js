import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyAk1HMONCD23a3wjjtfd-JRrTydSH9yaeM",
    authDomain: "kuficlothing-e33f8.firebaseapp.com",
    databaseURL: "https://kuficlothing-e33f8.firebaseio.com",
    projectId: "kuficlothing-e33f8",
    storageBucket: "kuficlothing-e33f8.appspot.com",
    messagingSenderId: "840864825"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };