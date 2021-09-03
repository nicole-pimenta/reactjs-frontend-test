import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("Habits:token") || "";
  const [auth, setAuth] = useState(token);

  const logIn = (data, history) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        window.localStorage.clear();
        localStorage.setItem("Habits:token",res.data.token));
        setAuthentication(true);
        setAuth(token);

        // user
        const decodingUserId = jwt_decode(token);
        localStorage.setItem(
          "Habits:userId",
          JSON.stringify(decodingUserId.user_id)
        );

        toast.success("Sucesso ao fazer login");
        history.push("/dashboard");
      })
  };

 

  const logOut = () => {
    setAuth("");
    localStorage.clear();
    toast.success("Até breve!");
  };

  const userId = localStorage.getItem("Habits:userId");

  return (
    <AuthContext.Provider
      value={{ token: auth, setAuth, userId, logIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
