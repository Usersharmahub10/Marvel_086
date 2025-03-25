// Import Firebase modular SDK
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtyUMPsUtZKVI3bP6VBzyzBZrwGqtFYdU",
  authDomain: "marvelreact086.firebaseapp.com",
  projectId: "marvelreact086",
  storageBucket: "marvelreact086.appspot.com",
  messagingSenderId: "2824181451",
  appId: "1:2824181451:web:367d30dd8e53d7f9fcad4e",
  measurementId: "G-YFPKX8VX7J"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore, Auth, and Storage
const db = getFirestore(firebaseApp); // Use getFirestore() instead of firebaseApp.firestore()
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

// Export the necessary modules
export { auth, provider, storage };
export default db;