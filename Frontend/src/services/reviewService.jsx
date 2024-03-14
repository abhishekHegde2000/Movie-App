import axios from "axios";
import { API_URL } from "../constants.jsx";

const getReviewById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/reviews/${id}`);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default {
    getReviewById,
};
