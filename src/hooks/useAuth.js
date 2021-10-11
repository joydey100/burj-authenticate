import { useContext } from "react";
import { contextFirebase } from "../Context/ContextProvider";
const useAuth = () => {
  return useContext(contextFirebase);
};

export default useAuth;
