import React from "react";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import MoviesList from "./components/MoviesList";
import FullWidthTextField from "./components/TextField";
import ResponsiveGrid from "./components/MoviesList";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("Movie");

  const eventHandler = (e) => {
    setInput(e.target.value);
  };
  const url = `https://api.themoviedb.org/3/search/movie?api_key=1160cac5ff26e1cc795d5733856ce01c&language=en-US&page=1&include_adult=false&query=${input}`;

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const transformedData = data.results.map((moviesData) => {
        return {
          name: moviesData.title,
          posterPath: moviesData.poster_path,
          desc: moviesData.overview,
          backdropPath: moviesData.backdrop_path,
        };
      });
      setMovies(transformedData);
      setIsloading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsloading(false);
  };

  useEffect(() => {
    fetchData();
  });

  let content = <p>No movies to show</p>;

  if (movies.length > 0) {
    content = <ResponsiveGrid movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isloading) {
    content = <p>loading....</p>;
  }
  return (
    <React.Fragment>
      <NavBar />
      <section style={{ margin: "10px" }}>
        <FullWidthTextField onChange={eventHandler} />
        <section style={{ margin: "10px" }}>
          {/* <MediaCard/>
           */}
          {content}
        </section>
      </section>
    </React.Fragment>
  );
}

export default Movie;
