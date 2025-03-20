import React from "react";

//Filtering by title and Rating

const Filter = ({ setSearchTitle, setSearchRating }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setSearchTitle(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="number"
        placeholder="Min rating (1-5)"
        min="1"
        max="5"
        onChange={(e) => setSearchRating(e.target.value)}
        style={{ padding: "5px" }}
      />
    </div>
  );
};

export default Filter;
