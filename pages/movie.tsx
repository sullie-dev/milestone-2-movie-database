import type { NextPage } from "next";
import Link from "next/link";

import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../styles/Movie.module.css";

interface MovieRef {
  movieID: string;
}

const Movie: NextPage = () => {
  const router = useRouter();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovieData(movieID: MovieRef) {
      let res: any = await axios.get(
        `https://www.omdbapi.com/?apikey=a3a7a7fb&a3a7a7fb&i=${movieID}&plot=full`,
      );
      setMovie(res.data);
    }
    fetchMovieData(router.query.id as any);
  }, []);
  console.log(movie);
  return (
    <div className={styles.container}>
      <section>
        <img
          className={styles.poster}
          src={movie["Poster" as any]}
          alt={movie["Title" as any] + " theatrical poster"}
        ></img>
      </section>
      <section className={styles.movieInfo}>
        <h1>{movie["Title" as any]}</h1>
        <p>Released: {movie["Released" as any]}</p>
        <p>Rated as {movie["Rated" as any]}</p>
        <br></br>
        <p>{movie["Plot" as any]}</p>
        <br></br>
        <p>Directed by {movie["Director" as any]}</p>
        <p>Staring {movie["Actors" as any]}</p>
        <br></br>
        <Link
          href={`${("https://www.imdb.com/title/" + router.query.id) as any}`}
        >
          <a className={styles.button} target="_blank">
            View on IMBD
          </a>
        </Link>
      </section>
    </div>
  );
};
export default Movie;
