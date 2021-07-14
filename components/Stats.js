import React from "react";
import { Box, Text, Flex, Stack, Heading } from "@chakra-ui/react";
import UserDetail from "./UserDetail";


const StatDetail = ({ title, value, ...rest }) => {
  return (
    <Box
      textAlign="center"
      w="25%"
      py={6}
      px={5}
      shadow="md"
      borderWidth="1px"
      borderRadius={10}
    >
      <Heading mb={2} fontSize="2xl" color="brand.600">
        {value}
      </Heading>
      <Text fontSize="sm" color="gray.700">
        {title}
      </Text>
    </Box>
  );
};

const data_stats = [
  {
    title: "Following",
    value: 5,
  },
  {
    title: "Followers",
    value: 5,
  },
  {
    title: "Public Gists",
    value: 5,
  },
  {
    title: "Repositories",
    value: 5,
  },
];

const Stats = () => {
  return (
    <>
      <Stack direction={["column", "row"]} spacing={8}>
        {data_stats.map((p) => {
          return <StatDetail key={p.title} title={p.title} value={p.value} />;
        })}
      </Stack>

      {/* <Repositories /> */}
    </>
  );
};

export default Stats;
