import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
        width: "250px",
      }}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{ width: "100%", height: "300px" }}
      />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>
        <strong>Rating:</strong> {movie.rating}/5
      </p>
      <Link
        to={`/movie/${movie.title}`}
        style={{ textDecoration: "none", color: "blue" }}
      >
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default MovieCard;
