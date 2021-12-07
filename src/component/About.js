import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <Container>
        <Heading>You're in good hands</Heading>
        <Para>
          Save your time and commotion of hiring real estate agents and avoid
          all the bargaining with brokers. With just few clicks on your screen
          you will own the property that you have always wanted. Aashroy is
          India's finest and safest place to buy the home of your dreams. We
          have homes all across India with different sizes and designs to
          choose.
        </Para>
      </Container>
    </>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 5rem 10rem;
  padding: 10rem;
`;

const Heading = styled.h1`
  font-size: 5rem;
`;

const Para = styled.p`
  margin-top: 3rem;
  font-size: 20px;
  text-align: center;
`;
