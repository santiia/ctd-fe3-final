import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [solicitud, setSolicitud] = useState({
    nombre: "",
    email: ""
  })
  const HandleNombre = (e) => {
    
    if(solicitud.nombre.length > 5){
      return true
    } else{
      return false
    }
  }
  // validateEmail = (email) => {
  //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //     return re.test(email);
  // };
  const HandleSubmit = () => {
    
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="Nombre" onChange={(e) => setSolicitud(...solicitud, solicitud.nombre = e.target.value)}></input>
        <input type="text" placeholder="Email"></input>
        <button type="submit" onClick={HandleSubmit()}>Envia</button>
      </form>
    </div>
  );
};

export default Form;
