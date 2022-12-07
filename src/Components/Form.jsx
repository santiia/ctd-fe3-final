import React from 'react'
import {useState} from 'react'
import {formStyles} from '../styles/form.css'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [solicitud, setSolicitud] = useState({
    nombre: '',
    email: ''
  })

  const [meesage, setMessage] = useState('')
  // setear valores en el hook
  const HandleChange = (e) => {
    const nombre = e.target.name
    let value = e.target.value
    setSolicitud({...solicitud, [nombre]: value})
    console.log(solicitud)
  }
  // validar que el email tenga el formato correcto
  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    if (regEx.test(solicitud.email)) {
      return true
    } else {
      return false
    }
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    if (solicitud.nombre.length > 5 && emailValidation() === true) {
      setMessage(
        'Gracias ' +
          solicitud.nombre +
          ' te contactaremos cuanto antes via email'
      )
    } else {
      setMessage('Por favor verifique su informacion nuevamente')
    }
  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={(e) => HandleChange(e)}></input>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => HandleChange(e)}></input>
        <button type="submit" onClick={(e) => HandleSubmit(e)}>
          Envia
        </button>
      </form>
      <h3>{meesage}</h3>
    </div>
  )
}

export default Form
