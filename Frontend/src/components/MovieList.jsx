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
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-center">Movie List</h1>
                <Link to="/add-movie">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Add Movie
                    </button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {movies.map((movie) => (
                    <div
                        key={movie._id}
                        className="bg-white rounded-lg overflow-hidden shadow-lg"
                    >
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2">
                                <Link
                                    to={`/movies/${movie._id}`}
                                    className="hover:underline"
                                >
                                    {movie.name}
                                </Link>
                            </h2>
                            <div className="flex justify-between items-center">
                                <button
                                    onClick={() => deleteMovie(movie._id)}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
