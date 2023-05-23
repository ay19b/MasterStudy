import { createContext, useReducer } from "react";
import MenuReducer from "./menuReducer";
import { useContext } from "react";


export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MenuReducer, { menu: false });

  return (
    <MenuContext.Provider value={{ menu: state.menu, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
};
