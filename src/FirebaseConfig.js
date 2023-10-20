import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyA8tnZ2RIWOM9POzCEMFrVVFEt-5clkJOg",
  authDomain: "khaopiyo-e1ea8.firebaseapp.com",
  projectId: "khaopiyo-e1ea8", 
  storageBucket: "khaopiyo-e1ea8.appspot.com",
  messagingSenderId: "606318261913",
  appId: "1:606318261913:web:de1f6e6b1d8babf55faa08"
};
const app = initializeApp(firebaseConfig); 
export const db =getFirestore(app);