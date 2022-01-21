import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../RequestMethod";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart } from "../redux/cartRedux";
// import { useNavigate } from "react-router-dom";

const KEY =
  "pk_test_51K4ldWSAchQ8rE03hS63KLF3gjrc0drZzTz3LHccJYw4kQUsw0Ip1yCEnC4koDk9EKluGFjy2NwJiDdi339ukgvV00BTuW09YS";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success", { data: res.data });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  const handleRemoveFromCart = (Product) => {
    dispatch(removeFromCart(Product));
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to={`/filter/large`}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color=" #6c61f1;" />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                    <ProductPrice>$ {product.price}</ProductPrice>
                    {/* <RemoveBtn onClick={() => handleRemoveFromCart(Product)}>
                      REMOVE
                    </RemoveBtn> */}
                  </Details>
                </ProductDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated shipping</SummaryItemText>
              <SummaryItemPrice>$500.9</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping discount</SummaryItemText>
              <SummaryItemPrice>$-500.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="AASHROY"
              image="https://i.graphicmama.com/blog/wp-content/uploads/2020/10/30131032/P-amazing-3D-logo-design-concept-in-20211.jpg"
              billingAddress
              shippingAddress
              description={`your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  border-radius: 5px;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "#6c61f1" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 550px;
  height: 300px;
  padding-bottom: 15px;
`;

const Details = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #6c61f1;
  color: white;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  border: none;
`;

const RemoveBtn = styled.button`
  width: 80%;
  padding: 10px;
  background-color: #6c61f1;
  color: white;
  border-style: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 13px;
`;
