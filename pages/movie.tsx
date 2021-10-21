import type { NextPage } from "next";
import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";

interface MovieRef {
  movieID: string;
}

const Movie: NextPage = () => {
  const router = useRouter();
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function fetchMovieData(movieID: MovieRef) {
      let res: any = await axios.get(
        `http://www.omdbapi.com/?apikey=a3a7a7fb&a3a7a7fb&i=${movieID}`,
      );
      setMovie(res.data);
    }
    fetchMovieData(router.query.id as any);
  }, []);
  console.log(movie);
  return (
    <div>
      <h1>Movie page</h1>
    </div>
  );
};
export default Movie;
