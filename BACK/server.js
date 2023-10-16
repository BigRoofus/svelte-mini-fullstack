const express = require('express');
const app = express();
const port = 3000;
const response = 'Hi from the backend!';

// Handle CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Replace * to limit to specific urls
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Define route
app.get('/api/test', async (req, res) => {
    try {
        // Normally, we would do backend stuff here like querying a database. However,
        // since this is supposed to be a very minimal app, we are simply sending the
        // string we defined at the top.
        res.send(response);
    } catch (error) {
        res.status(500).json({
            error: "Failed to fetch data",
            details: error.message,
        });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});