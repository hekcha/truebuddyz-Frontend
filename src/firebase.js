import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyA49E5UvQiEevXPoIwmLTcS6ii7mTsWyUk",
  authDomain: "truebff-d74db.firebaseapp.com",
  databaseURL: "https://truebff-d74db-default-rtdb.firebaseio.com",
  projectId: "truebff-d74db",
  storageBucket: "truebff-d74db.appspot.com",
  messagingSenderId: "823318235368",
  appId: "1:823318235368:web:a2892961aa9c7ce107615d"
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
export const firebaseAuth = fireDb.auth();