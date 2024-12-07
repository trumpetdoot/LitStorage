/*
All the Routes will be written in this file. 
We use express-validator to ensure inputs are valid (ISBN constraints, non-empty text boxes)
*/

const express = require("express");
const { check, validationResult } = require("express-validator");
const db = require("../database");
const router = express.Router();

// Adding a book
router.post(
  "/books",
  [
    // Ensure all important information is filled out
    check("title").notEmpty().withMessage("Title is required"),
    check("author").notEmpty().withMessage("Author is required"),
    check("isbn").notEmpty().isISBN().withMessage("Invalid ISBN code"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title, author, genre, publicationDate, isbn } = req.body;
    db.run(
      `INSERT INTO INVENTORY (Title, Author, Genre, PublicationDate, ISBN) VALUES (?, ?, ?, ?, ?)`,
      [title, author, genre, publicationDate, isbn],
      function (err) {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: "Book added", id: this.lastID });
      }
    );
  }
);

//Fetch Books
router.get("/books", (req, res) => {
  const { title, author, genre, publicationDate, isbn } = req.query;

  // SQL Query
  const cond = [];
  const values = [];
  // Queries with these condtiions can be looser
  if (title) {
    cond.push("Title LIKE ?");
    values.push(`%${title}%`);
  }
  if (author) {
    cond.push("Author LIKE ?");
    values.push(`%${author}%`);
  }
  if (genre) {
    cond.push("Genre LIKE ?");
    values.push(genre);
  }
  // Queries using these two categories need to be strict
  if (publicationDate) {
    cond.push("PublicationDate = ?");
    values.push(publicationDate);
  }
  if (isbn) {
    cond.push("ISBN = ?");
    values.push(isbn);
  }
  // Construct the SQL query and run it through the db to return values.
  const sqlQuery = cond.length ? `WHERE ${cond.join(" AND ")}` : "";

  db.all(`SELECT * FROM INVENTORY ${sqlQuery}`, values, (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
});

// Exporting Books
router.get("/books/export", (req, res) => {
  const format = req.query.format || "json";
  db.all(`SELECT * FROM INVENTORY`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (format === "csv") {
      // json2csv converter
      const { Parser } = require("json2csv");
      const csv = new Parser().parse(rows);
      res.header("Content-Type", "text/csv");
      res.attachment("books.csv");
      res.send(csv);
    } else {
      res.header("Content-Type", "application/json");
      res.send(JSON.stringify(rows));
    }
  });
});

module.exports = router;
