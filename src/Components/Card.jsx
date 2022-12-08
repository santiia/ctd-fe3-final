import React from 'react'
import {Link} from 'react-router-dom'
import {cardStyles} from '../styles/card.css'

const Card = ({name, username, id}) => {
  const makeObject = () => {
    let object = {
      name: name,
      username: username,
      id: id
    }
    return object
  }
  const isDentistInFavorites = (object, array) =>
    array.find((character) => character.id === object.id)

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    const dentistFavs = JSON.parse(localStorage.getItem('dentistFavs')) || []

    if (!!isDentistInFavorites(makeObject(), dentistFavs)) {
      console.log('ya esta incluido')
    } else {
      dentistFavs.push(makeObject())
      localStorage.setItem('dentistFavs', JSON.stringify(dentistFavs))
    }
  }

  return (
    <div className="card" id={id}>
      <img src="" alt="" />
      <Link to={'/dentist/' + id}>
        <h4>{name}</h4>
      </Link>
      <h4>{username}</h4>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  )
}

export default Card
