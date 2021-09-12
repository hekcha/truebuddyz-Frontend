import firebase from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyCIG3g9kkMYkcASzAZ4f7FWXOBGwZVIoR0",
	authDomain: "truebuddyz.firebaseapp.com",
	projectId: "truebuddyz",
	storageBucket: "truebuddyz.appspot.com",
	messagingSenderId: "380277389886",
	appId: "1:380277389886:web:44576f72ac813d9abaaf6f",
	measurementId: "G-CFRCLBZJSQ",
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
export const firebaseAuth = fireDb.auth();
