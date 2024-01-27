import axios from "axios";
import { BASE_URL } from "../lib/constant";
export const GetAllBook = (endPoint) => {
  return axios
    .get(`${BASE_URL}/api/${endPoint}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};
