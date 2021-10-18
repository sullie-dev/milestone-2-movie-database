import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Milestone 2 | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Milestone 2 project for Code Institute's Software development diploma course. The site will be a movie database site "
        />
        <meta
          name="keywords"
          content="movies, movie database, movies tv shows"
        />
      </Head>
      <body>
        <h1 id={styles.title}>Movie database - Milestone 2</h1>
        <section>Search bar</section>
        <section>Search results</section>
        <footer>Footer</footer>
      </body>
    </div>
  );
};

export default Home;
