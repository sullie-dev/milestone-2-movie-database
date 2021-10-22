import type { NextPage } from "next";
import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import MovieCard from "../components/MovieCard";

interface iMovieProps {
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
  Poster: string;
}

interface responseProps {
  movies: Array<iMovieProps>[];
}

const Home: NextPage = () => {
  const [response, setRessponse] = useState<any>([]);

  async function searchFunc(searchTerm: string, event: any) {
    event.preventDefault();
    const search: any = await axios.get(
      `https://www.omdbapi.com/?apikey=a3a7a7fb&a3a7a7fb&s=${searchTerm}`,
    );

    setRessponse(search.data["Search"]);
    return setRessponse;
  }
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
      <main>
        <h1 id={styles.title}>Movie database - Milestone 2</h1>
        <section>
          <SearchBar searchFunc={searchFunc} />
        </section>
        <section className={styles.movieRes}>
          {response.map((res: iMovieProps) => (
            <MovieCard
              key={(res.Title, res.Year)}
              title={res.Title}
              year={res.Year}
              type={res.Type}
              poster={res.Poster}
              imdbID={res.imdbID}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;
