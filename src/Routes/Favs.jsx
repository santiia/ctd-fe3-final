import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favsList =JSON.parse(localStorage.getItem("dentistFavs")) || []
  const {theme} = useContextGlobal()
  const clases = `card-grid ${theme}`

  return (
    <>
      <h1 className={theme}>Dentists Favs</h1>
      <div className={clases}>
        {favsList.length > 0 ? favsList.map(item => {
          return <Card id={item.id} name={item.name} username={item.username} key={item.id}></Card>
        }) : <p>!Añade a tus dentistas favoritos¡</p>}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        
      </div>
    </>
  );
};

export default Favs;
