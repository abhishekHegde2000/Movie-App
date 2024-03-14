const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
const reviewController = require("../controllers/reviewController");

// Routes for movies
router.get("/", movieController.getAllMovies);
router.get("/:id", movieController.getMovieById);
router.post("/", movieController.createMovie);
router.put("/:id", movieController.updateMovie);
router.delete("/:id", movieController.deleteMovie);
router.get("/:movieId/reviews", reviewController.getReviewsByMovieId);
router.post("/:movieId/reviews", reviewController.createReview);

module.exports = router;
