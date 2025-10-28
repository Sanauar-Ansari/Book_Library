const BookList = ({ books }) => {
  return (
    <div>
      {books.length === 0 ? (
        <p className="text-center text-gray-700 pt-30">
          No books found. Try searching something else.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book, index) => {
          // The Open Library provides a special endpoint for cover images.
          // https://covers.openlibrary.org/b/id/{cover_i}-{size}.jpg     ----> size: S:small, M:medium, L-large
          // We have cover_i in our response so we can find book cover image.
            const coverId = book.cover_i;
            const coverUrl = coverId? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`:"https://via.placeholder.com/150x200?text=No+Cover";
            return (
              <div
                key={index}
                className="bg-white p-4 rounded-xl transform hover:scale-107 transition-transform duration-200 text-center"
              >
                <img
                  src={coverUrl}
                  alt={book.title}
                  className="w-full h-56 object-contain rounded-md mb-4"
                />
                <h2 className="text-lg font-semibold">{book.title}</h2>
                <p className="text-gray-600">
                  {book.author_name?.[0] || "Unknown Author"}
                </p>
                <p className="text-gray-400 text-sm">
                  Published: {book.first_publish_year || "N/A"}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BookList;

