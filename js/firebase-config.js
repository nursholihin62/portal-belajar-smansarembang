// 1. IMPORT (Format CDN untuk Browser)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 2. CONFIGURASI (Ini data asli Project "sekolah-bisa-aja")
const firebaseConfig = {
  apiKey: "AIzaSyBSzniI3ItA1DpWih_uWsZq7xiLO20po68",
  authDomain: "sekolah-bisa-aja.firebaseapp.com",
  projectId: "sekolah-bisa-aja",
  storageBucket: "sekolah-bisa-aja.firebasestorage.app",
  messagingSenderId: "994736700176",
  appId: "1:994736700176:web:f09240e25821ebd436c395"
};

// 3. INITIALIZE (Menghidupkan Firebase & Database)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);     // Mengaktifkan fitur Login
const db = getFirestore(app);  // Mengaktifkan fitur Database

// 4. EXPORT (Agar bisa dipakai file lain)
export { auth, db };
