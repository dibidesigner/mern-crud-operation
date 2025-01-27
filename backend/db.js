const mongoose = require('mongoose');
require('dotenv').config()

const db_url = process.env.db_name


// Connect to MongoDB Atlas
mongoose
  .connect(db_url, {
    useNewUrlParser: true, // Enables parsing of connection strings
    useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
  })
  .then(() => {
    console.log("Connected to MongoDB successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

// Export the connection
module.exports = mongoose;
