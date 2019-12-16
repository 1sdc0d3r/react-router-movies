import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import "../index.css";

const Movie = props => {
  const [movie, setMovie] = useState();
  // const btn = document.querySelector(".save-button");
  // const id = props.match.params.id;
  const { id } = useParams();
  console.log(id);
  // const { movId, addToSavedList, savedList } = useParams();
  // console.log(moviesId);

  const saveMovie = () => {
    const addToSavedList = props.save;

    addToSavedList(movie);
  };
  // you first have tyo do an axios call to get the of objects with all the movies and loop through that with map then pass to state and the we gonna use useparams and compared the id of that araray of objects with
  // console.log(id)

  useEffect(() => {
    // const id = 2;
    // ! COME BACK TO UNDERSTAND THIS BETTER

    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        setMovie(res.data);
        console.log(props.saveList);
        console.log(res.data.title);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading movie information... Be Patient with me :D</div>;
  }

  let hideBtn = "save-button";
  let titleList = [];

  props.saveList.forEach(e => {
    e.title == movie.title ? titleList.push(true) : titleList.push(false);
  });
  titleList.includes(true) ? (hideBtn = "hideBtn") : (hideBtn = "save-button");

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
        <button onClick={saveMovie} className={hideBtn}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Movie;
