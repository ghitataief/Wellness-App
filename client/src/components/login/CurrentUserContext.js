import { createContext } from "react";
import useLocalStorage from "./useLocalStorage";

export const CurrentUserContext = createContext();

const CurrentUserProvider = ({ children }) => {
  //For the Login, we need to establish the current user data with UseContext
  const [currentUser, setCurrentUser] = useLocalStorage(null, "CurrentUser-Name");

  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        {children}
      </CurrentUserContext.Provider>
    </>
  );
};

export default CurrentUserProvider;
