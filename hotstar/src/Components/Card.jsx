import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../CSS/card.module.css";
function Card({ e }) {
  const [style, setStyle] = useState({
    display: "none",
    // display: "flex", zIndex: "10"
  });
  // const [divSize, setdivSize] = useState({ width: '138px' })

  function onHover() {
    setStyle({ display: "flex", zIndex: "10" });
    // setdivSize({ width: '183px' })
  }
  function offHover() {
    setStyle({ display: "none", zIndex: "0" });
    // setdivSize({ width: '138px' })
  }

  const AddtoAddtowatchlist=( )=>{
    
  }

  return (
    <Link to={`/movies/${e.id}`}>
    <div
      className={styles.cardDiv}
      // style={divSize}
      key={e.poster_path}
      onMouseEnter={(e) => {
        onHover();
      }}
      onMouseLeave={(e) => {
        offHover();
      }}
    >
      <div className={styles.imgContainer}>
        <img
          className={styles.cardImg}
          src={`https://image.tmdb.org/t/p/w1280${e.poster_path}`} alt=""
        />
      </div>
      <div className={styles.movieDetailsDiv} style={style}>
        <p className={styles.cardText}>{e.title}</p>
        <p className={styles.cardText}>{e.adult ? "18+" : "13+"}</p>
        {/* <p className={styles.cardText}></p>  */}
        <div className={styles.btnDiv}>
          <button className={styles.cardMovieWatchbtm}>WATCH NOW </button>
        </div>
        <div className={styles.btnDiv}>

          <button className={styles.cardMovieWatchbtm} onClick={Addtowatchlist}>
            + ADD TO WATCHLIST
          </button>
        </div>
      </div>
      </div>
      </Link>
  );
}

export default Card;
