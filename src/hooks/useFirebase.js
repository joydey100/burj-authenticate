import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase-init";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Initialize Firebase
initializeFirebase();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  //   Google Sign In
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   On Auth State Changed
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  // create user
  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        setUser(user);
      }
    );
  };

  // Sign in user
  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {});
  };

  //   log out
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    user,
    googleSignIn,
    logOut,
    createUser,
    signInUser,
  };
};

export default useFirebase;
