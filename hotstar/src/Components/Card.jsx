import React, { useState } from 'react';

import styles from '../CSS/card.module.css'
function Card({e}) {
    const [style, setStyle] = useState({ display: 'none' });
    // const [divSize, setdivSize] = useState({ width: '138px' })

    function onHover() {
        setStyle({ display: 'block' })
        // setdivSize({ width: '183px' })
    }
    function offHover() {
        setStyle({ display: 'none' })
        // setdivSize({ width: '138px' })
    }


    return (
        <div className={styles.cardDiv}
            // style={divSize}
            key={e.poster_path}
            onMouseEnter={e => { onHover() }}
            onMouseLeave={e => { offHover() }}>
            <img className={styles.cardImg} src={`https://image.tmdb.org/t/p/w1280${e.poster_path}`} />
            <div className={styles.movieDetailsDiv} style={style} >
                <p className={styles.cardText} >{e.title}</p>
                <p className={styles.cardText} >{e.adult?<p>18+</p>:<p>13+</p>}</p>
                <p className={styles.cardText} ></p>
                <button className={styles.cardMovieWatchbtm}>WATCH NOW </button>
                <button className={styles.cardMovieWatchbtm}>+ ADD TO WATCHLIST</button>
            </div>
        </div>
    );
}

export default Card;