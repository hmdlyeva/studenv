import axios from "axios";
const baseURL = "http://127.0.0.1:8000";

export const register = async (data: any) => {
    try {
      const response = await axios.post(`${baseURL}/register`, data);
      console.log(response.data)
      return response.data;
    } catch (error: any) {
      return error;
    }
  };
export const login = async (data: any) => {
  try {
    const response = await axios.post(`${baseURL}/login`, data);
    return response.data;
  } catch (error: any) {
    return null;
  }
};


export const verifyOtp = async (email: string, otp_code: string) => {
  try {
      const response = await axios.post(`${baseURL}/verify-otp`, null, {
          params: { email, otp_code }
      });
      return response.data;
  } catch (error: any) {
      return null;
  }
};