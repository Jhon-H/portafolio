import React from 'react';
import styled from 'styled-components';
import '../styles/hover-min.css';

const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${props => (props.primaryCard ? 45 : 70)}%;
  background-color: #0F0E17;
  padding: 3rem;
  height: fit-content;

  @media (max-width: 1000px) {
    postition: absolute;
    bottom: 0;
    width: 100%;
  }
`;


const Title = styled.h2`
  color: #FFFFFE;
  margin: 2rem 0 1rem 0;
  font-size: 2.4rem;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const Descripcion = styled.p`
  margin: 0;
  color: #A7A9BE;
  line-height: 3rem;
  margin-bottom: 7rem;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

const Button = styled.button.attrs(props => ({
  className: (props.primary
              ? 'hvr-bounce-to-right'
              : 'hvr-shutter-in-vertical'),
}))`
  background-color: ${props => (props.primary ? '#FF8906' : 'lightsteelblue')}!important;
  color: ${props => (props.primary ? '#FFFFFE' : '#FF8906')}!important;
  border-style: none;
  border: .1rem solid #FF8906;
  padding: 1rem;
  margin: 0rem 1.5rem 3rem 0;
  cursor: pointer;
  font-size: 1.6rem;
  vertical-align: 0!important; /* !important necesario */

  &:before {
    /* !important necesario*/
    background-color: ${props => (props.primary ? 'tomato' : '#0F0E17')}!important;
  }

  &:hover{
    border: .1rem solid ${props => props.primary ? 'tomato' : 'navy'};
    color: ${props => props.primary ? '#FFFFFE' : 'navy'}!important;
  }

  @media (max-width: 1000px) {
    width: 100%
  }
`;


/* Componentes */
function Card (props) {
  return (
    <CardSection primaryCard={props.primaryCard}>
      <div>
        <Title> {props.data.nombre} </Title>
        <Descripcion> {props.data.descripcion} </Descripcion>
      </div>
      <div>
        <Button onClick={() => window.open(props.data.urlDespliegue)} primary>
          Ver proyecto completo
        </Button>
        <Button onClick={() => window.open(props.data.urlRepositorio)}>
          Ver código
        </Button>
      </div>
    </CardSection>
  )
}

export default Card;