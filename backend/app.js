const express = require('express');
const cors = require('cors');
const studentControl = require('./Controls/studentControl');
const dbconnection = require('./db'); // Ensure the path is correct
const webserviceModel = require('./Models/studentModel')
const userModel = require('./Models/userModel/userModel')
const userReg = require('./Router/userRouter')


const app = express();

// Middleware setup
app.use(express.json()); // Parses incoming JSON requests
app.use(cors({
    
}));
// Root route
app.get('/', (req, res) => {
    res.send('I am working');
});

// Student routes
app.use('/student', studentControl);
app.use('/user', userReg);





// Start the server
const PORT = process.env.port // Define a constant for the port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
