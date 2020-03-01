import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Cabecalho from './components/header'
import Routes from './Routes'
import Footer from './components/footer'
import Global from './styled/global-Styled'

export default function App() {
  return (
    <BrowserRouter>
        <Global/>
        <Cabecalho />
        <Routes />
        <Footer/>
    </BrowserRouter>
  )
}



