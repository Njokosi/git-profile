import React, { useEffect, useState } from "react";
import Head from "next/head";

const User = (props) => {
  //   const username = props.query.id;
  const username = "njokosi";
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
    // getLangData();
    getRepoData();

    // setUserData(mockUserData);
    // setLangData(mockLangData);
    // setRepoData(mockRepoData);
  }, []);

  return (
    <>
      <Head title={`${username ? `BeauGit | ${username}` : "BeauGit"}`} />
      <div>{console.log("The user data: ", userData)}</div>
      <p className="text-brand-500">fghjkkjdfghj</p>
    </>
  );
};

export default User;
