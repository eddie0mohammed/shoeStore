import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAJouDxoIeYNVdIAjuDlsYNJTasmHPg2Bg",
    authDomain: "shoes-12ae9.firebaseapp.com",
    databaseURL: "https://shoes-12ae9.firebaseio.com",
    projectId: "shoes-12ae9",
    storageBucket: "shoes-12ae9.appspot.com",
    messagingSenderId: "328197510401",
    appId: "1:328197510401:web:1bfeffa6084d4f0acab700"
}


export const createUserProfileDocument = async (userAuth, additionalData) => {

    if (!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {

        const {email} = userAuth;
        const createdAt = new Date();

        try{

            await userRef.set({
                email,
                createdAt,
                ...additionalData
            })

        }catch(error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;