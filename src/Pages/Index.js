import { useEffect } from "react"
import Books from "../Components/Books/Books"
import "../Components/Books/books.css"

function index({bookRef}) {
  return (
  <div>
    
     <div ref={bookRef}>
      <div className="indexpg-title">
        <h2>All books: </h2>
        <h7 className="index-subtitle">Showing all the books in collection</h7>
      </div>
      <div>
        <Books />
      </div>
        
    </div>
  </div>
   
  )
}

export default index