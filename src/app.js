import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyB0tBspJ_rMfSybR__zuMOisPL7Emn3jbU",
    authDomain: "tcs-io-draft.firebaseapp.com",
    databaseURL: "https://tcs-io-draft.firebaseio.com",
    projectId: "tcs-io-draft",
    storageBucket: "tcs-io-draft.appspot.com",
    messagingSenderId: "225760555371",
    appId: "1:225760555371:web:f2a5339d890c893606dc2e"
});

export const db = app.firestore();
export const auth = app.auth;
