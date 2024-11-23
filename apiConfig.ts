import axios from "axios";
const apiURL = "https://studenv.online/api/";

export const apiConfig = {
  baseUrl: `${apiURL}`,
  imagePath: `https://cdn.studenv.com/`,
  mainUrl: "https://studenv.online",
};

export const api = axios.create({
  baseURL: apiConfig.baseUrl,
});

export const fileUpload = axios.create({
  baseURL: `${apiURL}`,
});
