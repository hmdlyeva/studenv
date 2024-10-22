import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://127.0.0.1:8000/discussions/";

export const getDisData = createAsyncThunk("dis/getDisData", async () => {
  const response = await axios.get(baseURL);
  return response.data;
});

// export const getLocDataById = createAsyncThunk(
//   "locations/getLocDataById",
//   async (id: number) => {
//     const response = await axios.get(`${baseURL}/${id}`);
//     return response.data;
//   }
// );

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

export interface Dis {
  topic: string;
  content: string;
  tag: string;
  discussion_score: number;
  question: boolean;
  answered: boolean;
  discussion_id: string;
  user_id: string;
  date_of_created: string;
}

export interface disState {
  dis: Dis;
  diss: Dis[];
  loading: boolean;
}
const initialState: disState = {
  dis: {
    topic: "",
    content: "",
    tag: "",
    discussion_score: 0,
    question: false,
    answered: false,
    discussion_id: "",
    user_id: "",
    date_of_created: "",
  },
  diss: [],
  loading: false,
};

export const disSlice = createSlice({
  name: "dis",
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<string>) => {
    //   state.name += action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getDisData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getDisData.fulfilled,
        (state, action: PayloadAction<Dis[]>) => {
          state.diss = action.payload;
          state.loading = false;
        }
      )
      .addCase(getDisData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {} = disSlice.actions;

export default disSlice.reducer;
