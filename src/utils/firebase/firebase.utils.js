import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
}from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMjzh5Sh_QHw4dmm3AJBLGFkIyIed-Z84",
    authDomain: "crown-db-6e643.firebaseapp.com",
    projectId: "crown-db-6e643",
    storageBucket: "crown-db-6e643.firebasestorage.app",
    messagingSenderId: "311228961950",
    appId: "1:311228961950:web:f8bd78e090bb5f4b0b978f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt : "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef)

    const userSnapShot = await getDoc(userDocRef);
    
    if (!userSnapShot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        }catch(error){
            console.log('error creating the user',error.message);
        }
    }
    return userDocRef;
}