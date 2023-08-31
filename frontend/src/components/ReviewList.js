import React from 'react';
import axios from 'axios';
// import '../styles/ReviewList.css'

function ReviewList({ reviews, setReviews }) {
  const handleVote = async (id, voteType) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/reviews/vote/${id}`, {
        voteType,
      });

      const updatedReview = response.data.review;
      console.log('Received Sentiment:', updatedReview.sentiment);

      const updatedReviewList = reviews.map(review =>
        review.id === id ? { ...review, ...updatedReview } : review
      );

      setReviews(updatedReviewList);
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Movie Reviews</h2>
      <ul className="list-unstyled">
        {reviews.map((review) => (
          <li key={review.id} className="border p-3 mb-3">
            <p>{review.text}</p>
            <p className="mb-0">Sentiment: {review.sentiment}</p>
            <p className="mb-0">Upvotes: {review.upvotes}</p>
            <p className="mb-0">Downvotes: {review.downvotes}</p>
            <div className="d-flex justify-content-between mt-2">
              <button className="btn btn-outline-success" onClick={() => handleVote(review.id, 'upvote')}>Upvote</button>
              <button className="btn btn-outline-danger" onClick={() => handleVote(review.id, 'downvote')}>Downvote</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
