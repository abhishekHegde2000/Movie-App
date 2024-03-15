// movie-app/backend/connectDb.js
require("dotenv").config();
const MONGO_URL =
    process.env.MONGO_URL || "mongodb://localhost:27017/movie-app";

const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/movie-app");
    } catch (error) {
        console.error("Failed to connect to the database:", error.message);
        process.exit(1);
    }
};

module.exports = connectDb;
