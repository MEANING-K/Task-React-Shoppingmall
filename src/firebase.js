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

//Email 로그인
export const signupEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

//Email 회원가입
export const loginEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

//Google 로그인
const provider = new GoogleAuthProvider();
export const loginGoogle = () => {
    return signInWithPopup(auth, provider);
};