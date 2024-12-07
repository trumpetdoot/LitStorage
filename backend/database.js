/* 
Database setup using SQLite. 
Schema Design: 
  * EntryID we use as an identifier on top of the ISBN 
  * Title is a text type that can't be empty
  * Author is text type that can't be empty
  * Genre is text type but isn't important 
  * Publication Date is a DATE type 
  * ISBN is text type that is unique and important 
*/

const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./books.db", (err) => {
  if (err) {
    console.error("Error opening db", err.message);
  } else {
    console.log("DB connection success");
  }
});

db.serialize(() => {
  db.run(`
        CREATE TABLE IF NOT EXISTS Inventory (
            EntryID INTEGER PRIMARY KEY AUTOINCREMENT,
            Title TEXT NOT NULL, 
            Author TEXT NOT NULL,
            Genre TEXT,
            PublicationDate DATE,
            ISBN TEXT UNIQUE NOT NULL
        )
        `);
});

module.exports = db;
