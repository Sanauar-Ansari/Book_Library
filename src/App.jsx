import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  // Fetch books function
  const fetchBooks = async (searchQuery) => {
    // if user cleared the input or entered blank spaces then it become TRUE and books will be set to empty array.
    if (!searchQuery.trim()) {
      setBooks([]);
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${searchQuery}`
      );
      const data = await response.json();
      // console.log(data)
      setBooks(data.docs || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  //  Debouncing logic — wait before making API call
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchBooks(query);
    }, 500); // 500ms debounce delay

    return () => {
      clearTimeout(handler); // cleanup previous timeout
    };
  }, [query]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        📚 Find Your Book Here 
      </h1>

      {/* Input field */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search books by title..."
          className="w-2/3 md:w-1/2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {loading ? (
        <p className="text-center text-gray-600 mt-6">Loading...</p>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
};

export default App;
