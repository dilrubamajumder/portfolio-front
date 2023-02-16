import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ReviewForm(props) {
  let { id } = useParams();
  const { reviewDetails } = props;

  const [reviews, setReviews] = useState({
    title: "",
    content: "",
    rating: "",
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
      title: "",
      content: "",
      rating: "",
      book_id: id,
    });
  };
  return (
    <div className="Edit">
      {props.children}
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={reviews.title}
          onChange={handleTextChange}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number"
          name="rating"
          min="0"
          max="5"
          step="1"
          value={reviews.rating}
          placeholder="0-5"

          onChange={handleTextChange}
        />
        <label htmlFor="content">Review:</label>
        <textarea
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