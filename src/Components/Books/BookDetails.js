import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Heart from "../../Images/healthyfullheart.png"
import blackHeart from "../../Images/blackheart.png"

import "./books.css";

const API = process.env.REACT_APP_API_URL;

function BookDetails() {
  const [book, setBook] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteBook = () => {
    axios
      .delete(`${API}/books/${id}`)
      .then(
        () => {
          navigate(`/bookmarks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = () => {
    deleteBook();
  };

  useEffect(() => {
    axios
      .get(`${API}/books/${id}`)
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
      })
      .catch((error) => console.warn(error));
  }, [id]);

  return (
    <div className="Book-content">
      <div className="card__body">
        <img className="body_image" src={book.uri} alt="book-img" />
        <p className="healthy-p1">Title: {book.title}</p>
        <p className="healthy-p1">Author: {book.author}</p>
        <p className="healthy-p1">Category: {book.category}</p>

        <p className="healthy-p1">Year Published: {book.published_year}</p>
        <p className="healthy-p1">Description: {book.description}</p>
        <p className="favorite-p">
                {book.is_favorite ? (
                  <img className="heartFilled" src={Heart} alt={Heart} />
                ) : (
                  <img className="heartEmpty" src={blackHeart} alt={blackHeart} />
                )}
              </p>
              <div className="showNavigation">
        <>
          <Link to={`/books`}>
            <button>Back</button>
          </Link>
        </>
        <>
          <Link to={`/books/id/edit`}>
            <button>Edit</button>
          </Link>
        </>
        <>
          <button onClick={handleDelete}>Delete</button>
        </>
      </div>
      </div>
    </div>
  );
}

export default BookDetails;
