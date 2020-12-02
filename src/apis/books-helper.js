import booksApi from "./books";

export const getBooksFromApi = (setBooks) => {
  booksApi
    .get("/books")
    .then((resp) => {
      setBooks(resp.data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

export const deleteBook = (id) => {
  booksApi.delete(`/books/${id}`).then((resp) => {
    console.log(resp);
  });
};

export const createBook = (book, genreId) => {
  booksApi
    .post("/books", {
      name: book.name,
      author: book.author,
      genreId: genreId,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log("Error ", err);
    });
};

export const editBook = (book, genreId) => {
  booksApi
    .put(`/books/${book._id}`, {
      name: book.name,
      author: book.author,
      genreId: genreId,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log("Error ", err);
    });
};
