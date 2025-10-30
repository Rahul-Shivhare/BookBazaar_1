import React, { useState } from "react";
import { books } from "./data/BooksData";
import BookList from "./components/BookList";
import BookFilters from "./components/BookFilters";
import SortOptions from "./components/SortOptions";
import BookCount from "./components/BookCount";
import "./styles/App.css";

function App() {
  const [filters, setFilters] = useState({ genre: [], author: [], publisher: [] });
  const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"

  // Filtering logic
  const filtered = books.filter((book) => {
    const genreMatch =
      filters.genre.length === 0 || filters.genre.includes(book.genre);
    const authorMatch =
      filters.author.length === 0 || filters.author.includes(book.author);
    const publisherMatch =
      filters.publisher.length === 0 || filters.publisher.includes(book.publisher);
    return genreMatch && authorMatch && publisherMatch;
  });

  // Sorting logic
  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  // Reset
  function handleReset() {
    setFilters({ genre: [], author: [], publisher: [] });
    setSortOrder("");
  }

  return (
    <div className="App">
      <h1>BookBazaar</h1>
      <BookFilters filters={filters} setFilters={setFilters} books={books} />
      <SortOptions sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <button onClick={handleReset}>Reset</button>
      <BookCount count={sorted.length} />
      <BookList books={sorted} />
    </div>
  );
}
export default App;
