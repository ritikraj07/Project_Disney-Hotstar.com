import React, { useState, useEffect, useRef } from "react";
import HorizontalCard from "../Components/HorizontalCard";
import style from "../CSS/Search.module.css";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Search(props) {
    const myresults = JSON.parse(localStorage.getItem("results")) || [];
    const data = useSelector(state=>state.SEARCH_RESULTS);
  const [searchparams, setsearchparams] = useSearchParams();
    // const [movies, setMovies] = useState([]);
  const query = searchparams.get("query") || "";
  const [results, setResults] = useState([]);
  const inputRef = useRef();

  const searchInputChange = (e) => {
    // console.log(e.target.value);
    setsearchparams({ query: e.target.value });
  };

  const getResults = () => {
    // fetch(`https://www.omdbapi.com/?apikey=fafa77a7&s=${query}`)
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=5b2334617cd63be51871f0ff36fb3b3c&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setResults(data.results);
        // localStorage.setItem("results", JSON.stringify(data.results));
      });
  };
  useEffect(() => {
    // inputRef.current.onClick = () => {
    //   console.log("input cicked");
    // };
    const id = setTimeout(() => {
      getResults();
    }, 600);

    return () => clearTimeout(id);
  }, [searchparams]);
  return (
    <div style={{ marginTop: "100px" }}>
      <h1 className={style.searchHeading}>Showing search results</h1>
      <div className={style.cardGrid}>
        {data?.map((e, i) => (
          <HorizontalCard e={e} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Search;
