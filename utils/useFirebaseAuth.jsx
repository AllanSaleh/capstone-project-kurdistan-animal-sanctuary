import { useState, useEffect } from "react";
import firestore from "../services/firebase";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    let formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };
  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  const signInWithEmailAndPassword = (email, password) =>
    firestore.auth().signInWithEmailAndPassword(email, password);

  const createUserWithEmailAndPassword = (email, password) =>
    firestore.auth().createUserWithEmailAndPassword(email, password);

  const signOut = () => firestore.auth().signOut().then(clear);

  useEffect(() => {
    const unsubscribe = firestore.auth().onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };
}
