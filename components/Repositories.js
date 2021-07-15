import React from "react";
import useSWR from "swr";

import {
  Box,
  Text,
  Icon,
  Stack,
  Heading,
  Flex,
  HStack,
  Wrap,
  WrapItem,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { fetcher } from "../functions";
import { RepoDetail } from "../components";



function GetLanguageInfo(repo_name) {
  const api_url = `https://api.github.com/repos/Njokosi/${repo_name}/languages`;

  const { data, error } = useSWR(api_url, fetcher);

  return {
    languages: data,
    isLoading: !error && !data,
    isError: error,
  };
}

const Repositories = ({ repoData }) => {
  return (
    <Box mt={12}>
      <Heading fontSize="xl" mb={8}>
        Repositories
      </Heading>
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        {repoData?.map((repo) => {
          return (
            <GridItem
              key={repo.id}
              colSpan={3}
              borderRadius={10}
              py={6}
              px={5}
              shadow="md"
              borderWidth="1px"
            >
              <RepoDetail
                name={repo.name}
                stars={repo.stargazers_count.toLocaleString()}
                forks={repo.forks.toLocaleString()}
                size={repo.size.toLocaleString()}
                language={repo.language}
                // languages={GetLanguageInfo(repo.name)}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Repositories;