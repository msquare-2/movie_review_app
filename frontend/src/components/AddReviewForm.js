import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddReviewForm.css';

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
    <div>
      <h2>Add Review</h2>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Enter your review"
      />
      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  );
}

export default AddReviewForm;
