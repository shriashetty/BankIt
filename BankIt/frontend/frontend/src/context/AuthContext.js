import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [bankCode, setBankCode] = useState(null);
  const [token, setToken] = useState(null);

  const login = (userData, bank, authToken) => {
    setUser(userData);
    setBankCode(bank);
    setToken(authToken);
  };

  const logout = () => {
    setUser(null);
    setBankCode(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, bankCode, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
