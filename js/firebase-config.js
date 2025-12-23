import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD8kwkwGOGswoCNBhNO5zD0pOHZKg5JIvk",
  authDomain: "portal-belajar-smansarembang.firebaseapp.com",
  projectId: "portal-belajar-smansarembang",
  storageBucket: "portal-belajar-smansarembang.firebasestorage.app",
  messagingSenderId: "573659279240",
  appId: "1:573659279240:web:ad58bd2ad4d965fbb9543d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
