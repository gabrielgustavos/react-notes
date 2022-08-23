import React from "react";

const ArraysJsx = () => {
  const movies = [
    " The Godfather",
    " The Shawshank Redemption",
    " The Dark Knight",
    " The Godfather: Part II",
    " The Lord of the Rings: The Return of the King",
    " Pulp Fiction",
    " Schindler's List",
  ];

  const books = [
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J. K. Rowling",
      year: 1997,
    },
    {
      title: "The Lord of the Rings",
      author: "J. R. R. Tolkien",
      year: 1954,
    },
    {
      title: "The perks of being a wallflower",
      author: "Stephen Chbosky",
      year: 1999,
    },
  ];
  return (
    <>
      <h1>Movies list array:</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
      <h1>Books list array objects:</h1>
      <ul>
        {books
          .filter(({ year }) => year < 1996)
          .map(({ title, year, author }) => (
            <li key={title}>
              {title}
              <br />
              {year}
              <br />
              {author}
            </li>
          ))}
      </ul>
    </>
  );
};

export default ArraysJsx;
