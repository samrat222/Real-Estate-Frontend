import React from "react";
import styled from "styled-components";
import Select from "./Select";
import Search from "./Search";

const SearchList = () => {
  return (
    <Wrapper>
      <Heading>Find your next place to live</Heading>
      <Wrap>
        <Selects>
          <Select placeholder="Looking For" />
          <Select placeholder="Property type" />
          <Select placeholder="Type" />
        </Selects>

        <SearchBox>
          <Search />
        </SearchBox>
        <Button>search</Button>
      </Wrap>
    </Wrapper>
  );
};

export default SearchList;

const Wrapper = styled.div`
  margin: 20px;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
`;
const Heading = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.6px;
  margin-bottom: 20px;
  margin-left: 4rem;
`;

const Selects = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;
const SearchBox = styled.div``;
const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 5px;
  margin: 1.3rem;
  background-color: #e4e4ee;
  border-radius: 5px;
`;
const Button = styled.button`
  width: 10%;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  background-color: #6c61f1;
  color: #fff;
  font-size: 1.2rem;
`;
