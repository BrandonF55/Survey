import { initializeApp } from "firebase/app";
import { initializeFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// }

const firebaseConfig = {
    apiKey: "AIzaSyD9DJhiwVedcFJGb5fArXEgcH2wljGGsJM",
    authDomain: "surveyone-d04bb.firebaseapp.com",
    projectId: "surveyone-d04bb",
    storageBucket: "surveyone-d04bb.appspot.com",
    messagingSenderId: "873253255829",
    appId: "1:873253255829:web:b4d51ae888f70e808db99c"
  };
  

const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

export default db;