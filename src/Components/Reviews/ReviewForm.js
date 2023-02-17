import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Review.css"

function ReviewForm(props) {
  let { id } = useParams();
  const { reviewDetails } = props;

  const [reviews, setReviews] = useState({
    // title: "",
    content: "",
    // rating: "",
    book_id: id,
  });

  const handleTextChange = (event) => {
    setReviews({ ...reviews, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (reviewDetails) {
      setReviews(reviewDetails);
    }
  }, [id, reviewDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(reviews, id);
    if (reviewDetails) {
      props.toggleView();
    }
    setReviews({
      // title: "",
      content: "",
      // rating: "",
      book_id: id,
    });
  };
  return (
    <div className="review-container-form">
      {props.children}
      <form className="reviewsubmit" onSubmit={handleSubmit}>
        <label classname= "reviewlabl" htmlFor="content">Leave a Comment: </label>
        <input 
          id="content"
          type="text"
          name="content"
          value={reviews.content}
          placeholder="What did you think..."
          onChange={handleTextChange}
        />
        
        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default ReviewForm;