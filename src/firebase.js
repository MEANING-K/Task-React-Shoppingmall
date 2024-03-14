import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBh95pSmiFQqfCGoGVGA3wFeKwBDwCF_zA",
    authDomain: "task-react-shoppingmall.firebaseapp.com",
    projectId: "task-react-shoppingmall",
    storageBucket: "task-react-shoppingmall.appspot.com",
    messagingSenderId: "727931102902",
    appId: "1:727931102902:web:df49042f54fe4289512817"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const signupEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const loginEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

const provider = new GoogleAuthProvider();
export const loginGoogle = () => {
    return signInWithPopup(auth, provider);
};