import React from "react";
import { cardData, sizeData } from "../Data";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

const CardBHK = ({ item }) => {
  return (
    <Container>
      <Link to={`/filter/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Size>{item.size}</Size>
          <Button>SHOW NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CardBHK;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Size = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  color: gray;
  font-weight: 600;
`;

const Div = styled.div`
  display: flex;
`;
