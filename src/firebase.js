import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDqNXGj7MFF4_PFMpt35OM_iH8ZMvIh56I",
  authDomain: "instagram-clone-curso-35050.firebaseapp.com",
  projectId: "instagram-clone-curso-35050",
  storageBucket: "instagram-clone-curso-35050.appspot.com",
  messagingSenderId: "687308939339",
  appId: "1:687308939339:web:c116665e4d310956e5adce",
  measurementId: "G-TE3FLPN178"
  };

  firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};