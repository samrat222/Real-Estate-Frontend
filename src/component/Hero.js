import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Text>
        <h2>
          Beautiful homes made
          <br /> for you
        </h2>
      </Text>
      <Image src="./images/hero_image.jpeg" />
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-image: "home.jpg"; */
`;
// https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
const Text = styled.div`
  h2 {
    position: absolute;
    left: 40px;
    font-weight: 500;
    font-size: 5rem;
    color: black;
    top: 10rem;
  }
`;

const Image = styled.img`
  /* object-fit: cover; */
  width: 43%;
  height: 70%;
  object-fit: contain;
  position: absolute;
  right: 5px;
`;
