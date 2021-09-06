import React from 'react';
import Card from './Card';
import styled from 'styled-components';
import BDproyects from '../data/proyects.js'


/* Estilos*/
const DivBackground = styled.div`
  display: flex;
  align-items: center;
  width: ${props => props.primaryCard ? 100 : 49}%;
  background-color: papayawhip;
  background-image: url(${props => props.img});
  background-size: cover; 
  background-repeat: no-repeat;
  height: max(40rem, 'fit-contain');
  margin-top: 2rem;
  padding: 9rem 0;

  @media (max-width: 1000px) {
    position: relative;
    padding: 35rem 0 0;
    width: 100%;
  }
`;

const ProyecSmall = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;


/* Componentes */
function Proyect (props) {
  return (
    <DivBackground
      primaryCard = {props.primaryCard ? true: false}
      img = {props.data.img}
    >
      <Card
        data = {props.data}
        primaryCard = {props.primaryCard ? true: false}
      />
    </DivBackground>
  )
}

function Proyects () {
  return (
    <>
      <Proyect url="img" data={BDproyects[0]} primaryCard/>
      <ProyecSmall>
        <Proyect url="img" data={BDproyects[1]} />
        <Proyect url="img" data={BDproyects[2]} />
      </ProyecSmall>
    </>
  )
}

export default Proyects;