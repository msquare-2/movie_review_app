import React, { useState } from 'react';
import axios from 'axios';
// import '../styles/AddReviewForm.css';

function AddReviewForm({ setReviews }) {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = async () => {
    if (reviewText.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:5000/api/reviews/submit', {
          reviewText,
        });

        const newReview = response.data.review;

        setReviews(reviews => [...reviews, newReview]);
        setReviewText('');
      } catch (error) {
        console.error('Error submitting review:', error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex align-items-center">
        <div className="flex-grow-1 pr-2">
          <div className="form-group mb-0">
            <textarea
              className="form-control"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Enter your review"
              rows="1"
            />
          </div>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">Submit Review</button>
      </div>
    </div>
  );
}

export default AddReviewForm;
