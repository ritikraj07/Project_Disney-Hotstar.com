import nv from "../CSS/Navbar.module.css";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getResults } from "../Redux/Actions/myAction";

const List = ({ elem }) => {
  // console.log("in list");
  let img = elem.backdrop_path ? elem.backdrop_path : elem.poster_path;
  return (
    <div className={nv.listResults}>
      <div className={nv.listImgWrapper}>
        {/* {let img = e.backdrop_path ? e.backdrop_path : e.poster_path} */}
        <img src={`https://image.tmdb.org/t/p/w1280${img}`} alt="img" />
      </div>
      <div className={nv.listTitle}>
        <p>{elem.title}</p>
      </div>
    </div>
  );
};

const ResultDropDown = ({ props }) => {
  const dispatch = useDispatch();
  const listRef = useRef();
  // console.log("in dropdown");
  // console.log(props);
  // console.log(listRef.current);
  const navigate = useNavigate();
  const hideList = () => {
    // console.log("hide");
    listRef.current.style.display = "none";
  };

  const moreresults = () => {
    getResults(props, dispatch);
    listRef.current.style.display = "none";
    listRef.current.value = "";
    
    navigate("/search");
  };

  useEffect(() => {
    document.addEventListener("click", hideList);
  }, []);
  return (
    <div className={nv.fiveResults} ref={listRef}>
      {props?.slice(0, 5).map((e, i) => {
        if (props.length > 0) {
          listRef.current.style.display = "flex";
        }
        return <List elem={e} key={i} />;
      })}
      <div className={nv.moreresults}
        onClick={() => {
          moreresults();
        }}
      >
        <button
          onClick={() => {
            moreresults();
          }}
        >
          MORE RESULTS
        </button>
      </div>
    </div>
  );
};

export default ResultDropDown;
