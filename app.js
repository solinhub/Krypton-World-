require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const redisClient = require('./config/redis');
const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes');

const app = express();
const PORT = process.env.PORT || 3002;

// Connect to MongoDB
connectDB();


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/files', fileRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to KryptoniteApp');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});