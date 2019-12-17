import React, { useState } from "react";
import { Route } from "react-router-dom";

const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;

  let [show, setShow] = useState("save-button");

  props.saveList.forEach(e => {
    if (e.title == title) {
      show = "hideBtn";
    }
  });

  return (
    // <>
    //   <div>work in progress..</div>
    // </>
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

        <button onClick={props.saveMovie} className={show}>
          Save
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
