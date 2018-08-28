import React from "react";
import Movie from "./Movie";
import Search from "./Search";

const AppContainer = ({ getMovieApi, getInputValue, movies }) => (
  <div>
    <Search getMovieApi={getMovieApi} getInputValue={getInputValue} />
    {!!movies && <Movie movies={movies} />}
  </div>
);

export default AppContainer;
