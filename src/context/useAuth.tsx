import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  ReactChild,
} from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import firebaseConfig from '../config/firebase';

interface AuthContextData {
  currentUser: User | null;
  login(email: string, password: string): Promise<void>;
  logout(): void;
  signup(email: string, password: string): Promise<void>;
}

initializeApp(firebaseConfig);
const auth = getAuth();

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactChild }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const signup = useCallback(async (email: string, password: string) => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    setCurrentUser(user);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    setCurrentUser(user);
  }, []);

  const logout = useCallback(async () => {
    await signOut(auth);

    setCurrentUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        currentUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within as Authprovider');
  }

  return context;
}
