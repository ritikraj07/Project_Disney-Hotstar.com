import React from 'react'
import { useSelector } from 'react-redux'

export const Watchlist = () => {
    const watchlist= useSelector((store)=>store.watchlist);

    watchlist.map((elem) =>{
      <p>card</p>
    })
  return (
    <div>watchlist</div>
  )
}
