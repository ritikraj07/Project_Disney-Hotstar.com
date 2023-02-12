import React, {useState} from 'react';
import Hstyles from "../CSS/HCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AddWatchList } from "../Redux/Actions/myAction";

function HCard({e}) {
    const dispatch= useDispatch();
    const [watchstate, setwatchState]=useState(false);
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

    const Addtowatchlist=( )=>{
        //watchlist.push(e)
        dispatch(AddWatchList(e));
        setwatchState(true);
      }

    return (
        <div
            className={Hstyles.cardDiv}
            // style={divSize}
            key={e.poster_path}
            onMouseEnter={(e) => {
                onHover();
            }}
            onMouseLeave={(e) => {
                offHover();
            }}
        >
            <div className={Hstyles.imgContainer}>
                <img
                    className={Hstyles.cardImg}
                    src={`https://image.tmdb.org/t/p/w1280${e.poster_path}`}
                />
            </div>
            <div className={Hstyles.movieDetailsDiv} style={style}>
                <p className={Hstyles.cardText}>{e.title}</p>
                <p className={Hstyles.cardText}>{e.adult ? "18+" : "13+"}</p>
                {/* <p className={Hstyles.cardText}></p>  */}
                <div className={Hstyles.btnDiv}>
                    <button className={Hstyles.cardMovieWatchbtm}><i className="fa-solid fa-play"></i>
              &nbsp;&nbsp;&nbsp;WATCH NOW </button>
                </div>
                <div className={Hstyles.btnDiv}>
                    
                    {
                watchstate? <button className={Hstyles.cardMovieWatchbtm} onClick={Addtowatchlist}>
                 <i className="fa-solid fa-plus"></i>&nbsp;&nbsp;&nbsp; ADD TO WATCHLIST
            </button>: <button className={Hstyles.cardMovieWatchbtm} onClick={Addtowatchlist}> <i class="fa-sharp fa-solid fa-check"></i>&nbsp;&nbsp;&nbsp;
                REMOVE FROM WATCHLIST
            </button>
              }
                </div>
            </div>
        </div>
    );

}

export default HCard;