const express = require('express');
const cors = require('cors');
const studentControl = require('./Controls/studentControl');
const dbconnection = require('./db'); // Ensure the path is correct


const app = express();

// Middleware setup
app.use(express.json()); // Parses incoming JSON requests
app.use(cors({
    origin: 'https://mern-crud-operation.vercel.app'
}));
// Root route
app.get('/', (req, res) => {
    res.send('I am working');
});

// Student routes
app.use('/student', studentControl);





// Start the server
const PORT = 3000; // Define a constant for the port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
