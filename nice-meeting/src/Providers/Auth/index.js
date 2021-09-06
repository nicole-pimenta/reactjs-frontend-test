import { createContext, useContext, useState, useEffect } from "react";

import api from "../../services/api";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("NiceMeeting:token") || "";

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("NiceMeeting:token"));
    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  const handleLogin = (data, history) => {
    api
      .post("/login/", data)
      .then((response) => {
        const token = response.data.accessToken;
        localStorage.setItem("NiceMeeting:token", JSON.stringify(token));
        Cookies.set("NiceMeeting:token", token, { expires: 7 });
        setAuthenticated(true);
        toast.success("Sucesso ao logar");
        return history.push("/meeting");
      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  };

  return (
    <AuthContext.Provider
      value={{ handleLogin, token, authenticated, setAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
