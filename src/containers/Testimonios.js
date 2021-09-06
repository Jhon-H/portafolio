import React from 'react';
import styled from 'styled-components';
import DBcomments from '../data/comments.js';


/* Estilos */
const CommentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 1000px){
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 4.8rem;
  font-weight: bold;
  color: #FFFFFE;
  margin: 0;
  margin-bottom: 8rem;

  @media (max-width: 1000px){
    text-align: center;
    margin-bottom: 4rem;
  }
`;

const Img = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin-right: 2rem;
`;

const Name = styled.h3`
  font-weight: bold;
  color: #F25F4C;
  text-transform: capitalize;
  font-size: 2em;
`;

const Text = styled.p`
  line-height: 3.5rem;
  font-size: 1.9rem;
  color: #c7c8d4;
  font-weight: normal;

  @media (max-width: 1000px){
    text-align: justify;
    padding-right: 1rem;
  }
`;

const DataDiv = styled.div`
  margin-bottom: 4rem;
  width: min(30%, 50rem);

  @media (max-width: 1000px){
    width: 90%;
  }
`;

const TestimoniosDiv = styled.div`
  background-color: #0F0E17;
  padding: 12rem 6rem;
  @media (max-width: 1000px){
    padding: 7rem 2rem;
  }
`;

const PersonalDataDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px){
    justify-content: start;
  }
`;


/* Componentes */
function Comment (props) {
  return (
    <DataDiv>
      <PersonalDataDiv>
        <Img src={props.data.img} alt="..." />
        <Name> {props.data.name} </Name>
      </PersonalDataDiv>
      <Text> {props.data.text} </Text>
    </DataDiv>
  );
}

function  Testimonios () {
  return (
    <TestimoniosDiv>
      <Title> Testimonios </Title>
      <CommentDiv>
        {
          DBcomments.map((comment, idx) =>
            <Comment data={comment} key={idx} />
          )
        }      
      </CommentDiv>
    </TestimoniosDiv>
  );
}

export default Testimonios;