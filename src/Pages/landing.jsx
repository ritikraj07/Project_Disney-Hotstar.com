import React, { lazy, useEffect } from "react";
import Bannercard from "../Components/Bannercard";
import Card from "../Components/Card";
import CardList from "../Components/CardList";
import Footer from "../Components/footer";
import HCardList from "../Components/HCardList";
import {
  GET_DETAILS,
  GET_KEY,
  GET_LATEST_TRENDING,
  GET_FREEMOVIE,
  GET_LATEST_SHOW,
  GET_LIST,
  GET_MOVIE,
  GET_SPORT,
  LOGIN,
  LOGOUT,
  SUBSCRIBE } from "../Redux/Actions/actionType";


function Landing(props) {
  let Getdata = async () => {
    let fetchdata = await fetch(`https://www.themoviedb.org/movie`);
    let jsondata = await fetchdata.json();
    console.log(jsondata);
  };

  useEffect(() => {
    //   Getdata();
  }, []);
  let id = 0;
  return (
    <div>
      {/* map header videos  */}
      <Bannercard />
      <section>
        {/* map cards for Latest & Trending */}
        <CardList
          url={
            "https://api.themoviedb.org/3/movie/popular?api_key=ed9752e73a9c3448abd38b33a4340499&language=hn-US&page=1"
          }
          title={"Latest & Trending"}
          id={id++}
          type={'GET_LATEST_TRENDING'}
        />
      </section>
      <section>
        {/* map cards for Best in Spoorts */}
        <CardList
          url={
            "https://api.themoviedb.org/3/movie/popular?api_key=ed9752e73a9c3448abd38b33a4340499&/discover/movie?with_genres=18&primary_release_year=2014"
          }
          title={"Best in Sports"}
          type={'GET_SPORT'}
          id={id++}
        />
      </section>
      <section>
        {/* map cards for Popular Shows */}
        <CardList
          url={
            "https://api.themoviedb.org/3/movie/popular?api_key=ed9752e73a9c3448abd38b33a4340499&/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10"
          }
          title={"Popular Shows"}
          type={"GET_LATEST_SHOW"}
          id={id++}
        />
      </section>
      <section>
        {/* map cards for Popular in Action */}
        <CardList
          url={
            "https://api.themoviedb.org/3/movie/popular?api_key=ed9752e73a9c3448abd38b33a4340499&/discover/movie?with_genres=18&primary_release_year=2016"
          }
          title={"Popular in Action"}
          type={'GET_MOVIE'}
          id={id++}
        />
      </section>
      <section>
        {/* map cards for Popular Movies */}
        <CardList
          url={
            "https://api.themoviedb.org/3/trending/tv/week?api_key=ed9752e73a9c3448abd38b33a4340499"
          }
          title={"Popular Movies"}
          type={'GET_MOVIE'}
          id={id++}
        />
      </section>
      <section>
        {/* Top Free Movies */}
        <CardList
          url={
            "https://api.themoviedb.org/3/movie/popular?api_key=ed9752e73a9c3448abd38b33a4340499&language=hn-US&page=1"
          }
          title={"Top Free Movies"}
          type={'GET_FREEMOVIE'}
          id={id++}
        />
      </section>
      <section>
        {/* map cards for Best in Spoorts */}
        <CardList
          url={
            "https://api.themoviedb.org/3/movie/popular?api_key=ed9752e73a9c3448abd38b33a4340499&/discover/movie?with_genres=18&primary_release_year=2014"
          }
          title={"Best in Sports"}
          type={'GET_SPORT'}
          id={id++}
        />
      </section>
      <section>
        {/* map cards for Popular Shows */}
        <CardList
          url={
            "https://api.themoviedb.org/3/movie/popular?api_key=ed9752e73a9c3448abd38b33a4340499&/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10"
          }
          title={"Popular Shows"}
          type={"GET_LATEST_SHOW"}
          id={id++}
        />
      </section>
      <section>
        {/* map cards for Popular in Action */}
        <CardList
          url={
            "https://api.themoviedb.org/3/movie/popular?api_key=ed9752e73a9c3448abd38b33a4340499&/discover/movie?with_genres=18&primary_release_year=2016"
          }
          title={"Popular in Action"}
          type={'GET_MOVIE'}
          id={id++}
        />
      </section>
      <section>
        {/* map cards for Popular Movies */}
        <CardList
          url={
            "https://api.themoviedb.org/3/trending/tv/week?api_key=ed9752e73a9c3448abd38b33a4340499"
          }
          title={"Popular Movies"}
          type={'GET_MOVIE'}
          id={id++}
        />
      </section>
      <section>
        {/* Top Free Movies */}
        <CardList
          url={
            "https://api.themoviedb.org/3/movie/popular?api_key=ed9752e73a9c3448abd38b33a4340499&language=hn-US&page=1"
          }
          title={"Top Free Movies"}
          type={'GET_FREEMOVIE'}
          id={id++}
        />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Landing;
