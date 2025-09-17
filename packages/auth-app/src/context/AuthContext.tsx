// AuthApp/src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { getToken, saveToken, removeToken } from "../utils/storage";

const AuthContext = createContext<any>(null);

type User = {
  username: string;
  token?: string
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser({ username: "John" });
    }
  }, []);

  const login = (username: string, token: string) => {
    saveToken(token);
    setUser({ username, token });
  };

  const logout = () => {
    removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
