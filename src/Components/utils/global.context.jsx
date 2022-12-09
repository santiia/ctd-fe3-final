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
    });
  }, []);
  
  const [theme, setTheme] = useState("light")

  const handleTheme = () =>{
    if(theme === "light"){
      setTheme("dark")
      console.log(theme)
    } else{
      setTheme("light")
    }
  }
  
  return (
    <ContextGlobal.Provider value={{
      data, theme, handleTheme
    }}>
      {children}
    </ContextGlobal.Provider>
  );
  
};

export default ContextProvider
export const useContextGlobal = () => {
  return useContext(ContextGlobal)
}
