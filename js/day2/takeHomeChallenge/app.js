const books = require("./book-data.js");

const express = require("express");
const app = express();
const port = 1337;

app.get("/books/", (req, res) => {
  res.send(books);
});

app.get("/single-book/:books.isbn", (req, res) => {
  let bookId = req.params.bookId;
  res.send(books.books[bookId]);
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
