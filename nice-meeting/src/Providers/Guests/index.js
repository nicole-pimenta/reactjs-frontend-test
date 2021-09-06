import { createContext, useContext, useState, useEffect } from "react";
import api from "../../services/api";

export const GuestsContext = createContext();

export const GuestsProvider = ({ children }) => {
  const [guests, setGuests] = useState([]);
  const [guestList, setGuestList] = useState([]);

  const updateLocalStorage = () => {
    localStorage.setItem("NiceMeeting:guestList", JSON.stringify(guestList));
  };

  useEffect(() => {
    api.get("/guests").then((response) => setGuests(response.data));
  }, []);

  const addGuest = () => {
    const randomNumber = Math.floor(Math.random() * 7);
    for (let i = 0; i < guests.length; i++) {
      setGuestList([...guestList, guests[randomNumber]]);
    }
  };

  updateLocalStorage();

  const removeGuest = (removedGuest) => {
    const indice = guestList.indexOf(removedGuest);
    let filteredList = guestList.filter((guest, index) => index !== indice);
    setGuestList(filteredList);
    updateLocalStorage();
  };

  const exitMeeting = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <GuestsContext.Provider
      value={{
        guests,
        addGuest,
        guestList,
        exitMeeting,
        removeGuest,
      }}
    >
      {children}
    </GuestsContext.Provider>
  );
};

export const useGuests = () => useContext(GuestsContext);
