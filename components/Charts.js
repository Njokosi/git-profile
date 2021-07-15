import React from "react";
import {
  Box,
  Text,
  Flex,
  Icon,
  Heading,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import PieChart from "./charts/PieChart";

const Charts = () => {
  return (
    <Box mt={12}>
      <Heading fontSize="xl" mb={8}>
        Statistics
      </Heading>
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        <GridItem
          colSpan={3}
          borderRadius={10}
          py={6}
          px={5}
          shadow="md"
          borderWidth="1px"
        >
          <Box>Repo 1</Box>
          <Box>Box 2</Box>
        </GridItem>
        <GridItem
          colSpan={3}
          borderRadius={10}
          py={6}
          px={5}
          shadow="md"
          borderWidth="1px"
        >
          <Box>
            <Box mb={4}>
              <Heading
                fontSize="md"
                pb={2}
                borderBottom="1px"
                borderColor="gray.200"
              >
                Top languages
              </Heading>
            </Box>
            <PieChart />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Charts;