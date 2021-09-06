import React from 'react';
import styled from 'styled-components';
import '../styles/csshake.css';
import Jhon from '../img/Jhon.png';

/* Estilos */
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #0F0E17;
  padding: 8rem 6rem;
  height: 90vh;

  @media (max-width: 1000px){  
    flex-direction: column;
    padding: 4rem 2rem 0rem;
    height: fit-content;
  }
`;

const DataUser = styled.div`
  width: 50%;
  padding-right: 10rem;
  margin-top: 15rem;

  @media (max-width: 1000px){  
    padding-right: 0rem;
    margin-top: 0rem;
    width: 100%;
  }
`;

const ImgUserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  @media (max-width: 1000px){  
    width: 100%;
  }
`;

const Nombre = styled.h2`
  color: #FFFFFE;
  margin: 0;
  font-size: 6rem;

  @media (max-width: 1000px){  
    text-align: center;
    line-height: 7rem;
  }
`;

const Descripcion = styled.p`
  color: #A7A9BE;
  margin-top: 2rem;
  font-size: 2.2rem;
  line-height: 3rem;
  height: fit-content;

  @media (max-width: 1000px) {
    margin-bottom: 5rem;
    text-align: center;
  }
`;


const ArrowIcon = styled.i`
  cursor: pointer;
  margin: 7rem auto 0rem;
  color: #F25F4C;
  font-size: 5rem;
`;


const Img = styled.img`
  margin: 0;
  width: 60rem;

  @media (max-width: 1000px){  
    width: 40rem;
  }
`;


/* Componentes */
function InfoUser () {
  return (
    <DataUser>
      <div>
        <Nombre> ¡Hola a todos!</Nombre>
        <Nombre> Soy Jhon Hernández </Nombre>
      </div>

      <div>
        <Descripcion> Desarrollador front-end Muy-Junior apasionado por
          aprender y mejorar cada día. Me gusta la programación
          competitiva.
        </Descripcion>
        <Arrow/>
      </div>
    </DataUser>
  )
}

function ImgUser () {
  return (
    <ImgUserContainer>
      <Img src={Jhon} alt=".." />
    </ImgUserContainer>
  )
}

class  Arrow extends React.Component {  
  scroll ( ){
    window.scroll({
      top: 100000,
      behavior: 'smooth'
    });
  }

  render () {
    return (
      <ArrowIcon
        className="fas fa-arrow-down
                  shake-slow shake-constant
                  shake-constant--hover"
        onClick={() => this.scroll()}
      />
    );
  }
}

class Personalinfo extends React.Component {
  render () {
    return (
        <InfoContainer>
          <InfoUser />
          <ImgUser />
        </InfoContainer>
    )
  }
}

export default Personalinfo;