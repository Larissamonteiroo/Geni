import React from 'react'

import { Home1, Home2, Home3, Home4} from './styles'
import home from './img/homecel.png'
import pes from './img/celpesquisar.png'
import fav from './img/celfavoritos.png'
import app from './img/appstore.png'
import play from './img/playstore.png'
// import iris from './img/casais.gif'


export default function Home() {
  return (
    <body>
        <Home1>
          <img src={home} alt='homedoapp' />
          <p>Geni é um aplicativo LGBT+
              que promove a segurança da comunidade através da 
              sinalização de locais seguros a partir de relatos 
              e experiências dos próprios usuários</p>
        </Home1> 
        <Home2>
          <p>Encontre estabelecimentos LGBT+ friendly 
              perto de você</p>
          <img src={pes} alt='homedoapp' />
        </Home2>
        <Home3>
          <img src={fav} alt='homedoapp' />
          <p>Salve seus lugares favoritos 
              e faça listas de onde deseja ir</p>
        </Home3>
        <Home4>
          <section>
            <button><img src={app} alt='appstore'/></button>
            <button><img src={play} alt='playstore'/></button>
          </section>

          <video id="video" playsinline="" muted="" autoplay="" loop="true" data-silent="true" src="https://cdn.dribbble.com/users/482851/screenshots/5702120/casais.gif?vid=1">
          </video>
        </Home4>
    </body>
  )
}

