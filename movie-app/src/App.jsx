import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who enters dreams to steal secrets.",
      posterURL: "https://www.imdb.com/title/tt1375666/.",
      rating: 5,
      trailerLink: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      title: "Interstellar",
      description: "A team of explorers travel through space and time.",
      posterURL: "https://www.imdb.com/title/tt0816692/",
      rating: 4,
      trailerLink: "https://www.youtube.com/embed/zSWdZVtXT7E",
    },
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      (!searchRating || movie.rating >= searchRating)
  );

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Movie App</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Filter
                setSearchTitle={setSearchTitle}
                setSearchRating={setSearchRating}
              />
              <AddMovie addMovie={addMovie} />
              <MovieList movies={filteredMovies} />
            </>
          }
        />
        <Route path="/movie/:title" element={<MovieDetail movies={movies} />} />
      </Routes>
    </div>
  );
};

export default App;
