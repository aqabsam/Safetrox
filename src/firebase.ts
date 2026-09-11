import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as analyticsIsSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAU64fgwSQ6aW-uthii7nQ0dHkay9bw3Sc",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "safetrox-8485e.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "safetrox-8485e",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "300902818366",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:300902818366:web:b0f2a4d827c28f9a4ee76f",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-3RSXFXSKV7",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = analyticsIsSupported().then((supported) => supported ? getAnalytics(app) : null);

