import React from "react";
import './App.css';

import firebase from "firebase/compat";
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData} from "react-firebase-hooks/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyBp5KQpnZxcd3_DA6hCAFI525EzNDKQLGk",
    authDomain: "fireship-chat-ed802.firebaseapp.com",
    projectId: "fireship-chat-ed802",
    storageBucket: "fireship-chat-ed802.appspot.com",
    messagingSenderId: "691256591775",
    appId: "1:691256591775:web:4f854d1385f5d805be29aa",
    measurementId: "G-HPEVRJMFND"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>

        <section>
            {user ? <ChatRoom /> : <SignIn />}
        </section>
    </div>
  );
}

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }
    return (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    )
}

function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

function ChatRoom() {
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)

    const [messages] = useCollectionData(query, {idField: 'id'})
}

export default App;
