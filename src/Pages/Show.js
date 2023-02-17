import BookDetails from "../Components/Books/BookDetails"
import Moving from "./Movingimages/Moving";
function Show() {
  return (
    <div>
      <div className="Show">
      <BookDetails />
    </div>
    <div>
        <Moving />
      </div>
    </div>
    
  );
}

export default Show;