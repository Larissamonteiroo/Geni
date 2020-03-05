import React, { Component } from 'react'

import { Body, Lista, H1, List, Li, N, Ul } from './Styled'
import anderson from './img/Anderson.png'
import gabi from './img/Gabriela.png'
import lari from './img/Larissa.png'
import junior from './img/Junior.png'
import marcio from './img/Marcio.png'

export default class Membros extends Component {
    state = { 
      membros: [
        {
          id: 1,
          nome: "Anderson",
          sobrenome: " Barra",
          figure: anderson
        },
        {
          id: 2,
          nome: "Gabriela",
          sobrenome: " Rothje",
          figure: gabi
        },
        {
          id: 3,
          nome: "Larí­ssa",
          sobrenome: " Monteiro"
          figure: lari
        },
        {
          id: 4,
          nome: "Junior",
          sobrenome: " Sant'ana"
          figure: junior
        },
        {
          id: 5,
          nome: "Marcio",
          sobrenome: " Vinicius"
          figure: marcio
        }
      ]};
    render(){
      const { membros } = this.state;
  return (
      <Body>
        <H1>
            <h1>MEMBROS</h1>
        </H1>

        <Lista>

          <List>
            <Ul>
              {membros.map(nomes => 
                <Li key={nomes.id}>
                  <img src={nomes.figure} alt='fotosImg'/>
                  <br/> 
                  <N>{nomes.nome}{nomes.sobrenome}</N><br/>
                </Li> 
                )}
            </Ul>
          </List>
        </Lista>
      </Body>
  )
 }
}
