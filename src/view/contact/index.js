import React from 'react'
import { Container, Input2, Body, Corpo, Form, Section, Textarea, Article } from './styles'

import girl from './img/giphy.gif'
import svg from './img/Svg.png'


export default function Fale() {

  return (
    <Corpo>
        <section>
          <h1>Contato</h1>
          <svg viewBox="20 0 769 344" xmlns="http://www.w3.org/2000/svg">
            <path d="M 272 0.0130308C 164.8 1.21303 46 85.1797 0 127.013L 0 342.013L 867 342.013L 867 6.51303C 779 0.013031 684.5 127.013 616.5 127.013C 548.5 127.013 406 -1.48697 272 0.0130308Z"/>
          </svg>
        </section>
      <Form>
        <Container>
          <label> 

            <span class="nome">Nome* </span>
            <br/>
            <Input2 type='text' name='nome' />

          </label>
        </Container>

        <Container>
          <label>

            <span class="nome">E-mail* </span>
            <br/>
            <Input2 type='email' name='email' />

          </label>
        </Container> 

        <Section>
          <label>
          <span class="nome">Sua mensagem* </span>
          <br/>
          <Textarea name='comentarios'></Textarea>
          </label>
          <p>*Campos obrigatórios</p>
        </Section>
          
        <Body>
          <input type='submit' name='enviar' value='ENVIAR' />
        </Body>
      </Form>

      <Article>
        <section>
          <img src={girl} alt="menina"/>
        </section>
        <div>
          <img src={svg} alt='EmailSvg' />
          <p className='sed'>Email para contato<br/><a href='http://bit.ly/38acM65'>appgeni5@gmail.com</a></p>
        </div> 
      </Article>
    </Corpo>
  )
}