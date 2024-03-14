// movie-app/backend/connectDb.js

const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost/movie-app");
        console.log("Connected to the database");
    } catch (error) {
        console.error("Failed to connect to the database:", error.message);
        process.exit(1);
    }
};

module.exports = connectDb;
