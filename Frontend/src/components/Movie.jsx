import { useParams } from "react-router-dom";
import movieService from "../services/movieService";
import reviewService from "../services/reviewService";
import { useEffect, useState } from "react";

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

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">{movie?.name}</h1>
            <p className="text-xl">{movie?.releaseDate}</p>
            <p>{movie?.averageRating}</p>
            <div className="mt-8">
                {reviews &&
                    reviews.length > 0 &&
                    reviews.map((review) => (
                        <div
                            key={review?._id}
                            className="bg-white rounded overflow-hidden shadow-lg p-4 mb-4"
                        >
                            <h2 className="font-bold text-lg mb-2">
                                {review?.reviewerName}
                            </h2>
                            <p>Rating: {review.rating}</p>
                            <p>{review?.comments}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Movie;
