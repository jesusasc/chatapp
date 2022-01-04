import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC3TMt8lPS0QoLdnfmg1gKT_IcaTOoAzec",
  authDomain: "chat-1b7b3.firebaseapp.com",
  projectId: "chat-1b7b3",
  storageBucket: "chat-1b7b3.appspot.com",
  messagingSenderId: "913535880367",
  appId: "1:913535880367:web:44561b8f18f5ceb18e985a"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}