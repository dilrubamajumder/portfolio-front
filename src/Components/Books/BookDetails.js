import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import Reviews from "../Reviews/Reviews";
import "./books.css";
import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

const API = process.env.REACT_APP_API_URL;

function BookDetails() {
  const [book, setBook] = useState({});
  const [bookReviews, setBookReviews] = useState([]);
  const { user, setUser } = useContext(UserContext)

  const { id } = useParams();
  const navigate = useNavigate();

  const deleteBook = () => {
    const {token} = JSON.parse(window.localStorage.getItem('book-review-token')) ?? {}
    axios
      .delete(`${API}/books/${id}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then(
        () => {
          navigate(`/books`);
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
        const { bookInfo, reviews } = res.data;
        console.log(res.data);
        setBook(bookInfo);
        setBookReviews(reviews);
      })
      .catch((error) => console.warn(error));
  }, [id]);

  return (
    <div className="book">
      <div className="Book-content">
        <div className="card__body">
          <div className="book-card">
          <div className="book-card-top">
            <img className="body_image" src={book.uri} alt="book-img" />
            <div className="bookInfo">
              <h2 className="healthy-p1">{book.title}</h2>
              <p className="healthy-p1">{book.author}</p>

              {book.category && book.category.split(' ').map((item) => (<span key={item} className="category-pills">{item}</span>))}

              <p className="healthy-p1">
                Year Published: {book.published_year}
              </p>
            </div>
          </div>

          <p className="healthy-p1">Description: {book.description}</p>
          <div className="showNavigation">
            <>
              <Link to={`/books`}>
                <button>Back</button>
              </Link>
            </>
            { user &&<> 
             <Link to={`/books/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </> }
            <>
              { user && <button onClick={handleDelete}>Delete</button>}
            </>
          </div>
          </div>
        </div>
      </div>
      <div className="reviews-container">
      <Reviews reviews={bookReviews} setReviews={setBookReviews}/>
      </div>
    </div>
  );
}

export default BookDetails;
