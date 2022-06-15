import { createContext } from "react";
import useLocalStorage from "./useLocalStorage";

export const CurrentUserContext = createContext();

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useLocalStorage(null, "CurrentUser");

  //replace user event
  const replaceUserEvent = (events) => {
    setCurrentUser({ ...currentUser, events: events });
  };

  return (
    <>
      <CurrentUserContext.Provider
        value={{ currentUser, setCurrentUser, replaceUserEvent }}
      >
        {children}
      </CurrentUserContext.Provider>
    </>
  );
};

export default CurrentUserProvider;
