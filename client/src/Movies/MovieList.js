import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import MovieCard from "./MovieCard";

const MovieList = props => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(res => {
          // console.log(res);
          setMovies(res.data);
        })
        .catch(err => {
          console.log("Server error", err);
        });
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`/movies/${movie.id}`}>
          <MovieCard key={movie.id} movie={movie} saveList={props.saveList} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
