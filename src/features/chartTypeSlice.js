import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedChartType: "LineChart",
};

export const chartTypeSlice = createSlice({
  name: "selectChartType",
  initialState,
  reducers: {
    setChartType: (state, action) => {
      state.selectedChartType = action.payload;
    },
  },
});

export const { setChartType } = chartTypeSlice.actions;
export default chartTypeSlice.reducer;
