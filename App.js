import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const response = fetch(
      "http://api.themoviedb.org/3/discover/movie?api_key=acea91d2bff1c53e6604e4985b6989e2&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        const transformData = data.results.map((movieData) => {
          return {
            id: movieData.id,
            overview: movieData.overview,
            title: movieData.title,
            date: movieData.release_date,
            poster: movieData.poster_path,
          };
        });
        setMovies(transformData);
      });
  }, []);
  return <MovieList movies={movies}></MovieList>;
}
