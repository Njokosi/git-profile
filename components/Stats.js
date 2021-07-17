import React from "react";
import { Box, Text, Link, Stack, Heading } from "@chakra-ui/react";
import UserDetail from "./UserDetail";

const StatDetail = ({ title, value, link }) => {
  return (
    <Box
      textAlign="center"
      width={[
        "100%", // 0-30em
        "100%", // 30em-48em
        "50%", // 48em-62em
        "25%", // 62em+
      ]}
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

const Stats = ({ userData }) => {
  return (
    <>
      <Stack direction={["column", "column", "row"]} spacing={8}>
        <StatDetail title="Following" value={userData?.following} />
        <StatDetail title="Followers" value={userData?.followers} />
        <StatDetail title="Public Gists" value={userData?.public_gists} />
        <StatDetail title="Public Repos" value={userData?.public_repos} />
      </Stack>
    </>
  );
};

export default Stats;
