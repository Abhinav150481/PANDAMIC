import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAkEEo9-bnVXPOmX4n7JffeMy17rEYEzMA",
  authDomain: "pandamic-requirment-app.firebaseapp.com",
  projectId: "pandamic-requirment-app",
  storageBucket: "pandamic-requirment-app.appspot.com",
  messagingSenderId: "536403790309",
  appId: "1:536403790309:web:8189768d50cdda9263870c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
