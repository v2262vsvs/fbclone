
import firebase from "firebase"
import  "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyAKxrjy4vt4C-nU2NSpZGyZH_KU3VSb4JY",
    authDomain: "clonefb-c405e.firebaseapp.com",
    projectId: "clonefb-c405e",
    storageBucket: "clonefb-c405e.appspot.com",
    messagingSenderId: "410783312702",
    appId: "1:410783312702:web:47184d54263d765fe69a6f"
  };

  const app = !firebase.apps.length  ? firebase.initializeApp(firebaseConfig)  : firebase.app();
  const db = app.firestore();
  const storage = firebase.storage();

  export {db, storage};

/*
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKxrjy4vt4C-nU2NSpZGyZH_KU3VSb4JY",
    authDomain: "clonefb-c405e.firebaseapp.com",
    projectId: "clonefb-c405e",
    storageBucket: "clonefb-c405e.appspot.com",
    messagingSenderId: "410783312702",
    appId: "1:410783312702:web:47184d54263d765fe69a6f"
  };

// Initialize Firebase with a "default" Firebase project
const app = initializeApp(firebaseConfig);

console.log(app.name);  // "[DEFAULT]"

// Option 1: Access Firebase services via the defaultProject variable
let storage = getStorage(app);
let db = getFirestore(app);

// Option 2: Access Firebase services using shorthand notation
//storage = getStorage();
//db = getFirestore();

export {db, storage};
*/