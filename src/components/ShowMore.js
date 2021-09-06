import React from 'react';
import styled from 'styled-components';
import '../styles/hover-min.css';

const Button = styled.button`
  display: block;
  background-color: white;
  border: .1rem solid black;
  color: black;
  padding: 2rem 3rem;
  margin: 9rem auto 2rem;
  cursor: pointer;
  font-size: 1.8rem;
`;

const Arrow = styled.i`
  margin-left: .4rem;
`;


function ShowMore () {
  return (
    <Button
      className="hvr-underline-from-center" 
      onClick={() => window.open('https://github.com/JHon-H')}
    > 
      Ver más proyectos
      <Arrow className="fas fa-arrow-right"></Arrow>
    </Button>
  )
}

export default ShowMore;