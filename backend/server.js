const express = require("express");

// const movieRoutes = require("./routes/movieRoutes");
// const reviewRoutes = require("./routes/reviewRoutes");
const connectDb = require("./connectDb.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to the database
connectDb();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use("/movies", movieRoutes);
// app.use("/reviews", reviewRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
