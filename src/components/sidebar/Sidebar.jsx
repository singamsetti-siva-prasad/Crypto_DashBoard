import React from "react";
import styled from "styled-components";
import { useGetMarketsQuery } from "../../features/api/coinApiSlice";
import CoinCard from "../coinCard/CoinCard";

const Container = styled.div`
  height: 100%;
  width: 90%;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 10px 51px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 693px) {
    width: 100vw;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 2%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p`
  flex: 25%;
  font-size: clamp(1rem, 1vw + 0.5rem, 1.5rem);
  font-weight: 800;
  margin: 3%;
`;

const Coins = styled.div`
  width: 100%;
  flex: 75%;
`;
const Sidebar = () => {
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
