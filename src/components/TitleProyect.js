import React from 'react';
import styled from 'styled-components';

/* Estilos */

const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 7rem;

  @media (max-width: 1000px) {
    justify-content: center;
    text-align: center;
  }
`;

const Frase = styled.h2`
  width: max(50%, 40rem);
  padding-right: 1rem;
  font-size: 4.2rem;
  color: #0F0E17;
  `;

const Descripcion = styled.p`
  width: max(50%, 40rem);
  max-width: 60rem;
  color: #0F0A0A;
  line-height: 3.5rem;
  font-size: 2.6rem;
  text-align: justify;

  @media (max-width: 1000px) {
    width: min(80%, 30rem);
  }
`;


function TitleProyect (){
  return (
    <Title>
      <Frase> Parece magia, funciona con código </Frase>
      <Descripcion> A lo laro de mi carrera como front-end he tenido el
          privilegio de trabajar en proyectos retadores e increibles
      </Descripcion>
    </Title>
  )
}
export default TitleProyect;