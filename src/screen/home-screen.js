import React from "react";
import Layout from "../components/Layout";
import {Container} from "../components/styled";
import HomeBody from "../components/HomeBody";



const HomePage = () => {
  return (
    <Layout>

      <Container 
      size="fullwidth"
      width="100%"
     >
    <HomeBody />

    </Container>

    </Layout>
  );
};

export default HomePage;
