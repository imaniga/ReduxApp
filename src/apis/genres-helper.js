import booksApi from "./books";

export const getGenresFromApi = (setGenres) => {
  booksApi
    .get("/genres")
    .then((resp) => {
      setGenres(resp.data);
    })
    .catch((err) => {
      console.log("Error ", err);
    });
};

export const deleteGenre = (id) => {
  booksApi.delete(`/genre/${id}`).then((resp) => {
    console.log(resp);
  });
};
export const createGenre = (name, setGenre) => {
  booksApi
    .post("/genres", {
      name: name,
    })
    .then((response) => {
      console.log(response);
      setGenre(response.data);
    })
    .catch((err) => {
      console.log("Error ", err);
    });
};

export const findGenreById = (id, setGenre) => {
  booksApi
    .get(`/genres/${id}`)
    .then((resp) => {
      setGenre(resp);
    })
    .catch((err) => {
      console.log("Error ", err);
    });
};
