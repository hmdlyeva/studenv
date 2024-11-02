import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://studenv-2mo8x.ondigitalocean.app/companies/";

export const getCompanyData = createAsyncThunk("company/getCompanyData", async () => {
  const response = await axios.get(baseURL);
  return response.data;
});

export const getCompanyDataById = createAsyncThunk(
  "company/getCompanyDataById",
  async (id: string) => {
    console.log("hey")
    const response = await axios.get(`${baseURL}${id}`);
    return response.data;
  }
);

// export const delCompanyData = createAsyncThunk(
//   "company/delCompanyData",
//   async (id: string) => {
//     const response = await axios.delete(`${baseURL}/${id}`);
//     return response.data;
//   }
// );

// export const putCompanyData = createAsyncThunk(
//   "company/putCompanyData",
//   async ({ id, newp }: { id: string; newp: Partial<Company> }) => {
//     const response = await axios.put(`${baseURL}/${id}`, newp);
//     return response.data;
//   }
// );

export const postCompanyData = createAsyncThunk(
  "company/postCompanyData",
  async (newp: Partial<Company>) => {
    const response = await axios.post(baseURL, newp);
    return response.data;
  }
);

export interface Company {
  company_name: string;
  industry:string;
  description: string;
  company_id: string;
  user_id: string;
  date_of_created: string;
}

export interface companyState {
  company: Company;
  companies: Company[];
  loading: boolean;
}
const initialState: companyState = {
  company: {
    company_name: "",
    industry: "",
    description: "",
    company_id: "",
    user_id: "",
    date_of_created: "",
  },
  companies: [],
  loading: false,
};

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<string>) => {
    //   state.name += action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCompanyData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getCompanyData.fulfilled,
        (state, action: PayloadAction<Company[]>) => {
          state.companies = action.payload;
          state.loading = false;
        }
      )
      .addCase(getCompanyData.rejected, (state) => {
        state.loading = false;
      });

      builder
      .addCase(getCompanyDataById.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getCompanyDataById.fulfilled,
        (state, action: PayloadAction<Company>) => {
          state.company = action.payload;
          state.loading = false;
        }
      )
      .addCase(getCompanyDataById.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(postCompanyData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        postCompanyData.fulfilled,
        (state, action: PayloadAction<Company>) => {
          state.companies.push(action.payload);
          state.loading = false;
        }
      )
      .addCase(postCompanyData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {} = companySlice.actions;

export default companySlice.reducer;
