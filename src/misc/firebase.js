import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyD1T_-oRAfvKrDRnp5VHk0r6VoW4J15x54',
  authDomain: 'chat-web-app-91211.firebaseapp.com',
  projectId: 'chat-web-app-91211',
  storageBucket: 'chat-web-app-91211.appspot.com',
  messagingSenderId: '529430315338',
  appId: '1:529430315338:web:45dc4191310faeaabb41b3',
  databaseURL:
    'https://chat-web-app-91211-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
