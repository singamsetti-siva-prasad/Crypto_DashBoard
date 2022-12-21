import { createSlice } from "@reduxjs/toolkit";

const initialSelectedCryptoCurrency = {
  selectedcryptoCurrency: "bitcoin",
};

export const cryptoCurrencyDropDownSlice = createSlice({
  name: "selectCryptoCurrency",
  initialState: initialSelectedCryptoCurrency,
  reducers: {
    setCryptoCurrency: (state, action) => {
      state.selectedcryptoCurrency = action.payload;
    },
  },
});

export const { setCryptoCurrency } = cryptoCurrencyDropDownSlice.actions;
export default cryptoCurrencyDropDownSlice.reducer;
