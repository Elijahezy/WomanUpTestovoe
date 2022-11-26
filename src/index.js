import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAoskXYIL7qS-1IcF9DbU1JcwvZgBoTWJI",
  authDomain: "womanup-6e3a9.firebaseapp.com",
  projectId: "womanup-6e3a9",
  storageBucket: "womanup-6e3a9.appspot.com",
  messagingSenderId: "1088241992432",
  appId: "1:1088241992432:web:4b704c4f7849a62e4b3835",
  measurementId: "G-PV3MLQ93PY",
  databaseURL:
    "https://womanup-6e3a9-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const Context = React.createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context.Provider value={{}}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
