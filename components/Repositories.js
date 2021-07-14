import React from "react";
import { Box, Text, Icon, Stack, Heading } from "@chakra-ui/react";

const Repositories = () => {
  return (
    <Box mt={12}>
      <Heading fontSize="2xl" mb={8}>
        Repositories
      </Heading>
      <Stack direction={["column", "row"]} spacing={8}>
        <Box
          w="50%"
          borderRadius={10}
          py={6}
          px={5}
          shadow="md"
          borderWidth="1px"
        >
          Box 1
        </Box>
        <Box
          w="50%"
          borderRadius={10}
          py={6}
          px={5}
          shadow="md"
          borderWidth="1px"
        >
          Box 1
        </Box>
      </Stack>
    </Box>
  );
};

export default Repositories;
