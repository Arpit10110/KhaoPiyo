import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBT2S_nV-lF8Sdp2sBxTKU8HHpKJSKaiLg",
  authDomain: "khaopiyo-22be7.firebaseapp.com",
  projectId: "khaopiyo-22be7",
  storageBucket: "khaopiyo-22be7.appspot.com",
  messagingSenderId: "495348755974",
  appId: "1:495348755974:web:d7fdb54e1954660a281d87"
};
const app = initializeApp(firebaseConfig); 
export const db =getFirestore(app);