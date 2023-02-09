import React, {useState} from 'react';
import Hstyles from "../CSS/HCard.module.css";
function HCard({e}) {
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
                    <button className={Hstyles.cardMovieWatchbtm}>WATCH NOW </button>
                </div>
                <div className={Hstyles.btnDiv}>
                    <button className={Hstyles.cardMovieWatchbtm}>
                        + ADD TO WATCHLIST
                    </button>
                </div>
            </div>
        </div>
    );

}

export default HCard;