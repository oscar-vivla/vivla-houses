import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { auth } from '../firebase/config/firebase';

const authContext = createContext();

export const useAuth = () => useContext(authContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => signOut(auth)

  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })
  }, [])

  return (
    <authContext.Provider value={{
      signUp,
      login,
      user,
      logout
    }}>{children}</authContext.Provider>
  );
}
