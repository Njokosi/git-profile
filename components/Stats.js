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

const Stats = ({ userData }) => {
  return (
    <>
      <Stack direction={["column", "row"]} spacing={8}>
        <StatDetail title="Following" value={userData?.following} />
        <StatDetail title="Followers" value={userData?.followers} />
        <StatDetail title="Public Gists" value={userData?.public_gists} />
        <StatDetail title="Repositories" value={userData?.public_repos} />
      </Stack>

      {/* <Repositories /> */}
    </>
  );
};

export default Stats;
