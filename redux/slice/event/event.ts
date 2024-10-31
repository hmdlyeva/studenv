import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://studenv-2mo8x.ondigitalocean.app/events/";

export const getEventData = createAsyncThunk("event/getEventData", async () => {
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

export const postEventData = createAsyncThunk(
  "event/postEventData",
  async (newp: Partial<Event>) => {
    const response = await axios.post(baseURL, newp);
    return response.data;
  }
);

export interface Event {
  title: string;
  description: string;
  type: string;
  location: string;
  event_id: string;
  user_id: string;
  date_of_created: string;
}

export interface disState {
  event: Event;
  events: Event[];
  loading: boolean;
}
const initialState: disState = {
  event: {
    title: "",
    description: "",
    type: "",
    location: "",
    event_id: "",
    user_id: "",
    date_of_created: "",
  },
  events: [],
  loading: false,
};

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<string>) => {
    //   state.name += action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getEventData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getEventData.fulfilled,
        (state, action: PayloadAction<Event[]>) => {
          state.events = action.payload;
          state.loading = false;
        }
      )
      .addCase(getEventData.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(postEventData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        postEventData.fulfilled,
        (state, action: PayloadAction<Event>) => {
          state.events.push(action.payload);
          state.loading = false;
        }
      )
      .addCase(postEventData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {} = eventSlice.actions;

export default eventSlice.reducer;
