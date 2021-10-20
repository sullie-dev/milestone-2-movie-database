import React, { useState } from "react";
import styles from "../styles/SearchBar.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface IsearchProps {
  searchFunc: Function;
}

export default function SearchBar(props: IsearchProps) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className={styles.container}>
      <input
        className={styles.searchBar}
        placeholder="Search for your favoirte movie"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
      <input
        type="submit"
        className={styles.searchButton}
        onClick={(event) => props.searchFunc(searchTerm, event)}
        value="Seach"
      ></input>
    </div>
  );
}
