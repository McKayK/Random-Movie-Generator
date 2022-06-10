import React, { useState } from "react";
import axios from "axios";
import WatchProviders from "./WatchProviders";

const RandomMovieWParams = () => {
  const [movie, setMovie] = useState();
  const [moviePoster, setMoviePoster] = useState("");
  const [desc, setDesc] = useState("");
  const [watchProviders, setWatchProviders] = useState([]);
  const [genre, setGenre] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:3003/genre`, { genre: genre }).then((res) => {
      console.log(res.data);
      setMovie(res.data.title);
      setMoviePoster(res.data.poster_path);
      setDesc(res.data.overview);
      if (res.data.results.US.flatrate) {
        setWatchProviders(res.data.results.US.flatrate);
      } else {
        setWatchProviders([]);
      }
    });
  };
  const handleSubmit = (event) => {
    setGenre(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <select onChange={handleSubmit}>
          <option value=""></option>
          <option value="28">Action</option>
          <option value="35">Comedy</option>
          <option value="12">Adventure</option>
          <option value="18">Drama</option>
          <option value="14">Fantasy</option>
          <option value="878">Sci-Fi</option>
          <option value="53">Thriller</option>
        </select>
        <input type="submit" value="submit" />
      </form>
      <div>
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
        {movie && (
          <WatchProviders key={movie} watchProviders={watchProviders} />
        )}
      </div>
    </div>
  );
};

export default RandomMovieWParams;
