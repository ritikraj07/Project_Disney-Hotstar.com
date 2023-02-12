import React from 'react'
import { useSelector } from 'react-redux'
import style from "../CSS/Search.module.css";
import WatchlistCard from './WatchlistCard';

export const Watchlist = () => {
    const watchlist= useSelector((state)=>state.WATCHLIST);
     console.log(watchlist);
   
  return (
    <div style={{ marginTop: "100px" }}>
    <h1 className={style.searchHeading}>Watchlist</h1>
    <div className={style.cardGrid}>
      {watchlist?.map((ele, index) => (
        <WatchlistCard ele={ele} key={index} />
      ))}
    </div>
    </div>
  )
}
