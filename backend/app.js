const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const corsMiddleware = require('./midleware/auth');

dotenv.config();

const app = express();
const PORT = process.env.PORT ;
const MONGO_URL = process.env.MONGO_URL;

app.use(corsMiddleware);
app.use(express.json());

(async () => {
  try {
    await mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
  }
})();

app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
