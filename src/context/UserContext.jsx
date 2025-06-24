import React, { createContext, useState } from "react";
import foods from "../food";
export const dataContext = createContext();
const UserContext = ({ children }) => {
  let [input, setInput] = useState("");
  let [cate, setCate] = useState(foods);
  let [showCart, setShowCart] = useState(false);
  let data = { input, setInput, cate, setCate, showCart, setShowCart };
  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
};

export default UserContext;
