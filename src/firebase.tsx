import { app } from "../firebase-config";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase Initializations:
export const auth = getAuth(app);
export const db = getFirestore(app);
