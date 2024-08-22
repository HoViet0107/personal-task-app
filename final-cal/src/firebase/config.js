// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get,remove,orderByChild, startAt, endAt,query,update } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAAeGX3hrpOvwPW4b9592BB9EHenjNyeIo",
  authDomain: "final-6482f.firebaseapp.com",
  databaseURL: 'https://final-6482f-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: "final-6482f",
  storageBucket: "final-6482f.appspot.com",
  messagingSenderId: "993703155420",
  appId: "1:993703155420:web:f2316fa78778d17a998619",
  measurementId: "G-M9G5NTYFQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, get,remove,orderByChild, startAt, endAt,query,update };