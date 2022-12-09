import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
import  '../styles/detail.css'
import { useContextGlobal } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {dentistId} = useParams()
  console.log(dentistId)
  const url = 'https://jsonplaceholder.typicode.com/users/' + dentistId
  const [data, setData] = useState([])
  const {theme} = useContextGlobal()
 
 const clases = `dentist-detail ${theme}` // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data)
    })
  }, [url])

 

  return (
    <div className={clases}>
      <h1 >Detail Dentist id </h1>
      <h2 className="title-detail">Nombre</h2>
      <p>{data.name}</p>
      <h2 className="dentist-email">Email</h2>
      <p>{data.email}</p>
      <h2 className="title-detail">Telefono</h2>
      <p>{data.phone}</p>
      <h2 className="dentist-website">Sitio Web</h2>
      <p>{data.website}</p>
    </div>
  );
};

export default Detail
