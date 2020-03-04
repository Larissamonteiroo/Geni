import styled from 'styled-components'

export const Body = styled.body`
`

export const Section = styled.section`
  max-width: 100%;
  margin: 0 auto;
  background-image: linear-gradient(to right,  #7FA01D, #425607);
  display: flex;
  p {
    margin: 0 auto;
    padding: 0 5%;
    max-width: 850px;
    font-family: Sans-serif;
    font-size: 22px;
    color: #fff;
    text-align: justify;
    padding-bottom: 40px;
  }
`

export const Lista = styled.section`
  padding: 30px 0;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
`

export const Title = styled.section`
  max-width: 100%;
  justify-content: center;
  padding: 5% 0;
  display: flex;
  background-image: linear-gradient(to right,  #7FA01D, #425607);
  h1 {
    padding-top: 5%;
    color: #fff;
    font-family: Sans-serif;
  }
  img {
    margin-left: 5%;
    width: 100%;
    max-width: 100px;
  }
`

export const List = styled.section`
  display:  flex;
  flex-wrap:  wrap;
  align-items:  center;
  justify-content:  center;
`

export const Li = styled.li`
  display:  flex;
  flex-direction: column;
  margin: 0 auto;
  align-items:  center;
  justify-content:  center;
  img {
    width: 100%;
    max-width: 230px;
  }
`

export const F = styled.p `
  margin: 0px;
  padding-bottom: 20px;
  font-family: Sans-serif;
`

export const N = styled.p `
  padding: 0px;
  margin: 0px;
  font-family: Sans-serif;
`

export const Ul = styled.ul`
  display:flex;
  flex-wrap:wrap;
`

export const H1 = styled.section`
  max-width: 100%;
  display: flex;
  color: #0084D7; 
  h1 {
    margin: 20px auto;
    font-family: Sans-serif;
  }
`
