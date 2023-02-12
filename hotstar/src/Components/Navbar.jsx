import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import nv from "../CSS/Navbar.module.css";
import SearchInputAndList from "./SearchInputAndList";

function Navbar() {
  return (
    <div id="navbar" className={nv.navbar}>
      <div>
        <NavLink to="/">
          <div>
            <i className="fa-solid fa-bars"></i>
          </div>
        </NavLink>
        <NavLink to="/">
          <div>
            <img
              src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
              alt="hotstart"
            />
          </div>
        </NavLink>
        <div>
          <button>TV</button>
        </div>
        <div>
          <NavLink to="/movies">
            <button>Movie</button>
          </NavLink>
        </div>
        <div>
          <NavLink to="/sports">
            <button>Sports</button>
          </NavLink>
        </div>
        <div>
          <NavLink to="kids">
            <img src="https://snipboard.io/vngDdt.jpg" alt="Kids" />
          </NavLink>
        </div>

        <div>
          <NavLink to="/music">
            Music{" "}
            <i style={{ marginLeft: "10px" }} className="fa-solid fa-music"></i>
          </NavLink>
        </div>
      </div>
      <div>
        <div>
          {/* <div className={nv.searchdiv}>
            <input
              placeholder="Search"
              className={nv.searchBar}
              onChange={searchInputChange}
            />
            <NavLink to="/search">
              <button className={nv.searchIcon}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </NavLink>
          </div> */}
          <SearchInputAndList />
        </div>
        <div>
          <NavLink to="/subscribe">
            <button
              className={nv.subscribe}
              onClick={() => {
                localStorage.setItem("sub", true);
              }}
            >
              SUBSCRIBE
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
