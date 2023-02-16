import { useEffect } from "react"
import Books from "../Components/Books/Books"
import "../Components/Books/books.css"
import Intro from "./Intro"

function index({bookRef, introRef}) {
  return (
  <div>
    <Intro
      introRef={introRef}
        style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "black",
      }}
    />
     <div ref={bookRef}>
      <div className="indexpg-title">
        <h2>All books</h2>
      </div>
      <div>
        <Books />
      </div>
        
    </div>
  </div>
   
  )
}

export default index