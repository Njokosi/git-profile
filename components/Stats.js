import React from "react";
import { Box, Text, Flex, Stack, Heading } from "@chakra-ui/react";


// TODO: ON LEFT SHOW TWITTER PROFILE, LOCATION ETC, RIGHT SHOW STATS
const Stats = () => {
  return (
    <Flex w="100%" py={4}>
      <Box w="25%">
        <Stack direction={["column", "row"]} spacing={8}>
          <Box
            textAlign="center"
            w="50%"
            py={4}
            px={5}
            shadow="md"
            borderWidth="1px"
          >
            <Heading mb={2} fontSize="xl">
              5
            </Heading>
            <Text>Following</Text>
          </Box>
          <Box
            textAlign="center"
            w="50%"
            py={4}
            px={5}
            shadow="md"
            borderWidth="1px"
          >
            <Heading mb={2} fontSize="xl">
              23
            </Heading>
            <Text>Followers</Text>
          </Box>
        </Stack>
      </Box>
      <Box w="75%">{/* <Text>Here text brothere</Text> */}</Box>
    </Flex>
  );
};

export default Stats;
