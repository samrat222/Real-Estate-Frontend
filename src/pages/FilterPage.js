import styled from "styled-components";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import Footer from "../component/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const FilterPage = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>1BHK</Option>
            <Option>2BHK</Option>
            <Option>3BHK</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Price:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price low to high</Option>
            <Option value="desc">Price high to low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Card cat={cat} filters={filters} sort={sort} />
      <Footer />
    </Container>
  );
};

export default FilterPage;

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-left: 45px;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;
