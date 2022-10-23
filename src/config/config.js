import { API_KEY, BASE_URL, IMG } from "./api";

export const TRENDING = (trendingType) => `${BASE_URL}/trending/${trendingType}/day?api_key=${API_KEY}`;
export const POSTER = `${IMG}`;
export const MOVIE = (ID) => `${BASE_URL}/movie/${ID}?api_key=${API_KEY}&language=en-US`;
export const VIDEOAPI = (key) => `${BASE_URL}/movie/${key}/videos?api_key=${API_KEY}&language=en-US`;