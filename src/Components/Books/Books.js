import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Book from './Book.js'

const API = process.env.REACT_APP_API_URL;

export default function Books() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        axios
        .get(`${API}/books`)
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

