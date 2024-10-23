import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://127.0.0.1:8000/communities/";

export const getComData = createAsyncThunk("com/getComData", async () => {
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

export const postComData = createAsyncThunk(
  "com/postComData",
  async (newp: Partial<Com>) => {
    const response = await axios.post(baseURL, newp);
    return response.data;
  }
);

export interface Com {
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

export interface comState {
  com: Com;
  coms: Com[];
  loading: boolean;
}
const initialState: comState = {
  com: {
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
  coms: [],
  loading: false,
};

export const comSlice = createSlice({
  name: "com",
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<string>) => {
    //   state.name += action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getComData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getComData.fulfilled,
        (state, action: PayloadAction<Com[]>) => {
          state.coms = action.payload;
          state.loading = false;
        }
      )
      .addCase(getComData.rejected, (state) => {
        state.loading = false;
      });

      builder
      .addCase(postComData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        postComData.fulfilled,
        (state, action: PayloadAction<Com>) => {
          state.coms.push(action.payload);
          state.loading = false;
        }
      )
      .addCase(postComData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {} = comSlice.actions;

export default comSlice.reducer;
