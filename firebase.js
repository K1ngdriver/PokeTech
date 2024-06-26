import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2iWJ7-lqp88j6N9thSMXqIGJLht_vjws",
  authDomain: "poketech-848d9.firebaseapp.com",
  projectId: "poketech-848d9",
  storageBucket: "poketech-848d9.appspot.com",
  messagingSenderId: "391423837828",
  appId: "1:391423837828:web:4cae97e0ecaf8c3a6764d1",
  measurementId: "G-GT1YEZWV7C",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
