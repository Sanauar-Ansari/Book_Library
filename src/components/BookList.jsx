import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  if (books.length === 0) {
    return <p className="text-center text-gray-600">No books found. Try searching something else.</p>;
  }

  return (
   
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
