import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import "../index.css";
import MovieCard from "./MovieCard";

const Movie = props => {
  const [movie, setMovie] = useState();
  // const btn = document.querySelector(".save-button");
  const { id } = useParams();
  // const id = props.match.params.id;

  const saveMovie = () => {
    const addToSavedList = props.save;
    addToSavedList(movie);
  };
  // you first have tyo do an axios call to get the of objects with all the movies and loop through that with map then pass to state and the we gonna use useparams and compared the id of that araray of objects with
  // console.log(id)

  useEffect(() => {
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        setMovie(res.data);
        // console.log(props.saveList);
        // console.log(res.data.title);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading movie information... Be Patient with me :D</div>;
  }

  return (
    <MovieCard
      // {...props}
      key={movie.id}
      movie={movie}
      saveMovie={saveMovie}
      saveList={props.saveList}
    />
  );
};

export default Movie;
