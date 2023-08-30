import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewList from './components/ReviewList';
import AddReviewForm from './components/AddReviewForm';
import './styles/global.css';

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await axios.get('http://localhost:5000/api/reviews/all');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    }

    fetchReviews();
  }, []);

  return (
    <div className="App">
      <h1>Movie Review Web App</h1>
      <AddReviewForm setReviews={setReviews} />
      <ReviewList reviews={reviews} setReviews={setReviews} />
    </div>
  );
}

export default App;
