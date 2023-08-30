// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const reviewsRoutes = require('./routes/reviews');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/reviews', reviewsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
