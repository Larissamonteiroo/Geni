import React from 'react'
import { Header, Nav, Picture } from './styles'
import { Link } from 'react-router-dom'

import logo from './img/logo.png'

export default function Cabecalho() {
  return (
    <Header>
      <Picture>
        <Link to='/'>
          <img src={logo} alt="Contorno do Brasil com um pino de localização com as cores da bandeira LGBT" height="87" />   
          <p>GENI</p>
        </Link>
      </Picture>

      <Nav>
        <Link to='/'></Link>
        <Link to='/'>HOME</Link>
        <Link to='/about'>SOBRE NÓS</Link>
        <Link to='/contact'>CONTATO</Link>
      </Nav>
    </Header>
  )
}
