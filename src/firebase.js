import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAoskXYIL7qS-1IcF9DbU1JcwvZgBoTWJI",
  authDomain: "womanup-6e3a9.firebaseapp.com",
  projectId: "womanup-6e3a9",
  messagingSenderId: "1088241992432",
  appId: "1:1088241992432:web:4b704c4f7849a62e4b3835",
  measurementId: "G-PV3MLQ93PY",
  databaseURL:
    "https://womanup-6e3a9-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "gs://womanup-6e3a9.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);
