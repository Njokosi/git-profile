import React from "react";
import { Box, Container, Text, Flex } from "@chakra-ui/react";
import { Navbar, Footer, Hero, Stats } from "../components";

const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Container maxW="container.xl">
        <Stats />
      </Container>
      {/* <footer className="">Footer here</footer> */}
    </>
  );
};

export default Layout;
