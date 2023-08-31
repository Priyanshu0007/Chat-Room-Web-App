import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database"
const config={
    apiKey: "AIzaSyAqAnpvRkTe2v-porORjb4l2lYUp3n6FfM",
    authDomain: "chat-app-86e20.firebaseapp.com",
    projectId: "chat-app-86e20",
    storageBucket: "chat-app-86e20.appspot.com",
    messagingSenderId: "886571226077",
    appId: "1:886571226077:web:23a254569434a96ede5c34"
  }

  const app= firebase.initializeApp(config);
  export const auth=app.auth();
  export const database=app.database();