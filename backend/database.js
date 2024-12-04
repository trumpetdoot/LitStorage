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
