import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList.jsx";
import Movie from "./components/Movie";
import ReviewList from "./components/ReviewList";
import Review from "./components/Review";

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
            </Routes>
        </Router>
    );
}

export default App;
