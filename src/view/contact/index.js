import React from 'react'
import { Container, Input2, Body, Corpo, Form, Section, Textarea, Article } from './styles'

import girl from './img/giphy.gif'

export default function Fale() {

  return (
    <Corpo>
        <section>
          <h1>Contato</h1>
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
