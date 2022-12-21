import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const coinApi = createApi({
  reducerPath: "coinApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }),
  endpoints: (builder) => ({
    getTrendingcoins: builder.query({
      query: () => "/search/trending",
    }),

    getMarkets: builder.query({
      query: () =>
        "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=13&page=1&sparkline=false",
    }),

    getAllCoins: builder.query({
      query: () => "/coins/list",
    }),
  }),
});

export const {
  useGetTrendingcoinsQuery,
  useGetMarketsQuery,
  useGetAllCoinsQuery,
} = coinApi;
