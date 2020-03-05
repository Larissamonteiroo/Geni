import styled from 'styled-components'

export const Home1 = styled.section `
  max-width: 100%;
  height: 645px;
  background-image: linear-gradient(to right,  #0084D7, #0266A5);
  color: #fff;
  display: flex;
  img {
    width: 100%;
    max-width: 680px;
    max-height: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 10%;
    padding-right: 5%;
  }
  p {
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 23px;
    padding-top: 15%;
    padding-left: 5%;
    padding-right: 10%;
    width: 600px;
    text-align: justify;
  }
`

export const Home2 = styled.section `
  max-width: 100%;
  height: 604px;
  background: #fff;
  color: #0084D7;
  display: flex;
  justify-content: space-between;
  img {
    width: 100%;
    max-width: 430px;    
    max-height: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-right: 15%;  
  }
  p {
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 30px;
    padding-top: 18%;
    padding-left: 10%;
    width: 550px;
    text-align: justify;
  }
`

export const Home3 = styled.section `
  max-width: 100%;
  height: 604px;
  background-color: #7FA01D;
  color: #fff;
  display: flex;
  justify-content: space-between;
  img {
    width: 100%;
    max-width: 430px;    
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 15%;
  }
  p {
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 28px;
    padding-top: 18%;
    padding-right: 10%;
    width: 580px;
    text-align: justify;
  }
`

export const Home4 = styled.section `
  max-width: 100%;
  height: 604px;
  background: #fff;
  color: #0084D7;
  display: flex;
  section {
    display: flex;
    flex-direction: column;
    padding-top: 15%;
    padding-bottom: 5%;
    padding-left: 10%;
    button {
      width: 100%;
      max-width: 310px;
      max-height: 75px;
      border-radius: 10%;      
      margin-bottom: 5%;
      background-color: transparent;
      img {
      width: 100%;
      max-width: 310px;
      max-height: 100%;
      height: 100%;
      max-height: 80px;
      padding-bottom: 2%;
      }
    }
  }
  video {
    width: 100%;
    max-width: 600px;
    border-radius: 100%;
    margin-left: 13%;
  }
`
