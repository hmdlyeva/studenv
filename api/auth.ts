import axios from "axios";
const baseURL = "https://studenv-2mo8x.ondigitalocean.app";

export const registerStudent = async (data: any) => {
  try {
    const response = await axios.post(`${baseURL}/register/university`, data);
    return response.data;
  } catch (error: any) {
    return error;
  }
};
export const registerGuest = async (data: any) => {
  try {
    const response = await axios.post(`${baseURL}/register`, data);
    return response.data;
  } catch (error: any) {
    return error;
  }
};
export const registerCompany = async (data: any) => {
  try {
    const response = await axios.post(`${baseURL}/register/company`, data);
    return response.data;
  } catch (error: any) {
    return error;
  }
};
export const login = async (data: any) => {
  try {
    const response = await axios.post(`${baseURL}/token`, data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data;
  } catch (error: any) {
    return null;
  }
};

export const verifyOtp = async (email: string, otp_code: string) => {
  try {
    const response = await axios.post(`${baseURL}/verify-otp`, null, {
      params: { email, otp_code },
    });
    return response.data;
  } catch (error: any) {
    return null;
  }
};
