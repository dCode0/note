import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import { FIREBASE_APP } from "./value";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDTl9PTrs0VOgt7KrFwyeNRpYSWVoucZao",
  authDomain: "note-pad-24929.firebaseapp.com",
  databaseURL: "https://note-pad-24929.firebaseio.com",
  projectId: "note-pad-24929",
  storageBucket: "note-pad-24929.appspot.com",
  messagingSenderId: "sender-id",
  appId: "1:60972038479:ios:5fc21b92c65a427b03ad3a",
  measurementId: "G-measurement-id",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig, FIREBASE_APP);
} else {
  firebase.app(FIREBASE_APP);
}