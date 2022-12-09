import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
import  '../styles/detail.css'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {dentistId}= useParams();
  console.log(dentistId);
  const url = "https://jsonplaceholder.typicode.com/users/" + dentistId;
  const [data, setData] = useState([])

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);
  // let result = data?.find(item => item.id === params.id)

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className="dentistDetail">
      <h1>Detail Dentist id </h1>
      <h2>Nombre</h2>
      <p>{data.name}</p>
      <h2>Email</h2>
      <p>{data.email}</p>
      <h2>Telefono</h2>
      <p>{data.phone}</p>
      <h2>Sitio Web</h2>
      <p>{data.website}</p>
    </div>
  );
};

export default Detail;
