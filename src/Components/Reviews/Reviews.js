import axios from "axios";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const API = process.env.REACT_APP_API_URL;

function Reviews({reviews, setReviews}) {
  let { id } = useParams();
  const { token } = JSON.parse(window.localStorage.getItem('book-review-token')) ?? {}

  const handleAdd = (newReview) => {
    axios
      .post(`${API}/books/${id}/reviews`, newReview, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then(
        (response) => {
          setReviews([response.data, ...reviews]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API}/books/${id}/reviews/${id}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then(
        (response) => {
          const copyReviewArray = [...reviews];
          const indexDeletedReview = copyReviewArray.findIndex((review) => {
            return review.id === id;
          });
          copyReviewArray.splice(indexDeletedReview, 1);
          setReviews(copyReviewArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedReview) => {
    axios
      .put(`${API}/books/${id}/reviews/${updatedReview.id}`, updatedReview, {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        const copyReviewArray = [...reviews];
        const indexUpdatedReview = copyReviewArray.findIndex((review) => {
          return review.id === updatedReview.id;
        });
        copyReviewArray[indexUpdatedReview] = response.data;
        setReviews(copyReviewArray);
      })
      .catch((c) => console.warn("catch", c));
  };


  return (
    <section className="Reviews">
      {/* <h1>Reviews</h1> */}
      <ReviewForm handleSubmit={handleAdd} />
      <h2>Reviews:</h2>
      {reviews.map((review) => (
        <Review
          key={review.id}
          review={review}
          handleSubmit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </section>
  );
}

export default Reviews;
