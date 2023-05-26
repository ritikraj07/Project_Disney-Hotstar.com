import style from "../CSS/HorizontalCard.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddWatchList } from "../Redux/Actions/myAction";

function HorizontalCard({ e }) {
  const dispatch= useDispatch();
  const [hoverStyle, setStyle] = useState({
    display: "none",
    // display: "flex", zIndex: "10"
  });

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
  }
  let image = e.backdrop_path || e.poster_path || "/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg";

  return (
    <Link to={`/movies/${e.id}`} className={style.link}>
      <div
        className={style.horizontalcard}
        onMouseEnter={(e) => {
          onHover();
        }}
        onMouseLeave={(e) => {
          offHover();
        }}
      >
        <div className={style.imgContainer2}>
          <img
            className={style.img2}
            src={`https://image.tmdb.org/t/p/w1280${image}`}
            alt="title"
          />
        </div>
        <div className={style.movieDetailsDiv} style={hoverStyle}>
          <p className={style.cardText}>{e.title}</p>
          <p className={style.cardText}>{e.adult ? "18+" : "13+"}</p>
          <div className={style.btnDiv}>
            <button className={style.cardMovieWatchbtm}>
              <i className="fa-solid fa-play"></i>
              &nbsp;&nbsp;&nbsp;WATCH NOW{" "}
            </button>
          </div>
          <div className={style.btnDiv}>
            <button className={style.cardMovieWatchbtm} onClick={Addtowatchlist}>
              <i className="fa-solid fa-plus"></i>&nbsp;&nbsp;&nbsp;ADD TO
              WATCHLIST
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HorizontalCard;
