import { createContext } from "react";
import axios from "axios"
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(null);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <ContextGlobal.Provider value={{
      data, setData
    }}>
      {children}
    </ContextGlobal.Provider>
  );
  
};
export const useContextGlobal = () => {
  return useContext(ContextGlobal)
}
