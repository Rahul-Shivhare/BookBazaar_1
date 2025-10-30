import React from "react";
function BookList({ books }) {
  return (
    <div>
      <h3>Book List</h3>
      <ul>
        {books.map(book => (
          <li key={book.title}>
            <strong>{book.title}</strong> by {book.author} | {book.genre} | {book.publisher} | ₹{book.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default BookList;
