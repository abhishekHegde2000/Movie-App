import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieService from "../services/movieService";

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await MovieService.getAllMovies();

            setMovies(response);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    const deleteMovie = async (id) => {
        try {
            await MovieService.deleteMovie(id);
            setMovies(movies.filter((movie) => movie._id !== id));
        } catch (error) {
            console.error("Error deleting movie:", error);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Movie List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {movies.map((movie) => (
                    <div
                        key={movie._id}
                        className="bg-white rounded overflow-hidden shadow-lg"
                    >
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">
                                <Link
                                    to={`/movies/${movie._id}`}
                                    className="hover:text-blue-500"
                                >
                                    {movie.name}
                                </Link>
                            </div>
                            <button
                                onClick={() => deleteMovie(movie._id)}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
