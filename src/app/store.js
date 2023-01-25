import { configureStore } from "@reduxjs/toolkit";
import { coinApi } from "../features/api/coinApiSlice";
import { currencyApi } from "../features/api/CurrencyApiSlice";
import { marketDataApi } from "../features/api/marketDataApiSlice";
import currencyDropDownReducer from "../features/currencyDropDownSlice";
import cryptoCurrencyDropDownReducer from "../features/cryptoCurrencyDropDownSlice";
import timeReducer from "../features/timeSlice";
import exchangeCurrencyDropDownReducer from "../features/exchangeCurrenciesSlice";
import chartTypeSliceReducer from "../features/chartTypeSlice";

//configure store
export const store = configureStore({
  //reducers
  reducer: {
    [coinApi.reducerPath]: coinApi.reducer,
    [currencyApi.reducerPath]: currencyApi.reducer,
    [marketDataApi.reducerPath]: marketDataApi.reducer,
    selectCurrency: currencyDropDownReducer,
    selectCryptoCurrency: cryptoCurrencyDropDownReducer,
    selectTime: timeReducer,
    exchangeCurrency: exchangeCurrencyDropDownReducer,
    selectChartType: chartTypeSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(coinApi.middleware)
      .concat(currencyApi.middleware)
      .concat(marketDataApi.middleware),
});
