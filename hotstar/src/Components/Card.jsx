import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddWatchList } from "../Redux/Actions/myAction";
import styles from "../CSS/card.module.css";

function Card({ e }) {
  const [watchstate, setwatchState]=useState(true);
  const [style, setStyle] = useState({
    display: "none",
    // display: "flex", zIndex: "10"
  });
  let islogin = useSelector((store) => {
    return store.isLoggedIn
  })
  // const [divSize, setdivSize] = useState({ width: '138px' })
const dispatch= useDispatch();
  function onHover() {
    setStyle({ display: "flex", zIndex: "10" });
    // setdivSize({ width: '183px' })
  }
  function offHover() {
    setStyle({ display: "none", zIndex: "0" });
    // setdivSize({ width: '138px' })
  }

  const Addtowatchlist=( )=>{
    //watchlist.push(e)
    dispatch(AddWatchList(e));
    setwatchState(false);
  }
  // `/movies/${e.id}`
  return (
    <Link to={islogin ? `/movies/${e.id}`:`/`}>
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
                    <button className={styles.cardMovieWatchbtm}><i className="fa-solid fa-play"></i>
              &nbsp;&nbsp;&nbsp;WATCH NOW </button>
                </div>
                <div className={styles.btnDiv}>
                    
                    {
                watchstate? <button className={styles.cardMovieWatchbtm} onClick={Addtowatchlist}>
                 <i className="fa-solid fa-plus"></i>&nbsp;&nbsp;&nbsp; ADD TO WATCHLIST
            </button>: <button className={styles.cardMovieWatchbtm} onClick={Addtowatchlist}> <i class="fa-sharp fa-solid fa-check"></i>&nbsp;&nbsp;&nbsp;
                  ADDED TO WATCHLIST
            </button>
              }
                </div>
            </div>
      </div>
      </Link>
  );
}

export default Card;
