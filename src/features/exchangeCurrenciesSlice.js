import { createSlice } from "@reduxjs/toolkit";

const initialSelectedCurrency = {
  buyCurrency: "",
  sellCurrency: "",
};

export const exchangeDropDownSlice = createSlice({
  name: "exchangeCurrency",
  initialState: initialSelectedCurrency,
  reducers: {
    setBuyCurrency: (state, action) => {
      state.buyCurrency = action.payload;
    },
    setSellCurrency: (state, action) => {
      state.sellCurrency = action.payload;
    },
  },
});

export const { setBuyCurrency, setSellCurrency } =
  exchangeDropDownSlice.actions;
export default exchangeDropDownSlice.reducer;
