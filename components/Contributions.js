import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

import { Box, Heading, Grid, Flex } from "@chakra-ui/react";

const exampleTheme = {
  background: "transparent",
  text: "#000",
  grade4: "#2563EB",
  grade3: "#3B82F6",
  grade2: "#60A5FA",
  grade1: "#93C5FD",
  grade0: "#EEE",
};

const Contributions = ({ username }) => {
  return (
    <Box mt={12}>
      <Heading fontSize="xl" mb={8}>
        Contributions graph
      </Heading>
      <Flex
        alignItems="center"
        justifyContent="center"
        borderRadius={10}
        py={6}
        px={5}
        shadow="md"
        borderWidth="1px"
      >
        <GitHubCalendar
          username={username}
          fullYear={false}
          theme={exampleTheme}
          blockSize={14}
        >
          <ReactTooltip delayShow={50} html />
        </GitHubCalendar>
      </Flex>
    </Box>
  );
};

export default Contributions;
