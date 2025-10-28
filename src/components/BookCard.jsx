import React, { useEffect } from "react";

const BookCard = ({ book }) => {

   useEffect(()=>{
    console.log(book,"popopop")

  })
  const coverId = book.cover_i;
  const coverUrl = coverId? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`: "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition duration-300 text-center">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-full h-65 object-contain rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold">{book.title}</h2>
      <p className="text-gray-600">{book.author_name?.[0]}</p>
      <p className="text-gray-400 text-sm">Published: {book.first_publish_year || "N/A"}</p>
    </div>
  );
};

export default BookCard;
