import React from "react";

// Displays current books in the database
const BooksList = ({ books }) => {
  if (books.length === 0) {
    return <p>No books found. Add a book or adjust filters.</p>;
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Publication Date</th>
          <th>ISBN</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book.EntryID}>
            <td>{book.Title}</td>
            <td>{book.Author}</td>
            <td>{book.Genre}</td>
            <td>{book.PublicationDate}</td>
            <td>{book.ISBN}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksList;
