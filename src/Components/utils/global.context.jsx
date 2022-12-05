import { createContext } from "react";
import axios from "axios"
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

 const ContextProvider = ({ children }) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data)
    });
  }, []);

  return (
    <ContextGlobal.Provider value={{
      data
    }}>
      {children}
    </ContextGlobal.Provider>
  );
  
};

export default ContextProvider
export const useContextGlobal = () => {
  return useContext(ContextGlobal)
}
