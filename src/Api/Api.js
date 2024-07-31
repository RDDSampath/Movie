import axios from "axios";

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTNmMGRmMDRlMWE3MTBiZmYyNDE0YjJjNjk5ZGI5NSIsInN1YiI6IjY0ZmJmYzc4ZWZlYTdhMDBmZDE5NGQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjITkPseRhTMClOK1gPcW1AfAK7LGcbDQXbuv-n0FO8';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org',
    headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
    },
});

const getMovie = async () => {
    try {
        const response = await api.get('/3/discover/movie');
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const getTv = async () => {
    try {
        const response = await api.get('/3/discover/tv');
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default {
    getMovie,
    getTv,
};
