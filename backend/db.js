const mongoose = require('mongoose');

const uri = `mongodb+srv://dibihembramaashdit:9asU5mgrt0hv8Uy9@mernportfolio.v1stu.mongodb.net/?retryWrites=true&w=majority`;

// Connect to MongoDB Atlas
mongoose
  .connect(uri, {
    useNewUrlParser: true, // Enables parsing of connection strings
    useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

// Export the connection
module.exports = mongoose;
