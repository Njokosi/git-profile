import React from "react";
import { Box, Container, Image, Flex, Heading } from "@chakra-ui/react";

const Hero = ({ userData }) => {
  const user = {
    imageUrl: userData?.avatar_url,
    imageAlt: "User profile",
  };

  return (
    <>
      <Flex
        w="100%"
        h="300px"
        borderBottomRadius="xl"
        bgColor="secondary.100"
        bgRepeat="no-repeat"
        bgSize="auto"
        bgPosition="50%"
        overflow="hidden"
        style={{ backgroundImage: "radial-gradient(circle at 1% 1%,#328bf2,#1644ad)"}}
      >
        <Container
          display="flex"
          alignItems="stretch"
          justifyContent="flex-end"
          maxW="container.xl"
        >
          <Flex justifyContent="flex-end" alignItems="center">
            <Image
              h="250px"
              src="/illustrations/lime-483.png"
              alt="Technology Illustration"
            />
          </Flex>
        </Container>
      </Flex>

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
