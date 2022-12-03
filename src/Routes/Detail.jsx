import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useState } from "react";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const params = useParams();
  console.log(params);
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([])

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, []);

  // let result = data?.find(item => item.id === params.id)

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      <h2>{data[0].name}</h2>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
