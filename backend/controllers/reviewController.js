// const Review = require("../models/Review");

// class ReviewController {
//     async createReview(req, res) {
//         try {
//             const { movieId, reviewerName, rating, comments } = req.body;
//             const review = new Review({
//                 movieId,
//                 reviewerName,
//                 rating,
//                 comments,
//             });
//             await review.save();
//             res.status(201).json(review);
//         } catch (error) {
//             res.status(500).json({ error: "Failed to create review" });
//         }
//     }

//     async getReview(req, res) {
//         try {
//             const { id } = req.params;
//             const review = await Review.findById(id);
//             if (!review) {
//                 return res.status(404).json({ error: "Review not found" });
//             }
//             res.json(review);
//         } catch (error) {
//             res.status(500).json({ error: "Failed to get review" });
//         }
//     }

//     async updateReview(req, res) {
//         try {
//             const { id } = req.params;
//             const { reviewerName, rating, comments } = req.body;
//             const review = await Review.findByIdAndUpdate(
//                 id,
//                 { reviewerName, rating, comments },
//                 { new: true }
//             );
//             if (!review) {
//                 return res.status(404).json({ error: "Review not found" });
//             }
//             res.json(review);
//         } catch (error) {
//             res.status(500).json({ error: "Failed to update review" });
//         }
//     }

//     async deleteReview(req, res) {
//         try {
//             const { id } = req.params;
//             const review = await Review.findByIdAndDelete(id);
//             if (!review) {
//                 return res.status(404).json({ error: "Review not found" });
//             }
//             res.json({ message: "Review deleted successfully" });
//         } catch (error) {
//             res.status(500).json({ error: "Failed to delete review" });
//         }
//     }

//     async searchReviews(req, res) {
//         try {
//             const { search } = req.query;
//             const reviews = await Review.find({
//                 comments: { $regex: search, $options: "i" },
//             });
//             res.json(reviews);
//         } catch (error) {
//             res.status(500).json({ error: "Failed to search reviews" });
//         }
//     }
// }

// module.exports = new ReviewController();
