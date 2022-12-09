import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {theme, handleTheme} = useContextGlobal()
  const clases = `navbar ${theme}`
  return (
    <nav className={clases}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <h2>DH Odonto</h2>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/favs">Favoritos</Link>
        <button onClick={() => {handleTheme()}}>Change theme</button>
      </div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    </nav>
  )
}

export default Navbar
