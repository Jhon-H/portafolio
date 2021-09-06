import React from 'react';
import styled from 'styled-components';
import DataForm from '../components/DataForm';
import Form from '../components/FormUser';

const ContactDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding: 10rem 0 ;
  background: #EA5455;  /* fallback for old browsers */
  background: linear-gradient(to right bottom, #FEB692 20%, #EA5455);
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: max(30%, 55rem);
  background-color: black;
  padding: 5rem 5rem;
  
  @media (max-width: 1000px){  
    width: min(95%, 50rem);
    padding: 3rem;
  }
`;

function Contact () {
  return (
    <ContactDiv>
      <Div>
        <DataForm />
        <Form />
      </Div>
    </ContactDiv>
  );
}

export default Contact;