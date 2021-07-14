import Head from "next/head";
import Image from "next/image";
import Layout from "../layouts";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>BeauGit</title>
        <meta
          name="description"
          content="Beautified version of your github profile"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Layout />
    </div>
  );
}
