import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://studenv-2mo8x.ondigitalocean.app/users/";

export const getUserData = createAsyncThunk("users/getUserData", async () => {
  const response = await axios.get(baseURL);
  return response.data;
});

export const getUserDataById = createAsyncThunk(
  "users/getUserDataById",
  async (user_id: string) => {
    const response = await axios.get(`${baseURL}${user_id}`);
    return response.data;
  }
);

// export const delLocData = createAsyncThunk(
//   "locations/delLocData",
//   async (id: number) => {
//     const response = await axios.delete(`${baseURL}/${id}`);
//     return response.data;
//   }
// );

// export const putLocData = createAsyncThunk(
//   "locations/putLocData",
//   async ({ id, newp }: { id: number; newp: Partial<Location> }) => {
//     const response = await axios.put(`${baseURL}/${id}`, newp);
//     return response.data;
//   }
// );

// export const postLocData = createAsyncThunk(
//   "locations/postLocData",
//   async (newp: Partial<Location>) => {
//     const response = await axios.post(baseURL, newp);
//     return response.data;
//   }
// );

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  user_id: string;
  date_of_created: string;
  is_verified: boolean;
  otp_code: string;
  otp_expiry: string;
}

export interface userState {
  user: User;
  users: User[];
  loading: boolean;
}
const initialState: userState = {
  user: {
    id: "",
    name: "",
    email: "",
    role: "",
    user_id: "",
    date_of_created: "",
    is_verified: false,
    otp_code: "",
    otp_expiry: "",
  },
  users: [],
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<string>) => {
    //   state.name += action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUserData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getUserData.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.users = action.payload;
          state.loading = false;
        }
      )
      .addCase(getUserData.rejected, (state) => {
        state.loading = false;
      });

      builder
      .addCase(getUserDataById.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getUserDataById.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.user = action.payload;
          state.loading = false;
        }
      )
      .addCase(getUserDataById.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
