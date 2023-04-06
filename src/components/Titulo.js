import styled from 'styled-components';


const Titulo = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(45deg, #6e5feb, #110, #102, #230, #100);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 767px) {
    font-size:25px;
  }
`;

const Subtitulo = styled.h2`
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 0;
  @media (max-width: 767px) {
    font-size:20px;
    color:#36393d;
  }
`;
 const IconFoto = styled.img`
  width: 110px;
  height: 100px;
  margin: 0 auto 0 auto;
  border-radius:50%;
  display:flex;
  border: solid 2px;
  
 
`
const DivIcon = styled.div`
width: 110px;
  height: 120px;
  margin: 0 auto 0 auto;
  border-radius: 50%;
  display: flex;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid rgba(238, 174, 202, 1);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &::before {
    top: -2px;
    left: -2px;
    background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(154, 185, 222, 1) 100%);
  }

  &::after {
    bottom: -2px;
    right: -2px;
    background: radial-gradient(circle, rgba(154, 185, 222, 1) 0%, rgba(238, 174, 202, 1) 100%);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  
`


const MiTitulo = () => {
  return (
    <>
      <Titulo>Gabriel Figueroa</Titulo>
      <DivIcon>
      <IconFoto alt='yomismo' src='https://pbs.twimg.com/media/FtC7MEYWIAgJ_Xv?format=jpg&name=medium' />
      </DivIcon>
    
      <Subtitulo>Ingeniero en informática </Subtitulo>
      
    </>
  );
};

export default MiTitulo;
