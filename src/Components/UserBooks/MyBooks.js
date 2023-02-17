import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Book from '../Books/Book'

const API = process.env.REACT_APP_API_URL;

export default function MyBooks() {
    const [books, setBooks] = useState([])

    useEffect(() => {
      const {token} = JSON.parse(window.localStorage.getItem('book-review-token')) ?? {}

        axios
        .get(`${API}/books/user-books`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })

        .then((res) => setBooks(res.data))
        .catch((err) => console.warn(err))
    },[])

  return (
    <div className='books'>
        {books.map((book) =>{
         return <Book key={book.id} book={book}/>
        })}
    </div>
  )
}