import Firebase from "firebase/app";
import "firebase/auth";

const FirebaseCredentials = {
  apiKey: "AIzaSyAAM2pSEHaENibmPxpyy-qRkscuzZCCbGE",
  authDomain: "kurdistan-animal-sanctuary.firebaseapp.com",
  projectId: "kurdistan-animal-sanctuary",
  storageBucket: "kurdistan-animal-sanctuary.appspot.com",
  messagingSenderId: "550205779361",
  appId: "1:`550205779361:web:e38c06eebca2543f276fe0",
};
// if a Firebase instance doesn't exist, create one
if (!Firebase.apps.length) {
  Firebase.initializeApp(FirebaseCredentials);
}

export default Firebase;
