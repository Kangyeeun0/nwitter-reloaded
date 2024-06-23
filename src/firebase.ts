import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyANjjlHs76cjFovtT-XsdZcPLIh24d58iw',
    authDomain: 'nwitter-reloaded-99c00.firebaseapp.com',
    projectId: 'nwitter-reloaded-99c00',
    storageBucket: 'nwitter-reloaded-99c00.appspot.com',
    messagingSenderId: '30897340374',
    appId: '1:30897340374:web:4baf08c3ac5663b8cfee77',
    measurementId: 'G-JGPKC2446L',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
