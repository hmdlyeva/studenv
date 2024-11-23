import axios from "axios";
const apiURL = "https://studenv-2mo8x.ondigitalocean.app/";

export const apiConfig = {
  baseUrl: `${apiURL}`,
  imagePath: `https://cdn.studenv.com/`,
  mainUrl: "https://studenv.com",
};

export const api = axios.create({
  baseURL: apiConfig.baseUrl,
});

export const fileUpload = axios.create({
  baseURL: `${apiURL}`,
});
