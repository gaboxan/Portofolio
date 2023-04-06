import styled from "styled-components"
import Image from 'next/image'
import { Button } from "@mui/material"


export const Nav = styled.nav`
width:100%;
background-color:transparent;
align-items:center;
text-align:right;
height:40px;
padding:8px 50px 0 5px;
display:block;
color:#191919;
font-family: "Roboto", sans-serif;
font-size: 10px;
text-shadow: -3px 9px 6px rgba(0,0,0,0.6);

`
export const ImageContainer = styled.div`
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;
height: 100%;
`
export const ImageContainerProjects = styled.div`
margin-top: 30px;
display: flex;
justify-content: right;
align-items: right;
margin-bottom:;
border-radius:10px;



`
export const ImageStyled = styled(Image)`
box-shadow: 0px 0px 34px 4px rgba(168,203,240,1);
  border-radius:10px;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  align-items: center;
  max-width: 100%; 
  max-height: 500px; 
`
export const ImageCircular = styled(Image)`

  border-radius:50%;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  align-items: center;
  max-width: 100%; /* Hace que la imagen sea responsiva */
  max-height: 500px; /* Establece una altura máxima para la imagen */
`

export const DivColumn = styled.div`
  display: flex;

  height: 100%;
  flex-direction: column;
  width: 70%;
  margin: auto;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  background-color: #7866e6;

  @media (max-width: 600px) {
    /* Anula el ancho del contenedor en dispositivos móviles */
    width: 100%;

    & :not(h1) { /* Aplica estilos a todos los elementos excepto h1 */
      text-align: left; /* Alinea el contenido a la izquierda */
      color: #9ab9de;
    }
  }
`

export const DivRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px;
  
  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
    margin: 2px;
  }
`
export const DivProjects = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0 0 0;
  height: 100%;
  flex-direction: column;
  width: 80%;
  text-align: center; /* Centra solo los elementos h1 */

  & > :first-child {
    flex-grow: 1;
  }

  & > :last-child {
    flex-grow: 3;
  }
  @media (max-width: 600px) {
    /* Anula el ancho del contenedor en dispositivos móviles */
    width: 100%;

 
}
`




export const DivRRSS = styled.div`

display: flex;
justify-content: space-evenly;
align-items: center;
height: 100%;
flex-direction: row;
padding:0 2% 0 2%;

`
export const DivRS = styled.div`

display: flex;
flex-direction: column;
margin:0 0 20px;
text-align:center;
`

export const H1Center = styled.h1`
  margin: 5px auto;
 
  
  
`;

export const ButtonL = styled(Button)`
  color: white;
  background-color: #0077b5; // Color de LinkedIn
  &:hover {
    background-color: #0e6bba; // Color de LinkedIn en hover
  }
`;
export const ButtonGm = styled(Button)`
  color: white;
  background-color: #FF5733; 
  &:hover {
    background-color: #D8231D ; 
  }
`;
export const ButtonG = styled(Button)`
  color: white;
  background-color: black; // Color de LinkedIn
  &:hover {
    background-color: gray; // Color de LinkedIn en hover
  }
`;


