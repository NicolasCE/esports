//firebase: te permite crear aplicaciones ricas y colaborativas, ya que permite el acceso seguro a la base de datos directamente desde el código del cliente

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//autentificacion con google
export const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        console.log('Bienvenido Usuario:', user);
    }).catch((error) => {
        console.error(error.message);
    });

}