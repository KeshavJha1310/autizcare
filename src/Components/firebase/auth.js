import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
import { auth } from "./firebase";

const AuthUserContext = createContext({
  authUser: null,
  isLoading: true,
  setAuthUser: () => {},
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const clear = () => {
    setAuthUser(null);
    setIsLoading(false);
    console.log("clearing the function");
  };

  useEffect(() => {
    console.log('auth.js useEffect started');
    const authStateChanged = (user) => {
      setIsLoading(true);

      if (!user) {
        clear();
        return;
      }

      try {
        // Set the authenticated user details here
        setAuthUser({
          uid: user.uid,
          email: user.email,
          username: user.displayName,
        });
      } catch (error) {
        console.error("Error setting user:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => {
      console.log('auth.js useEffect cleanup');
      unsubscribe();
    };
  }, []);

  const signOut = () => {
    authSignOut(auth).then(() => clear());
  };

  return {
    authUser,
    isLoading,
    setAuthUser,
    signOut
  };
}

export const AuthUserProvider = ({ children }) => {
  const auth = useFirebaseAuth();

  return (
    <AuthUserContext.Provider value={auth}>
      {children}
    </AuthUserContext.Provider>
  );
};

export const useAuth = () => useContext(AuthUserContext);
