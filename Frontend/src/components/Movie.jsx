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
                // const movie = await movieService.getMovieById(id);
                // setMovie(movie);

                const reviews = await reviewService.getReviewById(id);
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
            <p> {movie?.averageRating}</p>
        </div>
    );
};

export default Movie;
