import axios from "axios";
const apiURL = "https://studenv-2mo8x.ondigitalocean.app/";

export const apiConfig = {
  baseUrl: `${apiURL}`,
  imagePath: `https://cdn.studentv.com/`,
  mainUrl: "https://studentv.com",
};

export const api = axios.create({
  baseURL: apiConfig.baseUrl,
});

export const fileUpload = axios.create({
  baseURL: `${apiURL}`,
});
