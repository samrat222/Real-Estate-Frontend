import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <>
      <Container>
        <Heading>You're in good hands</Heading>
        <Para>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          sint quidem veritatis repellat optio minus eveniet nesciunt voluptatem
          totam? Laudantium molestiae natus corrupti dolores cumque doloremque
          cupiditate distinctio? Cupiditate eligendi quaerat magni doloribus
          tenetur modi sed, debitis cum labore. Minus voluptate cupiditate ea
          eos voluptatem temporibus quo labore libero officiis!
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
