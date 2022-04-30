import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_SARK || "http://localhost:4300";
const LIKES_API = `${API_BASE}/likes`;
export const LikesService = async () => {
    const response = await axios.get(LIKES_API);
    const likes = response.data;
    return likes;
}