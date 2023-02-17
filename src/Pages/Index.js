import { useEffect } from "react"
import Books from "../Components/Books/Books"
import "../Components/Books/books.css"
import Moving from "./Movingimages/Moving"
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
      <div>
        <Moving />
      </div>
    </div>
  </div>
   
  )
}

export default index