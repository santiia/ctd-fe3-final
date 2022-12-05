import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useState } from "react";

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
  console.log(data)

  // let result = data?.find(item => item.id === params.id)

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      <h2>{data.name}</h2>
      <h2>{data.email}</h2>
      <h2>{data.phone}</h2>
      <h2>{data.website}</h2>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
