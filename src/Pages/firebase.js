// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHnpffrMSOkG-96WFSpkrMN-VhAVmec1k",
  authDomain: "pet-shop-e91ec.firebaseapp.com",
  databaseURL: "https://pet-shop-e91ec-default-rtdb.firebaseio.com",
  projectId: "pet-shop-e91ec",
  storageBucket: "pet-shop-e91ec.firebasestorage.app",
  messagingSenderId: "728368910667",
  appId: "1:728368910667:web:ceefae1e653b014ff798ce",
  measurementId: "G-3K2HKKNCT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    