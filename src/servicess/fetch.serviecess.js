import axios from "axios"
import { TRENDING } from "../config/config"

export const fetchTrending = () => {
  const response = axios.get(TRENDING)
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      return error;
    });

  return response;
}