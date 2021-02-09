import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBXdtzXttKjbsAaJa9uHxQ5GXh8l8kvUvc",
  authDomain: "money-targets.firebaseapp.com",
  projectId: "money-targets",
  storageBucket: "money-targets.appspot.com",
  messagingSenderId: "366699544228",
  appId: "1:366699544228:web:f77c521f6111cd38153031"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;


