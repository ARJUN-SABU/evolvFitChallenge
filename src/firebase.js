import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIAPIq6YmfxyKn_AzPlW0dDhd5A0TqUlI",
  authDomain: "fir-auth-714d5.firebaseapp.com",
  projectId: "fir-auth-714d5",
  storageBucket: "fir-auth-714d5.appspot.com",
  messagingSenderId: "364185377725",
  appId: "1:364185377725:web:d639b2b04da3cd94afd0d4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
