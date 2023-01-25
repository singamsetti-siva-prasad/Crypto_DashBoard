import React from "react";
import { useGetMarketsQuery } from "../../features/api/coinApiSlice";
import CoinCard from "../coinCard/CoinCard";
import { Container, Wrapper, Title, Coins } from "./Sidebar.styles";

const Sidebar = () => {
  //Fetch market data
  const { data, isFetching } = useGetMarketsQuery();
  if (isFetching) return "Loading...";

  return (
    <Container>
      <Wrapper>
        <Title>Top Trending Crypto Currencies by Coin Market </Title>
        <Coins>
          {data && data.map((coin) => <CoinCard key={coin.id} coin={coin} />)}
        </Coins>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
