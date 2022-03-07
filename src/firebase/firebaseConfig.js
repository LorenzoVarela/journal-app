import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD8gFOiBqn_SWGUAmT-VkU6RhR0zhqewv8",
    authDomain: "react-app-cursos-bd525.firebaseapp.com",
    databaseURL: "https://react-app-cursos.firebaseio.com",
    projectId: "react-app-cursos-bd525",
    storageBucket: "react-app-cursos-bd525.appspot.com",
    messagingSenderId: "151949235604",
    appId: "1:151949235604:web:0fb8427ae541b3e4eaeb81"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}