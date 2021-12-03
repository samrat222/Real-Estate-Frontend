import React from "react";
import styled from "styled-components";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="./images/product_1.jpeg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Hell cottege</Title>
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            assumenda nesciunt adipisci placeat, expedita rem impedit voluptates
            maxime reprehenderit labore quisquam dolores eum culpa commodi
            reiciendis saepe recusandae libero nam.
          </Desc>
          <Price>$5000</Price>
          <FilterContainer>
            <Filter>
              {/* <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>1 BHK</FilterSizeOption>
                <FilterSizeOption>2 BHK</FilterSizeOption>
                <FilterSizeOption>3 BHK</FilterSizeOption>
                <FilterSizeOption>4 BHK</FilterSizeOption>
              </FilterSize> */}
            </Filter>
          </FilterContainer>
          <AddContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 70px;
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
`;

const Filter = styled.span`
  display: flex;
  align-items: center;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;
