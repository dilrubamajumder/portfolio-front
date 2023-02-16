import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Heart from "../../Images/healthyfullheart.png";
import blackHeart from "../../Images/blackheart.png";
import Reviews from "../Reviews/Reviews";
import "./books.css";

const API = process.env.REACT_APP_API_URL;

function BookDetails() {
  const [book, setBook] = useState({});
  const [bookReviews, setBookReviews] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteBook = () => {
    axios
      .delete(`${API}/books/${id}`)
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
              <Link to={`/`}>
                <button>Back</button>
              </Link>
            </>
            <>
              <Link to={`/books/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </>
            <>
              <button onClick={handleDelete}>Delete</button>
            </>
          </div>
          </div>
        </div>
      </div>
      <Reviews reviews={bookReviews} setReviews={setBookReviews}/>
    </div>
  );
}

export default BookDetails;
