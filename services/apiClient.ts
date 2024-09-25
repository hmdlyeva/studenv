import { AxiosRequestConfig } from "axios";
import axiosInstance from "./axiosInstance";

class APIClient {
  // get in touch
  getArticleBySlug = async <G>(slug: string) => {
    return await axiosInstance
      .get<G>(`/article/${slug}`)
      .then((response) => response.data);
  };

  getArticles = async <G>(config: AxiosRequestConfig) => {
    return await axiosInstance
      .get<G>("/article", config)
      .then((response) => response.data);
  };

  createConsultationRequest = async <G, P>(form: P) => {
    return await axiosInstance
      .post<G>("/consultation-request/get-time", form)
      .then((response) => response.data);
  };

  // upload file or images

  uploadFile = async <G, P>(file: P, config: AxiosRequestConfig) => {
    return await axiosInstance
      .post<G>("/file/upload", file, config)
      .then((response) => response.data);
  };

}

export default APIClient;
