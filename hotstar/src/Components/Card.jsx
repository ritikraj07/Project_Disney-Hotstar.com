import React, { useState } from 'react';

import styles from '../CSS/card.module.css'
function Card() {
    const [style, setStyle] = useState({ display: 'none' });
    const [divSize, setdivSize] = useState({ width: '138px' })

    function onHover() {
        setStyle({ display: 'block' })
        setdivSize({ width: '183px' })
    }
    function offHover() {
        setStyle({ display: 'none' })
        setdivSize({ width: '138px' })
    }


    return (
        <div className={styles.cardDiv} style={divSize}
            onMouseEnter={e => { onHover() }}
            onMouseLeave={e => { offHover() }}>
            <img className={styles.cardImg} src="https://m.media-amazon.com/images/M/MV5BY2FlN2U2NzMtOWE2Ni00MWIyLTk3YzQtM2RjNDFkNTlhYTZmXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg" />
            <div className={styles.movieDetailsDiv} style={style} >
                <p className={styles.cardText} >Black Panther</p>
                <p className={styles.cardText} >Action, Drama, Hotstar</p>
                <p className={styles.cardText} >Descriptions</p>
                <button className={styles.cardMovieWatchbtm}>WATCH NOW </button>
                <button className={styles.cardMovieWatchbtm}>+ ADD TO WATCHLIST</button>
            </div>
        </div>
    );
}

export default Card;