import React from "react";

interface Props {
  title: string;
  type: string;
  year: string;
  imdbID: String;
  poster: string;
}

export default function MovieCard(props: Props) {
  return (
    <div>
      <div>
        <h1>{props.title}</h1>
        <h2>{props.year}</h2>
        <h4> {props.type} </h4>
        <br />
        <img src={props.poster} alt={props.title + " theatrical poster"}></img>
      </div>
    </div>
  );
}
