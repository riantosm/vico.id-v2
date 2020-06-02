import firebase from 'firebase';
import {
  apiKey,
  appId,
  authDomain,
  databaseURL,
  measurementId,
  messagingSenderId,
  projectId,
  storageBucket,
} from 'react-native-dotenv';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
