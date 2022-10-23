import axios from "axios"
import { MOVIE, TRENDING, VIDEOAPI } from "../config/config"

export const fetchTrending = (trendingType) => {
  const response = axios.get(TRENDING(trendingType))
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      return error;
    });

  return response;
}

export const fetchMovie = (id) => {
  const response = axios.get(MOVIE(id))
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  return response;
}

export const fetchVideo = (key) => {
  const response = axios.get(VIDEOAPI(key))
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    })
  return response;
}