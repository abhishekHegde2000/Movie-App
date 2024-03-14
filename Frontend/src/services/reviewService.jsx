import axios from "axios";
import { API_URL } from "../constants.jsx";

const getReviewsByMovieId = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/movies/${id}/reviews`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const createReview = async (movieId, review) => {
    try {
        const response = await axios.post(
            `${API_URL}/movies/${movieId}/reviews`,
            review
        );
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const deleteReview = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/reviews/${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default {
    getReviewsByMovieId,
    createReview,
    deleteReview,
};
