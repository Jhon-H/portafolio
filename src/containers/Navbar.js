import React from 'react';
import { LinkSeccion, ButtonCurriculum} from '../components/Elementsbar';
import styled from 'styled-components';
import '../styles/csshake.css';


/* Estilos */
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0F0E17;
  padding: 1rem 6rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const LinksDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Logo = styled.p`
  font-size: 2.4rem;
  font-weight: bold;
  color: #FFFFFE;
  margin-right: 1rem;
`;


/* Componentes */

function Navbar () {
  return (
    <Nav>
      <LinksDiv>
        <Logo> LOGO </Logo>
        <LinkSeccion link="#Hola" name="Hola" />
        <LinkSeccion link="#Proyectos" name="Proyectos" />
        <LinkSeccion link="#Testimonios" name="Testimonios" />
        <LinkSeccion link="#Contacto" name="Contacto" />
      </LinksDiv>
      <ButtonCurriculum />
    </Nav>
  )
}

export default Navbar;