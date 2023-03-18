import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAMwPi4VCls-3MwBAn-notb8Wjdme5hlvY",
  authDomain: "talkr-app-firebase.firebaseapp.com",
  projectId: "talkr-app-firebase",
  storageBucket: "talkr-app-firebase.appspot.com",
  messagingSenderId: "865028595597",
  appId: "1:865028595597:web:a94d2fb2c9b949e523e7c4",
  measurementId: "G-PL7B9ZM667"
};
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db=getFirestore()
export default app;
export const storage = getStorage(app);
export const provider=new GoogleAuthProvider();