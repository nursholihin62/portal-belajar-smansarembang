import { auth, db } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const loginForm = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMessage');

if(loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Mencegah halaman refresh sendiri
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Reset pesan error
        errorMsg.classList.add('d-none');
        errorMsg.innerText = "";

        try {
            // 1. Cek Email & Password ke Firebase Auth
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            console.log("Login Auth Berhasil, ID:", user.uid);

            // 2. Cek Role (Jabatan) di Database Firestore
            // Kita cari dokumen di koleksi 'users' yang ID-nya sama dengan UID user
            const docRef = doc(db, "users", user.uid); 
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const userData = docSnap.data();
                console.log("Data User ditemukan:", userData);
                
                // 3. Arahkan halaman sesuai Role
                if (userData.role === 'guru') {
                    window.location.href = 'dashboard-guru.html';
                } else if (userData.role === 'siswa') {
                    window.location.href = 'dashboard-siswa.html';
                } else {
                    throw new Error("Akun ini tidak memiliki peran yang jelas (Bukan Guru/Siswa).");
                }
            } else {
                throw new Error("Data pengguna tidak ditemukan di database.");
            }

        } catch (error) {
            console.error("Error:", error);
            // Tampilkan error di layar merah
            errorMsg.classList.remove('d-none');
            // Terjemahkan error umum biar user paham
            if (error.code === 'auth/invalid-credential') {
                errorMsg.innerText = "Email atau Password salah.";
            } else {
                errorMsg.innerText = error.message;
            }
        }
    });
}