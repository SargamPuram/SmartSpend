const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const app = express();
const transactionRoutes = require('./routes/transactions');

require('dotenv').config();
const PORT = process.env.PORT || 5000; 

// Middlewares
app.use(express.json()); // We want our data to be in JSON
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true
}));

// Routes
app.use('/api/v1', transactionRoutes);

db();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
