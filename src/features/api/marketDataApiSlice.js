import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const marketDataApi = createApi({
  name: "marketDataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }),
  endpoints: (builder) => ({
    getMarketData: builder.query({
      query: (args) => {
        const { coin, currency, time } = args;
        return {
          url: `/coins/${coin}/market_chart?vs_currency=${currency}&days=${time}&interval`,
        };
      },
    }),
    getExchangeData: builder.query({
      query: () => `/exchange_rates`,
    }),
  }),
});

export const { useGetMarketDataQuery, useGetExchangeDataQuery } = marketDataApi;
