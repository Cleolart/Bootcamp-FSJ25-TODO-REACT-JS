import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBLI2RRw8qOeSLOkpUpr36OhGWTg4x694M",
    authDomain: "my-todo-5675a.firebaseapp.com",
    projectId: "my-todo-5675a",
    storageBucket: "my-todo-5675a.firebasestorage.app",
    messagingSenderId: "334305568164",
    appId: "1:334305568164:web:bef4d4a2f2949d75934d31"
};


const conf = initializeApp(firebaseConfig);


const database = getFirestore(conf);

export default database;