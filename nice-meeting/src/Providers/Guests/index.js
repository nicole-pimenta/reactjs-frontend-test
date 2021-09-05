import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";
import { Redirect } from "react-router-dom";

export const GuestsContext = createContext();

export const GuestsProvider = ({ children }) => {
  const [guests, setGuests] = useState([]);
  const [guestList, setGuestList] = useState([]);

  useEffect(() => {
    api.get("/guests").then((response) => setGuests(response.data));
  }, []);

  const addGuest = () => {
    const randomNumber = Math.floor(Math.random() * 7);
    for (let i = 0; i < guests.length; i++) {
      setGuestList([...guestList, guests[randomNumber]]);
    }
  };

  const exitMeeting = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <GuestsContext.Provider
      value={{ guests, addGuest, guestList, exitMeeting }}
    >
      {children}
    </GuestsContext.Provider>
  );
};

export const useGuests = () => useContext(GuestsContext);
