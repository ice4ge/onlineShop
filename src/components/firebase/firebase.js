import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAPR9T1Dg2Cs6MES_BQ2yNUMZjJvoF8H3Q",
    authDomain: "flyshop-4e6ea.firebaseapp.com",
    databaseURL: "https://flyshop-4e6ea.firebaseio.com",
    projectId: "flyshop-4e6ea",
    storageBucket: "flyshop-4e6ea.appspot.com",
    messagingSenderId: "1086378208337",
    appId: "1:1086378208337:web:262903bf3371ac5ff61c70",
    measurementId: "G-6GJZY51S88"
};

firebase.initializeApp(config);
export default firebase;