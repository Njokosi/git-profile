import React, { useEffect, useState } from "react";
import GhPolyglot from "gh-polyglot";
import Head from "next/head";
import { Box, Container, Flex } from "@chakra-ui/react";
import {
  Hero,
  Repositories,
  Stats,
  UserDetail,
  Charts,
  Navbar,
  Contributions,
} from "../components";

const User = (props) => {

  const username = props.query.id;
  const [userData, setUserData] = useState(null);
  const [langData, setLangData] = useState(null);
  const [repoData, setRepoData] = useState(null);
  const [error, setError] = useState({ active: false, type: 200 });
  const [rateLimit, setRateLimit] = useState(null);

  const getUserData = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status === 404) {
          return setError({ active: true, type: 404 });
        }
        if (response.status === 403) {
          return setError({ active: true, type: 403 });
        }
        return response.json();
      })
      .then((json) => setUserData(json))
      .catch((error) => {
        setError({ active: true, type: 400 });
        console.error("Error:", error);
      });
  };

  const getLangData = () => {
    const me = new GhPolyglot(`${username}`);
    me.userStats((err, stats) => {
      if (err) {
        console.error("Error:", err);
        setError({ active: true, type: 400 });
      }
      setLangData(stats);
    });
  };

  const getRepoData = () => {
    fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
      .then((response) => {
        if (response.status === 404) {
          return setError({ active: true, type: 404 });
        }
        if (response.status === 403) {
          return setError({ active: true, type: 403 });
        }
        return response.json();
      })
      .then((json) => setRepoData(json))
      .catch((error) => {
        setError({ active: true, type: 200 });
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch(`https://api.github.com/rate_limit`)
      .then((response) => response.json())
      .then((json) => {
        setRateLimit(json.resources.core);
        if (json.resources.core.remaining < 1) {
          setError({ active: true, type: 403 });
        }
      });

    getUserData();
    getLangData();
    getRepoData();

    // setUserData(mockUserData);
    // setLangData(mockLangData);
    // setRepoData(mockRepoData);
    // Change value
  }, []);

  return (
    <>
      <Head>
        <title>{`${username} | BeauGit`}</title>
        <meta
          name="description"
          content="Beautified version of your github profile"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {userData && <Hero userData={userData} />}
      <Container maxW="container.xl">
        <Flex w="100%" py={4}>
          <Box w="25%">{userData && <UserDetail userData={userData} />}</Box>
          <Box w="75%">


            {userData && <Stats userData={userData} />}
            {langData && repoData && (
              <Charts langData={langData} repoData={repoData} />
            )}
            
            {username && <Contributions username={username} />}

            {repoData && <Repositories repoData={repoData} />}
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default User;
