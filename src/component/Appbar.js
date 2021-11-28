import React from "react";
import styled from "styled-components";

const Appbar = () => {
  return (
    <Navbar>
      <Logo>
        <LogoImage src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bG9nb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" />
      </Logo>
      <List>
        <li>Navlink</li>
        <li>Navlink</li>
        <li>Navlink</li>
        <li>Contact Us</li>
      </List>
    </Navbar>
  );
};

export default Appbar;

const Navbar = styled.nav`
  padding: 5px 20px;
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  li{
      list-style: none;
      margin: 0 20px;
  }
`;
const Logo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;
const LogoImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
