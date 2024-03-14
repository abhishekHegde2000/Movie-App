const Review = require("../models/Review");

const createReview = async (req, res) => {
    try {
        const { movieId, reviewerName, rating, comments } = req.body;
        const review = new Review({
            movieId,
            reviewerName,
            rating,
            comments,
        });
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ error: "Failed to create review" });
    }
};

const getReview = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findById(id);
        if (!review) {
            return res.status(404).json({ error: "Review not found" });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: "Failed to get review" });
    }
};

const updateReview = async (req, res) => {
    try {
        const { id } = req.params;
        const { reviewerName, rating, comments } = req.body;
        const review = await Review.findByIdAndUpdate(
            id,
            { reviewerName, rating, comments },
            { new: true }
        );
        if (!review) {
            return res.status(404).json({ error: "Review not found" });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: "Failed to update review" });
    }
};

const deleteReview = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findByIdAndDelete(id);
        if (!review) {
            return res.status(404).json({ error: "Review not found" });
        }
        res.json({
            message: `User: ${review.reviewerName}'s review got deleted`,
        });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete review" });
    }
};

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: "Failed to get reviews" });
    }
};

getReviewById = async (req, res) => {
    try {
        const { id } = req.params;
        const review = await Review.findById(id);
        if (!review) {
            return res.status(404).json({ error: "Review not found" });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: "Failed to get review" });
    }
};

const getReviewsByMovieId = async (req, res) => {
    try {
        const { movieId } = req.params;
        const reviews = await Review.find({ movieId: movieId });
        if (!reviews.length) {
            return res.json([]);
        }
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: "Failed to get reviews" });
    }
};

module.exports = {
    createReview,
    getReview,
    updateReview,
    deleteReview,
    getAllReviews,
    getReviewById,
    getReviewsByMovieId,
};
