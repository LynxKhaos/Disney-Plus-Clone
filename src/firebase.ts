import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC-BPQel6yHY0mKJsB45XteXDxj0-XRpEM",
  authDomain: "disney-plus-64f3c.firebaseapp.com",
  projectId: "disney-plus-64f3c",
  storageBucket: "disney-plus-64f3c.appspot.com",
  messagingSenderId: "815845792229",
  appId: "1:815845792229:web:de13176cfbc7cc6f70b70c"
};

const firebaseApp: any = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
