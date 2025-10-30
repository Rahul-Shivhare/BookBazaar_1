import React from "react";

function unique(items, key) {
  return [...new Set(items.map(item => item[key]))];
}

function BookFilters({ filters, setFilters, books }) {
  const genres = unique(books, "genre");
  const authors = unique(books, "author");
  const publishers = unique(books, "publisher");

  function handleChange(type, value) {
    setFilters(prev => {
      const exists = prev[type].includes(value);
      const updated = exists
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value];
      return { ...prev, [type]: updated };
    });
  }

  return (
    <div>
      <h3>Filters</h3>
      <div>
        <strong>Genre:</strong>
        {genres.map(g => (
          <label key={g}>
            <input
              type="checkbox"
              checked={filters.genre.includes(g)}
              onChange={() => handleChange("genre", g)}
            />
            {g}
          </label>
        ))}
      </div>
      <div>
        <strong>Author:</strong>
        {authors.map(a => (
          <label key={a}>
            <input
              type="checkbox"
              checked={filters.author.includes(a)}
              onChange={() => handleChange("author", a)}
            />
            {a}
          </label>
        ))}
      </div>
      <div>
        <strong>Publisher:</strong>
        {publishers.map(p => (
          <label key={p}>
            <input
              type="checkbox"
              checked={filters.publisher.includes(p)}
              onChange={() => handleChange("publisher", p)}
            />
            {p}
          </label>
        ))}
      </div>
    </div>
  );
}

export default BookFilters;
