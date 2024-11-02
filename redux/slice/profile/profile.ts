import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://studenv-2mo8x.ondigitalocean.app/profiles/";

export const getPrflData = createAsyncThunk("prfl/getPrflData", async () => {
  const response = await axios.get(baseURL);
  return response.data;
});

export const getPrflDataById = createAsyncThunk(
  "prfl/getPrflDataById",
  async (id: string) => {
    const response = await axios.get(`${baseURL}${id}`);
    return response.data;
  }
);

// export const delLocData = createAsyncThunk(
//   "locations/delLocData",
//   async (id: number) => {
//     const response = await axios.delete(`${baseURL}${id}`);
//     return response.data;
//   }
// );

// export const putLocData = createAsyncThunk(
//   "locations/putLocData",
//   async ({ id, newp }: { id: number; newp: Partial<Location> }) => {
//     const response = await axios.put(`${baseURL}${id}`, newp);
//     return response.data;
//   }
// );

export const postPrflData = createAsyncThunk(
  "prfl/postPrflData",
  async (newp: Partial<Prfl>) => {
    const response = await axios.post(baseURL, newp);
    return response.data;
  }
);

export interface Prfl {
  sex: string;
  study_language: string;
  job_status: string;
  university: string;
  major: string;
  year_of_study: string;
  date_of_birth: string;
  bio: string;
  score: 0;
  phone_number: string;
  profile_photo: string;
  cv_url: string;
  address: string;
  social_links: string;
  profile_id: string;
  user_id: string;
}

export interface prflState {
  prfl: Prfl;
  prfls: Prfl[];
  loading: boolean;
}
const initialState: prflState = {
  prfl: {
    sex: "",
    study_language: "",
    job_status: "",
    university: "",
    major: "",
    year_of_study: "",
    date_of_birth: "",
    bio: "",
    score: 0,
    phone_number: "",
    profile_photo: "",
    cv_url: "",
    address: "",
    social_links: "",
    profile_id: "",
    user_id: "",
  },
  prfls: [],
  loading: false,
};

export const prflSlice = createSlice({
  name: "prfl",
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<string>) => {
    //   state.name += action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPrflData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getPrflData.fulfilled,
        (state, action: PayloadAction<Prfl[]>) => {
          state.prfls = action.payload;
          state.loading = false;
        }
      )
      .addCase(getPrflData.rejected, (state) => {
        state.loading = false;
      });

      builder
      .addCase(getPrflDataById.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getPrflDataById.fulfilled,
        (state, action: PayloadAction<Prfl>) => {
          state.prfl = action.payload;
          state.loading = false;
        }
      )
      .addCase(getPrflDataById.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(postPrflData.pending, (state) => {
        state.loading = true;
      })
      .addCase(postPrflData.fulfilled, (state, action: PayloadAction<Prfl>) => {
        state.prfls.push(action.payload);
        state.loading = false;
      })
      .addCase(postPrflData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {} = prflSlice.actions;

export default prflSlice.reducer;
