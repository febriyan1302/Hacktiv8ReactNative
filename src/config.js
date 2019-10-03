import Firebase from 'firebase';

let firebaseConfig = {
    apiKey: "AIzaSyDv4B0iOjjT83_6SJhwdaB2LwXhmsXU3RQ",
    authDomain: "febriyan1302.firebaseapp.com",
    databaseURL: "https://febriyan1302.firebaseio.com",
    projectId: "febriyan1302",
    storageBucket: "febriyan1302.appspot.com",
    messagingSenderId: "270469628086",
    appId: "1:270469628086:web:6df46283e72c50e1272617"
};

let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();