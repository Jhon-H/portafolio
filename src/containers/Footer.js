import React from 'react';
import styled from 'styled-components';
import '../styles/hover-min.css';


/* Estilos */
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0F0E17;
  padding: 3rem 6rem;
  color: #FFFFFE;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Logo = styled.h2`
  font-weight: bold;
  font-size: 4rem;
  margin: 0;
`;

const Icon = styled.i`
  font-size: 3.5rem;

  &:hover{
    color: #EA5455;
  }

  @media (max-width: 1000px) {
    font-size: 4rem;
  }
`;

const Link = styled.a.attrs(() => ({
  className: 'hvr-icon-rotate',
  target: '_blank'
}))`
  color: white;
`;

const Icons = styled.p`
  display: flex;
  justify-content: space-between;
  width: 25rem;
`;

const Heart = styled.i.attrs(() => ({
  className: 'hvr-icon'
}))`
  color: tomato;
  margin-left: 2rem;
  vertical-align: middle;
`;

const Made = styled.p`
  font-size: 2.5rem;
`;



/* Componentes */
function Footer () {
  return (
    <Div>
      <Logo> LOGO </Logo>
      <Made className="hvr-icon-pulse-grow">
        Hecho con
        <Heart className="fas fa-heart"></Heart>
      </Made>
      <Icons>
      <Link href="https://github.com/Jhon-H" target="_blank">
        <Icon className="fab fa-github-square hvr-icon"></Icon>
      </Link>
      <Link href="https://linkedin.com/in/jhon-h" target="_blank">
        <Icon className="fab fa-linkedin hvr-icon"></Icon>
      </Link>
      <Link href="https://discord.gg/Q4yaxSx5" target="_blank">
        <Icon className="fab fa-discord hvr-icon"></Icon>
      </Link>
      <Link href="https://codeforces.com/profile/Jhon_z09" target="_blank">
        <Icon className="fas fa-laptop-code hvr-icon"></Icon>
      </Link>
      </Icons>
    </Div>
  );
}

export default Footer;