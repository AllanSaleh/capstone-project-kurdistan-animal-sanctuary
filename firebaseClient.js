const firebase = require("firebase")
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAAM2pSEHaENibmPxpyy-qRkscuzZCCbGE",
  authDomain: "kurdistan-animal-sanctuary.firebaseapp.com",
  projectId: "kurdistan-animal-sanctuary",
  storageBucket: "kurdistan-animal-sanctuary.appspot.com",
  messagingSenderId: "550205779361",
  appId: "1:550205779361:web:e38c06eebca2543f276fe0"
}
export default function firebaseClient{
    if(!firebase.apps.length){
        firebase.intializeApp(FIREBASE_CONFIG)
    }
}
