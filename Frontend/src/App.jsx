import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList.jsx";
import Movie from "./components/Movie";
import ReviewList from "./components/ReviewList";
import Review from "./components/Review";
import AddMovie from "./components/AddMovie.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<MovieList />} />
                <Route exact path="/movies/:id" element={<Movie />} />
                <Route
                    exact
                    path="/movies/:id/reviews"
                    element={<ReviewList />}
                />
                <Route
                    exact
                    path="/movies/:id/reviews/:reviewId"
                    element={<Review />}
                />
                <Route path="/add-movie" element={<AddMovie />} />
                <Route path="/movies/:id/reviews/add" element={<Review />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </Router>
    );
}

export default App;
