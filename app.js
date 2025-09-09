// app.js - shared for Step 1 (Auth)
// <--- Your firebaseConfig (you gave this earlier) --->
const firebaseConfig = {
  apiKey: "AIzaSyBXCMjlg84qvF1xlaHaWVQeJyY0MmsCWxI",
  authDomain: "chatting-f6825.firebaseapp.com",
  databaseURL: "https://chatting-f6825-default-rtdb.firebaseio.com",
  projectId: "chatting-f6825",
  storageBucket: "chatting-f6825.firebasestorage.app",
  messagingSenderId: "668245496547",
  appId: "1:668245496547:web:990edf7bd72e32e87e6bd6"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// exports used in pages
const auth = firebase.auth();
