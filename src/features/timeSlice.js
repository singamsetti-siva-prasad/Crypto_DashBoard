import { createSlice } from "@reduxjs/toolkit";

const initialSelectedTime = {
  selectedTime: "7",
};

export const timeSlice = createSlice({
  name: "selectTime",
  initialState: initialSelectedTime,
  reducers: {
    setTime: (state, action) => {
      state.selectedTime = action.payload;
    },
  },
});

export const { setTime } = timeSlice.actions;
export default timeSlice.reducer;
