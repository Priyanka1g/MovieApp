import React from "react";

const Movie = (props) => {
  return (
    <li className="vehicle">
      <h2>{props.name}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w200${props.posterPath}`}
        alt={`${props.name} Poster`}
      />
    </li>
  );
};

export default Movie;
