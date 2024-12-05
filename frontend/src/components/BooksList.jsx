import React from "react";

const BooksList = ({ books }) => {
  if (books.length === 0) {
    return <p>No books found. Add a book or adjust filters.</p>;
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
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
            <td>{index + 1}</td>
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
