import React from "react";

const Search = ({ getMovieApi, getInputValue }) => (
  <form onSubmit={getMovieApi}>
    <input onChange={getInputValue} placeholder="Type a movie" />
    <button type="submit">Search</button>
  </form>
);

export default Search;
