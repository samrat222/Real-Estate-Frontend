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
            <LogoHeading>AASHROY</LogoHeading>
          </Logo>
        </Left>
        <Right>
          <MenuItemButton>REGISTER</MenuItemButton>
          <MenuItemButton>SIGN IN</MenuItemButton>
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
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 10px;
  padding: 0 50px;
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
  /* height: 40px; */
  /* border-radius: 50%; */
  /* overflow: hidden; */
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const MenuItemButton = styled.button`
  width: 20%;
  height: 50%;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  background-color: #6c61f1;
  color: #fff;
  font-size: 1rem;
  margin: 10px;
  padding: 10px;
  /* display: inline; */
`;

const LogoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const LogoHeading = styled.h1`
  font-size: 25px;
  margin-left: 10px;
`;
