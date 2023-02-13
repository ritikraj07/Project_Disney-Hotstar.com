import style from "../CSS/HorizontalCard.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { removeList } from "../Redux/Actions/myAction";
import { useDispatch } from "react-redux";

function WatchlistCard({ ele }) {
  const [watchstate, setwatchState]=useState(false);
  const [hoverStyle, setStyle] = useState({
    display: "none",
    // display: "flex", zIndex: "10"
  });
  let dispatch = useDispatch()

  function onHover() {
    setStyle({ display: "flex", zIndex: "10" });
    // setdivSize({ width: '183px' })
  }
  function offHover() {
    setStyle({ display: "none", zIndex: "0" });
    // setdivSize({ width: '138px' })
  }

  let image = ele.backdrop_path || ele.poster_path || "/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg";

  return (
    // <Link to={`/movies/${ele.id}`} className={style.link}>
      <div
        className={style.horizontalcard}
        onMouseEnter={(ele) => {
          onHover();
        }}
        onMouseLeave={(ele) => {
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
          <p className={style.cardText}>{ele.title}</p>
        <p className={style.cardText}>{ele.adult ? "18+" : "13+"}</p>
        <Link to={`/movies/${ele.id}`} className={style.link}>
          <div className={style.btnDiv}>
            <button className={style.cardMovieWatchbtm} style={{ width: '100%', marginInlineStart:'12px'}} >
              <i className="fa-solid fa-play"></i>
              &nbsp;&nbsp;&nbsp;WATCH NOW{" "}
            </button>
          </div>
          </Link>
          <div className={style.btnDiv}>
          <button className={style.cardMovieWatchbtm} onClick={() => dispatch(removeList(ele.id))}>
              
            <i class="fa-sharp fa-solid fa-check"></i>&nbsp;&nbsp;&nbsp;REMOVE FROM WATCHLIST
            </button>
          </div>
        </div>
      </div>
    // </Link>
  );
}

export default WatchlistCard;
