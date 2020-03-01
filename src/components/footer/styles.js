import styled from 'styled-components'

export const Corpo = styled.body`
  padding-top: 35px;
  padding-bottom: 50px;
  background: #0084D7;
  p {
  display: flex;
  justify-content: flex-end;
  margin: 0 auto;
  font-family: "Raleway", Sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #1D1E20;
  margin-right: 6.3%;
  padding-bottom: 1%; 
  }
`


export const Redesociais = styled.section `
  display: flex;
  padding-right 5%;
  a {
    img {
    width: 100%;
    max-width: 50px;
    margin-right: 1%;
    }
  }
`

export const Roda = styled.footer `
  display: flex;
  align-items: center;
`

export const Copyright = styled.section `
  display: block;
  width: 1366px;
  p {
    margin: 0 5%;
    display: flex;
    justify-content: center;
    font-family: "Roboto", Sans-serif;
    font-size: 15px;
    font-weight: bold;
    color: #1D1E20;
  }
`

export const Ul = styled.ul`
  padding-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
`

