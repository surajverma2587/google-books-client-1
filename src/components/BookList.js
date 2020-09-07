import React from "react";
import BookCard from "./BookCard";

const BookList = ({ title, books = [], btnControls }) => {
  return (
    <div className="border p-4">
      <h4>{title}</h4>
      {books.map((book, index) => (
        <BookCard {...book} btnControls={btnControls} id={index} key={index} />
      ))}
    </div>
  );
};

export default BookList;
