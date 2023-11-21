import { AppContext } from "./AppContextProvider";
import { useContext } from "react";

const useAppContext = () => {
    return useContext(AppContext);
}

export default useAppContext;