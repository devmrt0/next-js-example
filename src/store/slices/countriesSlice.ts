import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CountryDataService from "../../services/CountriesService";
import Country from "../../model/Country";
import { RootState } from '../store'




type initialStateType = {
    countryList: Country[];
};

const countryList: Country[] = [];

const initialState: initialStateType = {
    countryList,
};


export const retrieveCountry = createAsyncThunk(
  "all",
  async () => {
    const res = await CountryDataService.getAll();
    return res.data;
  }
);



const countrySlice = createSlice({
    name: "country",
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
          .addCase(retrieveCountry.fulfilled, (state, action) => {
              state.countryList = action.payload
          })
         
      },
});

export const selectCountries = (state: RootState) => state.country.countryList

const { reducer } = countrySlice;
export default reducer;