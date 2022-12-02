import React from 'react'
import { Outlet } from 'react-router-dom'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards <Link to="/dentist/" + card.id><Card></Link> */}
        Aqui va el home
      </div>
    </main>
  )
}

export default Home