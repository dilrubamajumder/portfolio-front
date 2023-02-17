import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./editForm.css"

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
      <h1 className="editformh1">Want to fix something? Edit Away!</h1>
      <form className="editform"
      onSubmit={handleSubmit}>
        <label className="editlabel" htmlFor="title">
          Title:
          <input
            id="title"
            value={book.title}
            type="text"
            onChange={handleTextChange}
            placeholder="Title.."
            required
          />
        </label>

        <label className="editlabel" htmlFor="author">
          Author:  
          <input
            id="author"
            value={book.author}
            type="text"
            onChange={handleTextChange}
            placeholder="author.."
            required
          />
        </label>

        <label className="editlabel" htmlFor="published_year">
          Year Published:
          <input
            id="published_year"
            value={book.published_year}
            type="text"
            onChange={handleTextChange}
            placeholder="Year.."
            required
          />
        </label>

        <label className="editlabel" htmlFor="category">
          Category:
          <input
            id="category"
            value={book.category}
            type="text"
            onChange={handleTextChange}
            placeholder="romance, comedy.."
          />
        </label>

        <label className="editlabel" htmlFor="description">
          Description:
          <input
            id="description"
            value={book.description}
            type="text"
            onChange={handleTextChange}
            placeholder="synopsis.."
            required
          />
        </label>
        <label className="editlabel" htmlFor="uri">
          Image:
          <input
            id="uri"
            value={book.uri}
            type="text"
            onChange={handleTextChange}
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
