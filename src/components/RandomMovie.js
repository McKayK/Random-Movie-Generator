import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RandomMovie.css";
import WatchProviders from "./WatchProviders";

const RandomMovie = () => {
  const [movie, setMovie] = useState();
  const [moviePoster, setMoviePoster] = useState("");
  const [desc, setDesc] = useState("");
  const [watchProviders, setWatchProviders] = useState([]);

  const handleClick = () => {
    axios.get(`http://localhost:3003/movies`).then((res) => {
      console.log(res.data);
      setMovie(res.data.title);
      setMoviePoster(res.data.poster_path);
      setDesc(res.data.overview);
      if (res.data.results.US) {
        setWatchProviders(res.data.results.US.flatrate);
      }
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Get Movie</button>
      <div className="movie-card">
        <h2 className="movieTitle">{movie}</h2>
        {movie && (
          <img
            src={`https://image.tmdb.org/t/p/w500${moviePoster}`}
            alt="Movie Poster"
            id="movie-image"
          />
        )}
        {movie && <p id="movie-desc">{desc}</p>}
      </div>
      {movie && <WatchProviders key={movie} watchProviders={watchProviders} />}
    </div>
  );
};

export default RandomMovie;
