import React, { useState } from "react";
import axios from "axios";

const AddBookForm = ({ onBookAdded }) => {
  const [formData, setFormData] = useState({
    // Payload form
    title: "",
    author: "",
    genre: "",
    publicationDate: "",
    isbn: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    // Fill out form data from text box
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // No need to reload the page given that this is a react app
    try {
      // POST request with information filled out in the form
      const response = await axios.post("/api/books", formData);
      setMessage("Book added successfully!");

      // Return setForm to default empty list so that a new book can be added
      setFormData({
        title: "",
        author: "",
        genre: "",
        publicationDate: "",
        isbn: "",
      });
      onBookAdded(); // Refresh the book list without need to reload app
    } catch (err) {
      setMessage("Failed to add book. Check your input or try again.");
    }
  };

  // Form to Add new books
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h2>Add a New Book</h2>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Author</label>
        <input
          type="text"
          className="form-control"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Genre</label>
        <input
          type="text"
          className="form-control"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Publication Date</label>
        <input
          type="date"
          className="form-control"
          name="publicationDate"
          value={formData.publicationDate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>ISBN</label>
        <input
          type="text"
          className="form-control"
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Add Book
      </button>
      {message && <p className="mt-2">{message}</p>}
    </form>
  );
};

export default AddBookForm;
