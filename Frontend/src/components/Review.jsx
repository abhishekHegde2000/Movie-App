import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import reviewService from "../services/reviewService";
import API_URL from "@/constants";

function Review() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [reviewerName, setReviewerName] = useState("");
    const [rating, setRating] = useState("");
    const [comments, setComments] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const review = { reviewerName, rating, comments };
        try {
            await reviewService.createReview(id, review);
            navigate(`/movies/${id}`);
        } catch (error) {
            // handle error (e.g. show error message)
            console.log("Error creating review:", error);
            throw error;
        }
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
            >
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="reviewerName"
                    >
                        Reviewer Name:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="reviewerName"
                        type="text"
                        value={reviewerName}
                        onChange={(e) => setReviewerName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="rating"
                    >
                        Rating:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="rating"
                        type="number"
                        min="1"
                        max="10"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="comments"
                    >
                        Comments:
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="comments"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit Review
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Review;
