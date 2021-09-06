import React from 'react';
import styled from 'styled-components';
import TitleProyect from '../components/TitleProyect'
import Proyects from '../components/Proyects';
import ShowMore from '../components/ShowMore';

const Div = styled.div`
  padding: 8rem 6rem;
  @media (max-width: 1000px) {
    padding: 6rem 2rem;
  }
`;

function ProyectsSection () {
  return (
    <Div>
      <TitleProyect />
      <Proyects />
      <ShowMore />
    </Div>
  )
}

export default ProyectsSection;