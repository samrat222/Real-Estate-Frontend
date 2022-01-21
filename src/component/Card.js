import { Bathtub, KingBed, Kitchen } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { cardData } from "../Data";
import axios from "axios";
import { Link } from "react-router-dom";

const Card = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterdProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?size=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
      <Container>
        {filterdProducts.map((item) => (
          <Cards>
            <Component>
              <Image src={item.img} />
              <Title>{item.title}</Title>
              <Hr />
              <DetailRoom>
                <Details>
                  <KingBed />
                  <Size>4</Size>
                </Details>
                <Details>
                  <Bathtub />
                  <Size>2</Size>
                </Details>
                <Details>
                  <Kitchen />
                  <Size>1</Size>
                </Details>
              </DetailRoom>
              <Link to={`/product/${item._id}`}>
                <Button>SHOW NOW</Button>
              </Link>
            </Component>
          </Cards>
        ))}
      </Container>
    </>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Cards = styled.div`
  width: 18rem;
  height: 25rem;
  box-shadow: 0 0 50px #ccc;
  border-radius: 1.5rem;
  margin: 2rem;
  cursor: pointer;
`;

const Component = styled.div``;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
`;

const Title = styled.h1`
  text-align: center;
  padding: 10px;
  font-size: 20px;
`;

const DetailRoom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 20px;
`;
const Details = styled.span`
  margin: 5px;
  display: flex;
  align-items: center;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Size = styled.span`
  margin: 7px;
`;

const Button = styled.button`
  padding: 3px;
  cursor: pointer;
  background-color: white;
  color: gray;
  font-weight: 600;
  margin-left: 33%;
  border-radius: 5px;
`;

const Button_2 = styled.div`
  margin: auto;
  width: 20%;
  border: 3px solid green;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  background-color: #6c61f1;
  color: #fff;
  font-size: 1rem;
  align-items: center;
  text-align: center;
  margin-top: 100px;
`;
