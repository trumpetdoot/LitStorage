import React, { useEffect, useState } from "react";
import AddBookForm from "./components/AddBookForm";
import FilterForm from "./components/FilterForm";
import BooksList from "./components/BooksList";
import ExportButton from "./components/ExportButton";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);
  // Getting the books via query
  const fetchBooks = async (filters = {}) => {
    const query = new URLSearchParams(filters).toString();
    const response = await axios.get(`/api/books?${query}`);
    setBooks(response.data);
  };
  // We run the fetchbooks method once at the start of the project to show the current book logs in the db
  useEffect(() => {
    fetchBooks();
  }, []);

  // Display information in two columns, one for books, other for forms to fill out (add or filter).
  // Export button right below the books list
  return (
    <div className="container mt-4">
      <h1 className="text-center">Book Inventory</h1>
      <div className="row">
        <div className="col-md-8">
          <BooksList books={books} />
          <div className="d-flex justify-content-start mt-3">
            <ExportButton />
          </div>
        </div>
        <div className="col-md-4">
          <AddBookForm onBookAdded={fetchBooks} />
          <FilterForm onFilter={fetchBooks} />
        </div>
      </div>
    </div>
  );
};

export default App;
