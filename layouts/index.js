import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Hero, Repositories, Stats } from "../components";
import UserDetail from "../components/UserDetail";

const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Container maxW="container.xl">
        <Stats />
        <Flex w="100%" py={4}>
          <Box w="25%">
            <UserDetail />
          </Box>
          <Box w="75%">
            <Stats />
            <Repositories />
          </Box>
        </Flex>
        
      </Container>
      {/* <footer className="">Footer here</footer> */}
    </>
  );
};

export default Layout;
