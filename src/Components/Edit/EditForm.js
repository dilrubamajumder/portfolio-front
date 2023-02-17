import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {token} = JSON.parse(window.localStorage.getItem('book-review-token')) ?? {}


  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    published_year: "",
    description: "",
    is_favorite: false,
    uri:
      "" ||
      "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
  });

  const editBook = (updatedBook) => {
    axios
      .put(`${API}/books/${id}`, updatedBook, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then(
        () => {
          navigate(`/books/${id}`);
        },
        (error) => console.log(error)
      )
      .catch((err) => console.warn(err));
  };

  const handleTextChange = (e) => {
    setBook({ ...book, [e.target.id]: e.target.value });
  };

 

  useEffect(() => {
    axios
    .get(`${API}/books/${id}`)
    .then(
      (res) => setBook(res.data.bookInfo),
      (error) => console.log(error)
    );
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook(book, id);
  };
  return (
    <div className="edit-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input
            id="title"
            value={book.title}
            type="text"
            onChange={handleTextChange}
            placeholder="Title.."
            required
          />
        </label>

        <label htmlFor="author">
          Author
          <input
            id="author"
            value={book.author}
            type="text"
            onChange={handleTextChange}
            placeholder="author.."
            required
          />
        </label>

        <label htmlFor="published_year">
          Year Published
          <input
            id="published_year"
            value={book.published_year}
            type="text"
            onChange={handleTextChange}
            placeholder="Year.."
            required
          />
        </label>

        <label htmlFor="category">
          Category
          <input
            id="category"
            value={book.category}
            type="text"
            onChange={handleTextChange}
            placeholder="romance, comedy.."
          />
        </label>

        <label htmlFor="description">
          Description
          <input
            id="description"
            value={book.description}
            type="text"
            onChange={handleTextChange}
            placeholder="synopsis.."
            required
          />
        </label>
        <label htmlFor="uri">
          Image
          <input
            id="image"
            value={book.uri}
            type="string"
            onChange={handleTextChange}
          />
        </label>
        <label htmlFor="favorite">
          Favorite
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleTextChange}
            checked={book.is_favorite}
          />
        </label>

        <button className="submit" type="submit">
          Submit
        </button>

      <Link to={`/books/${id}`}>
        <button>Nevermind!</button>
      </Link>
      </form>
    </div>
  );
}

export default EditForm;
