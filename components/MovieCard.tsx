import React from "react";
import Link from "next/link";
import styles from "../styles/MovieCard.module.css";

interface Props {
  title: string;
  type: string;
  year: string;
  imdbID: String;
  poster: string;
}

export default function MovieCard(props: Props) {
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
      <Link href={"https://www.imdb.com/title/" + props.imdbID}>
        <a className={styles.button} target="_blank">
          View more
        </a>
      </Link>
    </div>
  );
}
