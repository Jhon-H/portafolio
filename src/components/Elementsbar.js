import React from 'react';
import styled from 'styled-components'
import Cv_Jhon from '../cv/Cv_Jhon.pdf';

/* Estilos */
const Link = styled.a`
  padding: .5rem;
  text-decoration: none;
  font-size: 1.8rem;
  color: #FFFFFE;
  border-bottom: .3rem solid transparent;
  transition: all .4s ease-in-out;

  &:hover{
    color: #F6907B;
    border-bottom-color: tomato;
  }
`;

const BtnCv = styled.a`
  display: block;
  background-color: #F25F4C;
  color: #FFFFFE;
  border: none;
  height: fit-content;
  padding: 1.2rem;
  border-radius: .3rem;
  font-weight: bold;
  font-size: 1.6rem;
  transition: background .4s ease-in-out;
  text-decoration: none;

  &:hover{
    cursor: pointer;
    background-color: orangered;
  }
`;

/* Componentes */
export  const LinkSeccion = props  => {
  return(
    <Link href={props.link}> {props.name} </Link>
  )
}

export const ButtonCurriculum = () => {
  return (
    <BtnCv href={Cv_Jhon} download="Jhon_CV">
      Descargar Curriculum
    </BtnCv>
  )
}
