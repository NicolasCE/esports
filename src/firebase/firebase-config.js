//configuracion pagina web de firebase
//importaciones de SKD necesarios
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyCBfA9AiyEi_MYciuftgBLqp2Jk3nnrQX0",
  authDomain: "esport-gaming1.firebaseapp.com",
  projectId: "esport-gaming1",
  storageBucket: "esport-gaming1.firebasestorage.app",
  messagingSenderId: "398449331226",
  appId: "1:398449331226:web:ecc0ac59f91925224255a3",
  measurementId: "G-4W2C8FYJY2"
};

// incializacion de firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);