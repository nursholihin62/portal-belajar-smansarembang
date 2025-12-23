// 1. IMPORT (Wajib ada di paling atas)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 2. CONFIG (Isi dengan data dari layar Firebase Anda)
const firebaseConfig = {
    apiKey: "AIzaSyD...",                // <-- Pastikan kode ini lengkap sesuai dari Firebase
    authDomain: "portal-sma-v1.firebaseapp.com",
    projectId: "portal-sma-v1",
    storageBucket: "portal-sma-v1.appspot.com",
    messagingSenderId: "123456...",
    appId: "1:123456..."
};

// 3. INITIALIZE (Menghidupkan Firebase)
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// 4. EXPORT (Supaya bisa dipakai di file lain seperti auth.js)
export { auth, db };