import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyByGk5FWn_CghSMOBZQDXNVolgA74fn2FQ",
    authDomain: "bridge-45f35.firebaseapp.com",
    databaseURL: "https://bridge-45f35.firebaseio.com",
    projectId: "bridge-45f35",
    storageBucket: "bridge-45f35.appspot.com",
    messagingSenderId: "298100791307",
    appId: "1:298100791307:web:0eceffc37ec1838a740f0e",
    measurementId: "G-6E3PYK8BRM",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const projectAnalytics = firebase.analytics();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

projectAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

export { projectAuth, projectFirestore, projectAnalytics, timeStamp };
