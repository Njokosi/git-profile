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
import RadarChart from "./charts/RadarChart";
import PolarAreaChart from "./charts/PolarAreaChart";

const Charts = ({ langData, repoData }) => {
  const data = [];
  const categories = [];

  for (let i = 0; i < langData.length; i++) {
    data.push(langData[i].value);
    categories.push(langData[i].label);
  }

  return (
    <Box mt={12}>
      <Heading fontSize="xl" mb={8}>
        Statistics
      </Heading>
      {console.log("Lang data dict: ", [langData])}
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
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
                pb={4}
                borderBottom="1px"
                borderColor="gray.200"
                color="gray.700"
              >
                Top languages
              </Heading>
            </Box>
            <RadarChart data={data} categories={categories} />
          </Box>
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
                pb={4}
                borderBottom="1px"
                borderColor="gray.200"
                color="gray.700"
              >
                Most Starred
              </Heading>
            </Box>
            <PolarAreaChart />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Charts;
