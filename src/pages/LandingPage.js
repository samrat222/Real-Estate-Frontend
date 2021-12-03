import React from "react";
import Hero from "../component/Hero";
import styled from "styled-components";
import Card from "../component/Card";
import About from "../component/About";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider";
import SearchList from "../component/SearchList";

const LandingPage = () => {
  return (
    <Container>
      <Navbar />
      <Hero />
      <SearchList />
      <Slider />
      <Card />
      <About />
      <Footer />
    </Container>
  );
};

export default LandingPage;

const Container = styled.div`
  background-color: #f5f5f5;
  height: 100vh;
`;
