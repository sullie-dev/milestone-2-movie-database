import React from "react";
import styles from "../styles/SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.container}>
      <input
        className={styles.searchBar}
        placeholder="Search for your favoirte movie"
      ></input>
      <button className={styles.searchButton}>Search icon</button>
    </div>
  );
}
