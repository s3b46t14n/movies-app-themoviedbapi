import { useEffect, useState } from "react";
import "./MovieLists.css";
import Poster from "./Poster";

function MovieLists({ type }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=685396731dac9aa3af8f20f4a728bd67&language=en-US`;
    if (type === "popular") {
      url = `https://api.themoviedb.org/3/movie/popular?api_key=685396731dac9aa3af8f20f4a728bd67&language=en-US`;
    }

    getMoviesList(url);
  }, [type]);

  const getMoviesList = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.log("API fetch Error:", error);
    }
  };

  const moviesListTags = movies.map((movie) => {
    return <Poster movie={movie} key={movie.id} />;
  });

  return (
    <section className="movies-list">
      <h1 className="title" id={type}>
        {type} movies
      </h1>
      <ul className="list-container">{moviesListTags}</ul>
    </section>
  );
}

export default MovieLists;
