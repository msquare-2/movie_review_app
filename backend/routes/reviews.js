// reviews.js

const express = require("express");
const router = express.Router();
const cohere = require("cohere-ai");
const { text } = require("body-parser");
const fs = require('fs');
const path = require('path');
cohere.init("2AsvwdFcJ3zPd8tRkbbDvGQ6D5WYEoasw3XvVjva");

// Placeholder for review data
let reviews = [];
const sentimentExamplesPath = path.join(__dirname, '../data', 'sentimentExamples.json');
const sentimentExamples = JSON.parse(fs.readFileSync(sentimentExamplesPath, 'utf-8'));

// Endpoint for submitting a review
router.post("/submit", async(req, res) => {
  const { reviewText } = req.body;
  var analysedSentiment = "";

  try {
    const response = await cohere.classify({
      inputs: [reviewText],
      examples: sentimentExamples,
    });

    console.log('Coherent.ai Response:', response.body.classifications[0].prediction);
    analysedSentiment = response.body.classifications[0].prediction;
  } catch (error) {
    console.error("Error analyzing sentiment:", error);
    res.status(500).json({ message: "Error analyzing sentiment." });
  }

  const review = {
    id: reviews.length + 1,
    text: reviewText,
    sentiment: analysedSentiment, // Placeholder for sentiment analysis result
    upvotes: 0,
    downvotes: 0,
    createdAt: new Date().toISOString(),
  };
  reviews.push(review);
  res.status(201).json({ message: "Review submitted successfully.", review });
});


// Endpoint for upvoting/downvoting a review
router.post("/vote/:id", (req, res) => {
  const { id } = req.params;
  const { voteType } = req.body;

  const review = reviews.find((r) => r.id === parseInt(id));

  if (!review) {
    return res.status(404).json({ message: "Review not found." });
  }

  if (voteType === "upvote") {
    review.upvotes++;
  } else if (voteType === "downvote") {
    review.downvotes++;
  } else {
    return res.status(400).json({ message: "Invalid vote type." });
  }

  res.json({ message: "Vote counted successfully.", review });
});

// Endpoint for fetching all reviews
router.get("/all", (req, res) => {
  const sortedReviews = reviews.sort(
    (a, b) => b.upvotes - b.downvotes - (a.upvotes - a.downvotes)
  );
  res.json(sortedReviews);
});

module.exports = router;
