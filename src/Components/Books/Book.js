import React from "react";
import { Link } from "react-router-dom";
import "./books.css";

export default function Book({ book: { id, title, author, uri } }) {
  return (
    <Link to={`/books/${id}`}>
      <div className="single-book">
        <img className="book-img" src={uri} alt={uri} />
        <p className="book-title">{title}</p>
      </div>
    </Link>
  );
}
