import React from 'react'
import Form from '../Components/Form'
import { useContextGlobal } from '../Components/utils/global.context'
import '../styles/contact.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const {theme} = useContextGlobal()
  const clases = `contact ${theme}`
  return (
    <div className={clases}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <div className="contact-form">
        <Form />
      </div>
    </div>
  )
}

export default Contact
