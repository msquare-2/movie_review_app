import React from 'react';
import axios from 'axios';
import '../styles/ReviewList.css'

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
    <div>
      <h2>Movie Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.text}</p>
            <p>Sentiment: {review.sentiment}</p>
            <p>Upvotes: {review.upvotes}</p>
            <p>Downvotes: {review.downvotes}</p>
            <button onClick={() => handleVote(review.id, 'upvote')}>Upvote</button>
            <button onClick={() => handleVote(review.id, 'downvote')}>Downvote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReviewList;
