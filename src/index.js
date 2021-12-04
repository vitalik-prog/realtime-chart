import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getAuth } from "firebase/auth";
import 'firebase/firestore'
import 'firebase/auth'
import getFirebase from "./firebase/getFirebase";
import {getFirestore} from "firebase/firestore";

export const Context = createContext(null)

getFirebase()
const auth = getAuth()
const app = getFirebase()
const db = getFirestore(app);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      auth,
      db,
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
