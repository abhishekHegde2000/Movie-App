import { useParams } from "react-router-dom";
import movieService from "../services/movieService";
import reviewService from "../services/reviewService";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchMovieAndReviews = async () => {
            try {
                const movie = await movieService.getMovieById(id);
                setMovie(movie);
                const reviews = await reviewService.getReviewsByMovieId(id);
                console.log(reviews);
                setReviews(reviews);
            } catch (error) {
                console.error("Error fetching movie or reviews:", error);
            }
        };
        fetchMovieAndReviews();
    }, [id]);

    const handleDelete = async (review_id) => {
        try {
            await reviewService.deleteReview(review_id);
            const reviews = await reviewService.getReviewsByMovieId(id);
            setReviews(reviews);
        } catch (error) {
            console.error("Error deleting review:", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 w-full max-w-md p-8">
                <h1 className="text-4xl font-bold mb-4">{movie?.name}</h1>
                <p className="mb-4">
                    Release Date:{" "}
                    {new Date(movie?.releaseDate).toLocaleDateString() || "N/A"}
                </p>
                {/* <p className="mb-4">
                    Average Rating: {movie?.averageRating || 8}
                </p> */}
                <Link
                    to={`/movies/${id}/reviews/add`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 mb-4"
                >
                    Add Review
                </Link>
                <div>
                    {reviews &&
                        reviews.length > 0 &&
                        reviews.map((review) => (
                            <div
                                key={review?._id}
                                className="border-t border-gray-200 pt-4"
                            >
                                <h2 className="text-2xl font-bold mb-2">
                                    {review?.reviewerName}
                                </h2>
                                <p className="mb-2">Rating: {review.rating}</p>
                                <p className="mb-2">{review?.comments}</p>
                                <button
                                    onClick={() => handleDelete(review._id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Movie;
