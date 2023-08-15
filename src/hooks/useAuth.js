import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login =  (data) => {
    setUser(data);
    navigate("/profile");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };
  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  console.log("value", value);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  // const { user, login, logout } = useContext(AuthContext);
  // console.log('user', user)
  // return { user, login, logout };

// console.log('useContext(AuthContext)', useContext(AuthContext))
  return useContext(AuthContext)
};
