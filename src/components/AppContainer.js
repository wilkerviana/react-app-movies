import React from "react";
import Movie from "./Movie";
import Search from "./Search";
import Header from "./Header";

const AppContainer = ({ getMovieApi, getInputValue, movies }) => (
  <div className="foo">
    <Header />
    <div className="wrapper">
      <Search getMovieApi={getMovieApi} getInputValue={getInputValue} />
      <section className="wrapper-movies">
        {!!movies && <Movie movies={movies} />}
      </section>
    </div>
  </div>
);

export default AppContainer;
