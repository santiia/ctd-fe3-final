import {footerStyles} from '../styles/footer.css'
import React from 'react'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
  const {data, theme} = useContextGlobal()
  return (
    <footer className={theme}>
      <p>Powered by</p>
      <img src="/images/DH.png" alt="DH-LOGO" />
    </footer>
  )
}

export default Footer
