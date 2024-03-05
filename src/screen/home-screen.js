import React from "react";
import Layout from "../components/Layout";
import {Container} from "../components/styled";
import HomeBody from "../components/HomeBody";

const HomePage = () => {
  
  return (
    <Layout>

      <Container 
      width="100%"
      size="fullwidth"
      height="100vh"
     >
    <HomeBody />

    </Container>

    </Layout>
  );
};

export default HomePage;
