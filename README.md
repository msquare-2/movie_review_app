# Movie Review Web Application

Welcome to the Movie Review Web Application! This application allows users to submit movie reviews, perform sentiment analysis on the reviews, and engage in upvoting and downvoting of reviews.

## Limitation

- The application currently relies on placeholder sentiment analysis data from a JSON file, which limits the accuracy of sentiment classification and doesn't reflect real-time sentiment changes.

## Future Features

- Given more time, I would implement user authentication to allow users to have individual profiles, track their own reviews, and prevent abuse of the upvote/downvote system.
- Additionally, I would explore integrating a more advanced sentiment analysis service for accurate and dynamic sentiment analysis.


## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Adding a Review](#adding-a-review)
  - [Analyzing Sentiment](#analyzing-sentiment)
  - [Voting on Reviews](#voting-on-reviews)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Submit movie reviews.
- Perform sentiment analysis on reviews using AI/ML tools.
- Upvote or downvote reviews.

## Getting Started

### Prerequisites

- Node.js (v12 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/msquare-2/movie_review_app.git
   ```
   ```bash
   npm run install-app
   ```
   ```bash
   npm run start
   ```

## Usage

### Adding a Review

1. Open your web browser and navigate to http://localhost:3000 (or as specified in your frontend configuration).
2. Enter your movie review in the provided textarea.
3. Click the "Submit Review" button.

### Analyzing Sentiment

After submitting a review, you will see the sentiment analysis result displayed as "Positive," "Negative," or "Neutral."

### Voting on Reviews

Each review displays the number of upvotes and downvotes.

- Click the "Upvote" button to upvote a review.
- Click the "Downvote" button to downvote a review.

## Technologies Used

- React
- Node.js
- Express
- Cohere AI (for sentiment analysis)
- Bootstrap (for styling)

## Contributing

Contributions are welcome! If you find any issues or want to enhance the application, please submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
