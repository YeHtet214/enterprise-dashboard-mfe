// AuthApp/src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import { storage } from "../services/storage";
import { authService } from "../services/authService";

const AuthContext = createContext<any>(null);

type User = {
  id: string;
  username: string;
  role: string;
}
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({ username: "", id: "", role: "" });

  useEffect(() => {
    const token = storage.getToken();
    if (token) {
      const { username, id, role } = JSON.parse(atob(token.split('.')[1]));
      setUser({ username, id, role });
    }
  }, []);

  const login = async (name: string, password: string) => {
    const { token } = await authService.login(name, password);
    storage.saveToken(token);
    const { username, id, role } = JSON.parse(atob(token.split('.')[1]));
    setUser({ username, id, role });
  };

  const logout = () => {
    storage.removeToken();
    setUser({ username: "", id: "", role: "" });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
