import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <Text>
        <h2>
          Beautiful home made
          <br /> for you
        </h2>
      </Text>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 70vh;
  background-color: #d67a7a;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: "home.jpg"; */
  background: url("https://assets.architecturaldigest.in/photos/60083e76274aca243711c3a4/16:9/w_2560%2Cc_limit/ghaziabad-uttar-pradesh-homes-photos-1000x768.jpg")
    no-repeat center center/cover;
`;
// https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80
const Text = styled.div`
  h2 {
    position: absolute;
    left: 50px;
    font-weight: 500;
    font-size: 5rem;
    color: #fff;
    top: 10rem;
  }
`;
