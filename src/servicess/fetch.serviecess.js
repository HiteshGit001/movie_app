import axios from "axios"
import { MOVIE, SEARCH, SIMILAR, TRENDING, TV, VIDEOAPI } from "../config/config"

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

export const fetchTV = (id) => {
  const response = axios.get(TV(id))
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    })
  return response;
}

export const fetchSearch = (name) => {
  const response = axios.get(SEARCH(name))
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    })
  return response;
}

export const fetchSimilar = (key) => {
  const response = axios.get(SIMILAR(key))
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    })
  return response;
}