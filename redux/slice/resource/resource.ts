import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://studenv-2mo8x.ondigitalocean.app/resources/";

export const getResourceData = createAsyncThunk("resouce/getResourceData", async () => {
  const response = await axios.get(baseURL);
  return response.data;
});

// export const getResourceDataById = createAsyncThunk(
//   "resource/getResourceDataById",
//   async (id: string) => {
//     const response = await axios.get(`${baseURL}/${id}`);
//     return response.data;
//   }
// );

// export const delResourceData = createAsyncThunk(
//   "resource/delResourceData",
//   async (id: string) => {
//     const response = await axios.delete(`${baseURL}/${id}`);
//     return response.data;
//   }
// );

// export const putResourceData = createAsyncThunk(
//   "resource/putResourceData",
//   async ({ id, newp }: { id: string; newp: Partial<Resource> }) => {
//     const response = await axios.put(`${baseURL}/${id}`, newp);
//     return response.data;
//   }
// );

export const postResourceData = createAsyncThunk(
  "resource/postResourceData",
  async (newp: Partial<Resource>) => {
    const response = await axios.post(baseURL, newp);
    return response.data;
  }
);

export interface Resource {
  title: string;
  description: string;
  file_url: string;
  resource_id: string;
  date_of_created: string;
}

export interface resourceState {
  resource: Resource;
  resources: Resource[];
  loading: boolean;
}
const initialState: resourceState = {
    resource: {
    title: "",
    description: "",
    file_url: "",
    resource_id: "",
    date_of_created: "",
  },
  resources: [],
  loading: false,
};

export const resourceSlice = createSlice({
  name: "resource",
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<string>) => {
    //   state.name += action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getResourceData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getResourceData.fulfilled,
        (state, action: PayloadAction<Resource[]>) => {
          state.resources = action.payload;
          state.loading = false;
        }
      )
      .addCase(getResourceData.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(postResourceData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        postResourceData.fulfilled,
        (state, action: PayloadAction<Resource>) => {
          state.resources.push(action.payload);
          state.loading = false;
        }
      )
      .addCase(postResourceData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {} = resourceSlice.actions;

export default resourceSlice.reducer;
