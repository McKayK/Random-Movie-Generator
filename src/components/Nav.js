import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/randomMovieWithParams">
        <button>Random Movie With Params</button>
      </Link>
      <Link to="/randomMovie">
        <button>Random Movie</button>
      </Link>
      <Link to="/watchlist">
        <button>Watchlist</button>
      </Link>
    </header>
  );
};

export default Nav;
