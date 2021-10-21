import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/MovieCard.module.css";

interface Props {
  title: string;
  type: string;
  year: string;
  imdbID: string;
  poster: string;
}

export default function MovieCard(props: Props) {
  const router = useRouter();
  const handleClick = (id: string, e: any) => {
    e.preventDefault();
    router.push({
      pathname: "/movie",
      query: { id },
    });
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={props.poster}
        alt={props.title + " theatrical poster"}
      ></img>
      <h2 className={styles.title}>{props.title}</h2>
      <h3 className={styles.releaseYear}>
        This {props.type} was released {props.year}
      </h3>
      <br />
      <Link href={`/movie`}>
        <a
          className={styles.button}
          onClick={(event) => handleClick(props.imdbID, event)}
        >
          View more
        </a>
      </Link>
    </div>
  );
}
