import React, { useState } from "react";
import { Route } from "react-router-dom";
//? import { Movie, MovieCard, MovieList, SavedList } from "./index";
//? import SavedList from "./Movies/index";

import { Movie, MovieList, SavedList } from "./Movies/index";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };
  {
    return (
      <div>
        <SavedList list={savedList} />
        <Route exact path="/" component={MovieList} />
        {/* How do I change component to render??? I need to pass in addToSavedList into Movie component to use it to set Save */}
        {/* <Route path="/movies/:id" component={Movie} /> */}
        <Route
          path="./movies/:id"
          render={props => <Movie {...props} save={addToSavedList} />}
        />
      </div>
    );
  }
};

export default App;
