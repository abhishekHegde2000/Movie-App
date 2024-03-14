const Movie = require("../models/Movie");
const Review = require("../models/Review");

// Get all movies
const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Create a new movie
const createMovie = async (req, res) => {
    const { name, releaseDate } = req.body;
    try {
        const movie = new Movie({ name, releaseDate });
        await movie.save();
        res.status(201).json(movie);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Update a movie by ID
const updateMovie = async (req, res) => {
    const { id } = req.params;
    const { name, releaseDate } = req.body;
    try {
        const movie = await Movie.findByIdAndUpdate(
            id,
            { name, releaseDate },
            { new: true }
        );
        if (!movie) {
            return res.status(404).json({ error: "Movie not found" });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const deleteMovie = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await Movie.findByIdAndDelete(id);
        if (!movie) {
            return res.status(404).json({ error: "Movie not found" });
        }

        // Delete associated reviews before deleting the movie (pre-deletion hook)
        await Review.deleteMany({ movieId: id });

        res.json({ message: `Movie: ${movie.name} deleted successfully` });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// Get a movie by ID
const getMovieById = async (req, res) => {
    const { id } = req.params;
    try {
        const movie = await Movie.findById(id);
        if (!movie) {
            return res.status(404).json({ error: "Movie not found" });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
};
