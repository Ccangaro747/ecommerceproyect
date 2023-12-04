import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNb6LMR_Yxix4gLdPsFJha-t4NjtuxFDQ",
  authDomain: "cc747-40462.firebaseapp.com",
  projectId: "cc747-40462",
  storageBucket: "cc747-40462.appspot.com",
  messagingSenderId: "471597257898",
  appId: "1:471597257898:web:d3aae064404c100aa96cd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
