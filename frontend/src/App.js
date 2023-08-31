import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewList from './components/ReviewList';
import AddReviewForm from './components/AddReviewForm';

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
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img
              src="https://cdn.marvel.com/content/2x/MLou2_Payoff_1-Sht_Online_DOM_v7_Sm.jpg"
              alt="Movie Poster"
              className="img-fluid"
              style={{ width: '50%' }} // Set image width to 50%
            />
          </div>
          <div className="col-md-6">
            <AddReviewForm setReviews={setReviews} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <ReviewList reviews={reviews} setReviews={setReviews} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
