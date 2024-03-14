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

export default {
    getReviewsByMovieId,
};
