import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const contextFirebase = createContext();

const ContextProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <contextFirebase.Provider value={allContext}>
      {children}
    </contextFirebase.Provider>
  );
};

export default ContextProvider;
