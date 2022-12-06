import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favsList =JSON.parse(localStorage.getItem("dentistFavs")) || []

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favsList.length > 0 ? favsList.map(item => {
          return <Card id={item.id} name={item.name} username={item.username}></Card>
        }) : <p>!Añade a tus dentistas favoritos¡</p>}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        
      </div>
    </>
  );
};

export default Favs;
