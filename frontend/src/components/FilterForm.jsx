import React, { useState } from "react";

const FilterForm = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    // Payload form
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    isbn: "",
  });

  const handleChange = (e) => {
    // Fill out filters based on text box response
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // React app doesn't need a reload
    onFilter(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2>Filter Books</h2>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={filters.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          className="form-control"
          name="author"
          value={filters.author}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Genre</label>
        <input
          type="text"
          className="form-control"
          name="genre"
          value={filters.genre}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Publication Date</label>
        <input
          type="text"
          className="form-control"
          name="publicationDate"
          value={filters.publicationDate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>ISBN Code</label>
        <input
          type="text"
          className="form-control"
          name="isbn"
          value={filters.isbn}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-secondary mt-3">
        Filter
      </button>
    </form>
  );
};

export default FilterForm;
