import {firebase} from '@firebase/app';
import '@firebase/storage';
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBcyx_o8ywKYbFUaska-h3EE01Ykpzal0U",
    authDomain: "firegram-3b2aa.firebaseapp.com",
    projectId: "firegram-3b2aa",
    storageBucket: "firegram-3b2aa.appspot.com",
    messagingSenderId: "49610535399",
    appId: "1:49610535399:web:06aa0a9c1d29e76b33cd42"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, projectStorage, timestamp};