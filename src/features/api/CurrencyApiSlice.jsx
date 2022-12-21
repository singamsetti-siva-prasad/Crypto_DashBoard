import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const currencyApi = createApi({
  reducerPath: "currencyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }),
  endpoints: (builder) => ({
    getAllCurrencies: builder.query({
      query: () => "/simple/supported_vs_currencies",
    }),
  }),
});

export const { useGetAllCurrenciesQuery, useGetCurrencyToCoinDataQuery } =
  currencyApi;
