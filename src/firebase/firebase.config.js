import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    // apiKey:process.env.REACT_APP_apiKey,
    // authDomain:process.env.REACT_APP_authDomain,
    // projectId:process.env.REACT_APP_projectId,
    // storageBucket:process.env.REACT_APP_storageBucket,
    // messagingSenderId:process.env.REACT_APP_messagingSenderId,
    // appId:process.env.REACT_APP_appId,
    apiKey: "AIzaSyDIkIxUBHl8CGtQvLyTC6-X5ZcaT-U3UY0",
  authDomain: "job-portal-website-dd69c.firebaseapp.com",
  projectId: "job-portal-website-dd69c",
  storageBucket: "job-portal-website-dd69c.appspot.com",
  messagingSenderId: "26339951134",
  appId: "1:26339951134:web:871faa982209efc51a640f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;