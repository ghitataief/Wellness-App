import { useState, useEffect } from "react";

const useLocalStorage = (defaultValue, name) => {
  const [state, setState] = useState(() => {
    const storeValue = window.localStorage.getItem(name);

    return storeValue !== null ? JSON.parse(storeValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(name, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorage;