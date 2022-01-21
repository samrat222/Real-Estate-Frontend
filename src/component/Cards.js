import React from "react";
import styled from "styled-components";
import { sizeData } from "../Data";
import CardBHK from "./CardBHK";

const Cards = () => {
  return (
    <Container>
      {sizeData.map((item) => (
        <CardBHK item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-between;
`;
