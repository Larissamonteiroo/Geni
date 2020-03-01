import React, { Component } from 'react'

import { Body, Lista, H1, List, Li, F, N, Ul } from './Styled'
import anderson from './img/Anderson.png'
import gabi from './img/Gabriela.png'
import lari from './img/Larissa.png'
import naty from './img/Nathalia.png'
import junior from './img/Junior.png'
import marcio from './img/Marcio.png'

export default class Membros extends Component {
    state = { 
      membros: [
        {
          id: 1,
          nome: "Anderson",
          funcoes: 'Marketing',
          figure: anderson
        },
        {
          id: 2,
          nome: "Gabriela",
          funcoes: 'Design Ui/Ux',
          figure: gabi
        },
        {
          id: 3,
          nome: "Larí­ssa",
          funcoes: 'Full Stack',
          figure: lari
        },
        {
          id: 4,
          nome: "Nathalia",
          funcoes: 'Rede Sociais',
          figure: naty
        },
        {
          id: 5,
          nome: "Vladimir",
          funcoes: 'Comunicação',
          figure: junior
        },
        {
          id: 6,
          nome: "Márcio",
          funcoes: 'Full Stack',
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
                  <N>{nomes.nome}</N><br/>
                  <F>{nomes.funcoes}</F>
                </Li> 
                )}
            </Ul>
          </List>
        </Lista>
      </Body>
  )
 }
}