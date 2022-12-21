import { createSlice } from "@reduxjs/toolkit";

const initialSelectedCurrency = {
  selectedCurrency: "usd",
};

export const currencyDropDownSlice = createSlice({
  name: "selectCurrency",
  initialState: initialSelectedCurrency,
  reducers: {
    setCurrency: (state, action) => {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { setCurrency } = currencyDropDownSlice.actions;
export default currencyDropDownSlice.reducer;
