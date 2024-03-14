import axios from "axios";
import { API_URL } from "../constants.jsx";

const getAllMovies = async () => {
    try {
        const response = await axios.get(`${API_URL}/movies`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const getMovieById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/movies/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const createMovie = async (movie) => {
    try {
        const response = await axios.post(`${API_URL}/movies`, movie);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const updateMovie = async (id, movie) => {
    try {
        const response = await axios.put(`${API_URL}/movies/${id}`, movie);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const deleteMovie = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/movies/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie,
};
