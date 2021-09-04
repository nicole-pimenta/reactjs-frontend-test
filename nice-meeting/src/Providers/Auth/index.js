import { createContext, useContext, useState } from "react";
import api from "../../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("Habits:token") || "";
  const [auth, setAuth] = useState(token);

  const handleLogin = (data, history) => {
    api
      .post("/login/", data)
      .then((response) => {
        const token = response.data.accessToken;
        localStorage.setItem("NiceMeeting:token", JSON.stringify(token));
        setAuth(token);
        history.push("/meeting");
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ handleLogin, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
