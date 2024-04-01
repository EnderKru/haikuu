import { auth } from "./firebase";
import {RouterProvider} from 'react-router-dom';
import {router} from './app/index';
import './styles/common.scss';
import { createContext, useState, useEffect} from 'react';
export const UserContext = createContext()
import { onAuthStateChanged, signOut } from "firebase/auth";


export const userSignOut = () => {
  signOut(auth)
  .then(() => {
    console.log("Successfully signed out");
    setUser(false); // Установите значение false после выхода из системы
  })
  .catch((error) => {
    console.log("Error signing out:", error);
  });
}

function App() {
    const [authUser, setAuthUser] = useState(null);
    const [user, setUser] = useState(false); // Используйте false по умолчанию
  
    useEffect(() => {
      const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user);
          setUser(true); // Установите значение true, если пользователь авторизован
        } else {
          setAuthUser(null);
          setUser(false); // Установите значение false, если пользователь не авторизован
        }
      });
      return () => {
        listen();
      };
    }, []);
  

  return (
    <UserContext.Provider value={[user, setUser]}>
      <RouterProvider router={router} />
    </UserContext.Provider>

  )
}

export default App
