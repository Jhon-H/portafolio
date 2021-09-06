import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 4.8rem;
  margin: 0;
  padding: 2rem 0 1rem;
  color: #FFFFFE;
`;

const Text = styled.p`
  font-size: 2rem;
  line-height: 3rem;
  color: #A7A9BE;
  margin-bottom: 2rem;
  align-items: center;
  text-align: center;
`;

function DataForm () {
  return (
    <Div>
      <Title> Contacto </Title>
      <Text> Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto.
      </Text>
    </Div>
  );
}

export default DataForm;