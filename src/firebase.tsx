import { app } from "../firebase-config";
import { 
    getAuth,
    connectAuthEmulator,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { 
    getFirestore,
    connectFirestoreEmulator,
} from "firebase/firestore";

// Firebase Initializations:
export const auth = getAuth(app);
export const db = getFirestore(app);

// Firebase Functions:

// if (window.location.hostname === 'localhost') {
//     connectAuthEmulator(auth, 'http://127.0.0.1:9099');
// }

// createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed Up
//         const user = userCredential.user;
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
// });

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
// });


