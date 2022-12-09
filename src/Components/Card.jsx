import React from 'react'
import {Link} from 'react-router-dom'
import  '../styles/card.css'

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
      return
    } else {
      dentistFavs.push(makeObject())
      localStorage.setItem('dentistFavs', JSON.stringify(dentistFavs))
    }
  }

  return (
    <div className="card card-syles" >
      <img src="https://st.depositphotos.com/2650255/4760/v/950/depositphotos_47600511-stock-illustration-doctor-illustration.jpg" alt="" id="cardImage" />
      <Link to={'/dentist/' + id}>
        <h4>{name}</h4>
      </Link>
      <h4>{username}</h4>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  )
}

export default Card
