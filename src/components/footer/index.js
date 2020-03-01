import React from 'react'
import { Corpo, Ul, Redesociais, Roda, Copyright} from './styles'

import facebook from '../../assets/img/facebook.png'
import instagram from '../../assets/img/instagram.png'
import twitter from '../../assets/img/twitter.png'

export default function Footer() {
    const sites = [
        {
          id: 1,
          url: "https://www.facebook.com/Geniapp-103202654448159",
          figure: facebook
        },
        {
          id: 2,
          url: "https://www.instagram.com/appgeni",
          figure: instagram
        },
        {
          id: 3,
          url: "https://twitter.com/app_geni",
          figure: twitter
        }
      ];
  return (
      <Corpo>
        <p>SIGA O GENI NAS REDES SOCIAIS</p>
        <Ul>
          {sites.map(nomes =>
          <Redesociais key={nomes.id}>
			      <a href={nomes.url}>
              <img src={nomes.figure} width="30" alt='appstoe'/>
            </a>
		      </Redesociais>)}
        </Ul>
		    <Roda>
			    <Copyright>
				    <p>©Copyright 2019 AppGENI, Inc. Todos os direitos reservados. As diversas marcas comerciais pertencem a seus respectivos proprietários</p>	
			    </Copyright>
		    </Roda>
      </Corpo>
  )
}

