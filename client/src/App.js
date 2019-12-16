import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Movie, MovieList, SavedList } from "./Movies/index";
import "./index.css";

const App = props => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  {
    return (
      <div className="wrapper">
        <SavedList list={savedList} />

        <Route path="/" exact>
          <MovieList />
        </Route>

        <Route path="/movies/:id">
          <Movie save={addToSavedList} saveList={savedList} />
        </Route>
        {/* <Route path="/" component={MovieList} exact /> */}
        {/* <Route
          path="/movies/:id"
          render={props => (
            <Movie {...props} save={addToSavedList} saveList={savedList} />
          )}
        /> */}
      </div>
    );
  }
};

export default App;
