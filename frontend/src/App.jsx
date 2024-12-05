import React, { useState } from "react";
import AddBookForm from "./components/AddBookForm";
import FilterForm from "./components/FilterForm";
import BooksList from "./components/BooksList";
import ExportButton from "./components/ExportButton";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async (filters = {}) => {
    const query = new URLSearchParams(filters).toString();
    const response = await axios.get(`/api/books?${query}`);
    setBooks(response.data);
  };

  return (
    <div className="container mt-4">
      <h1>Book Inventory</h1>
      <AddBookForm onBookAdded={fetchBooks} />
      <FilterForm onFilter={fetchBooks} />
      <ExportButton />
    </div>
  );
};

export default App;
