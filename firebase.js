// /firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    setDoc,
    serverTimestamp,
    Timestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

export const firebaseConfig = {
    apiKey: "AIzaSyDG9nw8UxEtGbIpVXJtQTbnuRW7RWHijT0",
    authDomain: "globalteamsupply-app.firebaseapp.com",
    projectId: "globalteamsupply-app",
    storageBucket: "globalteamsupply-app.firebasestorage.app",
    messagingSenderId: "13387101876",
    appId: "1:13387101876:web:5e985148de8fa68bf6c9e1",
    measurementId: "G-HMSG7MXLFD"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// Auth helpers
export function signUpUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logoutUser() {
    return signOut(auth);
}

// Firestore helpers (optional)
export function addLead(data) {
    return addDoc(collection(db, "sales_requests"), data);
}