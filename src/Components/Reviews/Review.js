import { useState } from "react";
import ReviewForm from "./ReviewForm";
import "./Review.css"

function Review({ review, handleDelete, handleSubmit }) {
  const { id, title, rating, reviewer, content } = review;
  const [viewEditForm, toggleEditForm] = useState(false);

  const toggleView = () => {
    toggleEditForm(!viewEditForm);
  };

  return (
    <div className="Review">
      {viewEditForm ? (
        <ReviewForm
          reviewDetails={review}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div>
          <h4>
            {title} <span>{rating}</span>
          </h4>
          <h5>{reviewer}</h5>
          <p>{content}</p>
          <button onClick={() => handleDelete(id)}>Delete</button>
          <button onClick={toggleView}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Review;
