
/*
Authentication provider file
holds the profiles that can be logged in, lets stack navigator know what pages are accessable
TODO: find alternative to deprecated google sign in
*/
import React , {createContext, useContext, useEffect, useState, } from 'react';
import { auth, firebase, db } from "../firebase";
import {
  onAuthStateChanged,
  signInWithCredential,
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";







const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [error,setError] = useState(null);

  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          //if user is logged in
          setUser(user);
          //console.log(user);
        }
        else{
          //not logged in
          setUser(null);
        }
        //debug user
      
        //console.log("user is: "+ user.uid);
        setLoadingInitial(false);
      }),
    []
  );

 

  const logout = () => {
    setLoading(true);
    
    signOut(auth)
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }
  async function registerUser(auth,email,password) {
    setEmail(email);
    setPassword(password);
    setLoading(true);
    try{
      const result = await createUserWithEmailAndPassword(auth, email, password);
      // const user  = result.user;
      // await setDoc(doc(db, "users",user.uid),{
      //   uid: user.uid,
      //   email: email
      // })
    } catch(error){
      setError(error);
    } finally{
      setLoading(false);
    }
  } 
  
  return (
    <AuthContext.Provider value={{
      user,
      loading,
      error,
      registerUser,
      logout,
    }}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  )
  
}
//allow other pages to import this function so that can use the information of users 
//eg. "const { user } = useAuth();" gets value of user
export default function useAuth() { 
  return useContext(AuthContext);
}