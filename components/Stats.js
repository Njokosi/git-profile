import React from "react";
import {
  Box,
  Text,
  Heading,
  Grid,
  Link,
  GridItem,
} from "@chakra-ui/react";
import UserDetail from "./UserDetail";

const StatDetail = ({ title, value, link }) => {
  return (
    <Box
      textAlign="center"
      w="100%"
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
      <Grid templateColumns="repeat(12, 1fr)" gap={8}>
        <GridItem colSpan={[12, 6, 6, 6, 3]}>
          <StatDetail title="Following" value={userData?.following} />
        </GridItem>
        <GridItem colSpan={[12, 6, 6, 6, 3]}>
          <StatDetail title="Followers" value={userData?.followers} />
        </GridItem>
        <GridItem colSpan={[12, 6, 6, 6, 3]}>
          <StatDetail title="Public Gists" value={userData?.public_gists} />
        </GridItem>
        <GridItem colSpan={[12, 6, 6, 6, 3]}>
          <Link href={`https://github.com/${userData?.login}?tab=repositories`} textDecoration="none" isExternal>
            <StatDetail title="Public Repos" value={userData?.public_repos} />
          </Link>
        </GridItem>
      </Grid>
    </>
  );
};

export default Stats;
