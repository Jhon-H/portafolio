import React from 'react';
import styled from 'styled-components';
import BDservices from '../data/services.js';
import '../styles/hover-min.css';


/* Estilos */
const ServicesDiv = styled.div`    
  background: #EA5455;  /* fallback for old browsers */
  background: linear-gradient(to right bottom, #FEB692 20%, #EA5455);
  padding: 13rem 6rem;
  height: fit-content;

  @media (max-width: 1000px){
    padding: 8rem 2rem;
  }
`;

const Title = styled.h2`
  font-size: 4.8rem;
  margin: 0;
  margin-bottom: 6rem;
  color: #0F0E17;

  @media (max-width: 1000px){ 
    margin-bottom: 5rem;
    text-align: center;
  }
`;

const Div = styled.div`
  display: flex;
  color: #0F0E17;

  @media (max-width: 1000px){
    flex-direction: column;
  }
`;

const ServiceDiv = styled.div`
  margin-right: 15rem;
  @media (max-width: 1000px){
    margin-bottom: 5rem;
    margin-right: 0;
    text-align: center;
  }
`;

const TitleSER = styled.h2`
  font-size: 3.2rem;
  margin-bottom: 4rem;

  @media (max-width: 1000px) {
    text-decoration: underline wavy;
  }
`;

const NameProyect = styled.p`
  font-size: 2.4rem;
  margin-bottom: 3rem;
`;

const Button = styled.button`
  margin-top: 5rem;
  border-style: none;
  border-radius: 5rem;
  padding: 1.5rem 2rem;
  font-size: 1.8rem;
  cursor: pointer;
  background-color: #7c5c5c;
  color: #FFFFFE;

  @media (max-width: 1000px){
    margin-top: 2rem;
  }
`;

const Arrow = styled.i`
  margin-left: 1rem;
`;


/* Componenetes */

function ButtonService (props) {
  return (
    <Button
      onClick={() => window.open(props.urlServices)}
      className="hvr-icon-wobble-horizontal"
    >
      Ver {props.nameBtn}
      <Arrow className="fas fa-arrow-right hvr-icon"></Arrow>
    </Button>
  );
}

function Service (props) {
  return (
    <ServiceDiv>
      <TitleSER> {props.data.title} </TitleSER>
      {
        props.data.services.map((service, idx) =>
         <NameProyect key={idx}> {service} </NameProyect>
        )
      }
      <ButtonService
        nameBtn = {props.data.nameBtn}
        urlServices = {props.data.urlServices}
      />
    </ServiceDiv>
  );
}

function Services () {
  return (
    <ServicesDiv>
      <Title> Servicios </Title>
      <Div>
        <Service data={BDservices[0]}/>
        <Service data={BDservices[1]}/>
        <Service data={BDservices[2]}/>
      </Div>
    </ServicesDiv>
  );
}

export default Services;
