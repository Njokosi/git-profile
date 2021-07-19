import React, { useState, useEffect } from "react";
import { Box, Heading, Grid, GridItem } from "@chakra-ui/react";

import RadarChart from "./charts/RadarChart";
import PolarAreaChart from "./charts/PolarAreaChart";
import ReversedBarChart from "./charts/ReversedBarChart";

const Charts = ({ langData, repoData }) => {
  // Create chart with langData
  const [langChartData, setLangChartData] = useState(null);
  const [langChartDataLabel, setLangChartDataLabel] = useState(null);

  const initLangChart = () => {
    const labels = langData.map((lang) => lang.label);
    const data = langData.map((lang) => lang.value);

    setLangChartData(data);
    setLangChartDataLabel(labels);
  };

  // Create Most Starred chart
  const [starChartData, setStarChartData] = useState(null);
  const [starChartDataLabel, setStarChartDataLabel] = useState(null);

  const initStarChart = () => {
    const LIMIT = 6;
    const sortProperty = "stargazers_count";
    const mostStarredRepos = repoData
      .filter((repo) => !repo.fork)
      .sort((a, b) => b[sortProperty] - a[sortProperty])
      .slice(0, LIMIT);
    const labels = mostStarredRepos.map((repo) => repo.name);
    const data = mostStarredRepos.map((repo) => repo[sortProperty]);

    setStarChartData(data);
    setStarChartDataLabel(labels);
  };

  useEffect(() => {
    if (langData.length && repoData.length) {
      initLangChart();
      initStarChart();
      // initThirdChart();
    }
  }, []);

  const langChartError = !(langChartData && langChartData.length > 0);
  const starChartError = !(starChartData && starChartData.length > 0);

  return (
    <Box mt={12}>
      <Heading fontSize="xl" mb={8}>
        Statistics
      </Heading>
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        <GridItem
          colSpan={[6, 6, 6, 6, 3]}
          borderRadius={10}
          py={6}
          px={5}
          shadow="md"
          borderWidth="1px"
        >
          {console.log("Language chart data: ", langChartData)}
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
            {langChartData && (
              <RadarChart
                data={langChartData}
                categories={langChartDataLabel}
              />
            )}
          </Box>
        </GridItem>
        <GridItem
          colSpan={[6, 6, 6, 6, 3]}
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
            {starChartData && (
              <ReversedBarChart
                data={starChartData}
                categories={starChartDataLabel}
              />
            )}
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Charts;
