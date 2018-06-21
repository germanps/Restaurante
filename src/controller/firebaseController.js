import * as firebase from 'firebase';

// Initialize Firebase
var config = {
   apiKey: "AIzaSyBAr5IJAxIyWfCft3jtbcN1pFE2XPK7mXo",
   authDomain: "administracion-5a08d.firebaseapp.com",
   databaseURL: "https://administracion-5a08d.firebaseio.com",
   projectId: "administracion-5a08d",
   storageBucket: "administracion-5a08d.appspot.com",
   messagingSenderId: "774203834275"
};
firebase.initializeApp(config);

const database = firebase.database();
const alimentos = database.ref('alimentos/');
const bebidas = database.ref('bebidas/');

const datos = {alimentos, bebidas};

export default datos;