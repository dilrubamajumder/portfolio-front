import { useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios';
import  "./Newform.css"

const API = process.env.REACT_APP_API_URL;

function NewForm({newRef}) {
    const navigate = useNavigate();
    const [error, setError] = useState('')

    const addNewBook = (newBook) => {
        const { uri } = newBook;
        let book;
        if (!uri) {
          book = {
            ...newBook,
            uri:
            uri || "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=2000",
        };
        } else {
          book = newBook;
        }
        const {token} = JSON.parse(window.localStorage.getItem('book-review-token')) ?? {}

        if ( token ) {
          axios
          .post(`${API}/books`, book, {
            headers: {
              authorization: `Bearer ${token}`
            }
          })
          .then(
            () => {
              navigate(`/`);
            },
            (error) => console.log(error)
          )
          .catch((error) => console.warn(error));
        } else {
          setError('Stop dat shit')
        }
        
      };
    
      const [book, setBook] = useState({
        title: "",
        author: "",
        category: "",
        published_year: "",
        description: "",
        // is_favorite: false,
        uri: "",
      });
      const handleTextChange = (e) => {
        setBook({ ...book, [e.target.id]: e.target.value });
      };
      const handleCheckboxChange = (e) => {
        setBook({ ...book, is_favorite: !book.is_favorite});
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        addNewBook(book);
        navigate('/')
      };


  return (
    <div className='newform'>
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">
            Title
            <input 
            id='title'
            value={book.title}
            type= 'text'
            onChange={handleTextChange}
            placeholder='Title..'
            required
            />
        </label>

        <label htmlFor="published_year">
            Year Published
            <input 
            id='published_year'
            value={book.published_year}
            type= 'text'
            onChange={handleTextChange}
            placeholder='Year..'
            required
            />
        </label>

        <label htmlFor="author">
            Author
            <input 
            id='author'
            value={book.author}
            type='text'
            onChange={handleTextChange}
            placeholder='author..'
            required
            />
        </label>
        <label htmlFor="category">
            Category
            <input 
            id='category'
            value={book.category}
            type= 'text'
            onChange={handleTextChange}
            placeholder='romance, comedy..'
            />
        </label>
        <label htmlFor="description">
            Description
            <input 
            id='description'
            value={book.description}
            type= 'text'
            onChange={handleTextChange}
            placeholder='synopsis..'
            required
            />
        </label>
        {/* <label htmlFor="favorite">
            Favorite
            <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={book.is_favorite}
          />
        </label> */}
        <label htmlFor="uri">
            Image
            <input 
            id='uri'
            type= 'text'
            placeholder='http://..'

            onChange={handleTextChange}

            />
        </label>
        
        <button className="submit" 
            type="submit">
            Submit
        </button>
      </form>
      {error && <h1>{error}</h1>}

      <Link to={`/books`}>
        <button >Nevermind!</button>
      </Link>
    </div>
  )
}

export default NewForm