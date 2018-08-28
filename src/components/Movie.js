import React from "react";

const Movie = ({ movies }) =>
  movies.map(movie => {
    return (
      <div key={movie.id} className="movie">
        <img
          alt={`Movie - ${movie.title}`}
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
            movie.poster_path
          }`}
        />
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  });

export default Movie;
