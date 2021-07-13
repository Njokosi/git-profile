import React from "react";
import { Box, Container, Image } from "@chakra-ui/react";

const Hero = () => {
  const user = {
    imageUrl: "https://avatars.githubusercontent.com/u/75541922?v=4",
    imageAlt: "User profile",
  };

  return (
    <>
      <Box w="100%" h="300px" borderRadius="lg" bgColor="secondary.50" />
      <Container maxW="container.xl">
        <Box mt={-24}>
          <Image
            border="8px"
            borderColor="white"
            borderRadius="full"
            boxSize={48}
            src={user.imageUrl}
            alt={user.imageAlt}
          />
        </Box>
      </Container>
    </>
  );
};

export default Hero;
