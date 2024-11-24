import axios from "axios";
const baseURL = "https://studenv-2mo8x.ondigitalocean.app";

export const registerStudent = async (data: any) => {
  try {
    const response = await axios.post(`${baseURL}/register/university`, data);
    return response;
  } catch (error: any) {
    return error;
  }
};
export const registerGuest = async (data: any) => {
  try {
    const response = await axios.post(`${baseURL}/register`, data);
    return response;
  } catch (error: any) {
    return error;
  }
};
export const registerCompany = async (data: any) => {
  try {
    const response = await axios.post(`${baseURL}/register/company`, data);
    return response;
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
    return response;
  } catch (error: any) {
    return error;
  }
};

export const verifyOtp = async (email: string, otp_code: string) => {
  try {
    const response = await axios.post(`${baseURL}/verify-otp`, null, {
      params: { email, otp_code },
    });
    return response;
  } catch (error: any) {
    return error;
  }
};

export const verifyOtpResend = async (email: string) => {
  try {
    const response = await axios.post(`${baseURL}/verify-otp/resend`, null, {
      params: { email},
    });
    return response;
  } catch (error: any) {
    return null;
  }
};

export const forgotPassword = async (email: string) => {
  try {
    const response = await axios.post(`${baseURL}/forgot-password`, {email:email});
    return response;
  } catch (error: any) {
    return error;
  }
};

export const resetPassword = async (new_password: string, token:string) => {
  try {
    const response = await axios.post(`${baseURL}/reset-password`, {new_password:new_password, token:token});
    return response;
  } catch (error: any) {
    return error;
  }
};
