import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import * as firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
initializeApp({
  apiKey: "AIzaSyDX4NSHEEZEFot0XG2oSln9hccrz8Q9U9k",
  authDomain: "realtime-chart-ulbi.firebaseapp.com",
  projectId: "realtime-chart-ulbi",
  storageBucket: "realtime-chart-ulbi.appspot.com",
  messagingSenderId: "301686107390",
  appId: "1:301686107390:web:285693b158fab0e86349af",
  measurementId: "G-1TTD1QQ22M"
});
export const Context = createContext(null)

const auth = getAuth()
const firestore = getStorage()

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      auth,
      firebase,
      firestore
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
