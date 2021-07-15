import React from "react";
import { Box, Container, Image, Flex, Heading } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Hero = ({ userData }) => {
  const user = {
    imageUrl: userData?.avatar_url,
    imageAlt: "User profile",
  };

  return (
    <>
      <Box
        w="100%"
        h="350px"
        borderBottomRadius="xl"
        bgRepeat="no-repeat"
        bgSize="auto"
        bgPosition="50%"
        overflow="hidden"
        style={{
          backgroundImage: "radial-gradient(circle at 1% 1%,#328bf2,#1644ad)",
        }}
      >
        <Navbar />
        <Flex>
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
      </Box>

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
