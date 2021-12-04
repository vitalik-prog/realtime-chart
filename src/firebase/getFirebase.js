import {initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDX4NSHEEZEFot0XG2oSln9hccrz8Q9U9k",
  authDomain: "realtime-chart-ulbi.firebaseapp.com",
  projectId: "realtime-chart-ulbi",
  storageBucket: "realtime-chart-ulbi.appspot.com",
  messagingSenderId: "301686107390",
  appId: "1:301686107390:web:285693b158fab0e86349af",
  measurementId: "G-1TTD1QQ22M"
}
let instance

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance
    instance = initializeApp(firebaseConfig);
    return instance
  }

  return null
}
