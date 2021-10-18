import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.container}>
      <input
        className={styles.searchBar}
        placeholder="Search for your favoirte movie"
        onChange={(event) => setSearchTerm(event.target.value)}
      ></input>
      <button className={styles.searchButton}>
        <FontAwesomeIcon
          className={styles.icon}
          icon={faSearch}
          onClick={() => alert(searchTerm)}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
}
