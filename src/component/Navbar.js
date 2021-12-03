import React from "react";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            {/* <LogoImage src="./images/logo.jpeg" /> */}
            <LogoHeading>AASHROY</LogoHeading>
          </Logo>
        </Left>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  height: 60px;
  /* position: fixed; */
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: fixed; */
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  /* border-radius: 50%; */
  /* overflow: hidden; */
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const LogoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const LogoHeading = styled.h1`
  font-size: 20px;
`;
