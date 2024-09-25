import axios from "axios";
const apiURL = "https://api.studentv.com/api";

export const apiConfig = {
  baseUrl: `${apiURL}/web/`,
  imagePath: `https://cdn.studentv.com/`,
  mainUrl: "https://studentv.com",
};

export const api = axios.create({
  baseURL: apiConfig.baseUrl,
});

export const fileUpload = axios.create({
  baseURL: `${apiURL}/web/`,
});
