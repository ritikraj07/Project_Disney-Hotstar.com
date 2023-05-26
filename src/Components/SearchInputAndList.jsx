import nv from "../CSS/Navbar.module.css";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import ResultDropDown from "./ResultDropDown";
import { useSearchParams } from "react-router-dom";
import { getData } from "../Redux/Actions/myAction";

const SearchInputAndList = () => {
  const [searchparams, setsearchparams] = useSearchParams();
  //   const [movies, setMovies] = useState([]);
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
        localStorage.setItem("results", JSON.stringify(data.results));
      });
  };
  useEffect(() => {
    inputRef.current.onClick = () => {
      console.log("input cicked");
    };
    const id = setTimeout(() => {
      getResults();
    }, 600);

    return () => clearTimeout(id);
  }, [searchparams]);

  return (
    <div className={nv.searchdiv}>
      <input
        placeholder="Search"
        className={nv.searchBar}
        onChange={searchInputChange}
        ref={inputRef}
      />
      {/* <NavLink to="/search"> */}
        <button className={nv.searchIcon}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      {/* </NavLink> */}
      <ResultDropDown props={results} />
    </div>
  );
};

export default SearchInputAndList;
