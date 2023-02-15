import Books from "../Components/Books/Books"
import "../Components/Books/books.css"

function index({bookRef}) {
  return (
    <div>
      <div className="indexpg-title">
        <h2>All books</h2>
      </div>
      <div>
        <Books bookRef={bookRef}/>
      </div>
        
    </div>
  )
}

export default index