import React from "react";
import styled from "styled-components";
import { currencyFormat } from "../../utils";
import millify from "millify";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border-radius: 10px; */
  border-bottom: 1px solid #d9d9d9;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* background-color: aliceblue; */
  /* border-radius: 10px; */
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 8;
  padding: 5%;
`;
const CoinName = styled.p`
  font-weight: 800;
  font-size: clamp(1rem, 0.5rem + 0.5vw, 1rem);
  /* font-size: calc(0.5rem + 0.5vw); */
`;
const MKTCap = styled.p`
  font-size: clamp(0.7rem, 0.4rem + 0.5vw, 0.8rem);
  color: gray;
`;
const PriceChangePercent = styled.p`
  flex: 2;
  color: ${(props) => (props.value < 0 ? "red" : "green")};
  font-weight: 800;
  font-size: clamp(0.7rem, 0.4rem + 0.5vw, 0.8rem);
`;
const Icon = styled.span``;
const Img = styled.img`
  width: clamp(1rem, 0.8rem + 0.5vw, 2rem);
  height: clamp(1rem, 0.8rem + 0.5vw, 2rem);
  float: left;
  shape-outside: circle(50%);
  margin-right: 2%;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const CoinCard = ({ coin }) => {
  const Down = coin.price_change_percentage_24h < 0;
  // const icon = null;

  // if (upOrDown) {
  //   icon = <ArrowDropDownOutlinedIcon />;
  // } else {
  //   icon = <ArrowDropUpOutlinedIcon />;
  // }

  return (
    <Container>
      <Wrapper>
        <InfoContainer>
          <Img src={coin.image} />
          <Info>
            <CoinName>{coin.name}</CoinName>
            <MKTCap>Mkt.Cap ${millify(coin.market_cap)}</MKTCap>
          </Info>
        </InfoContainer>
        <Icon>
          {Down ? (
            <ArrowDropDownOutlinedIcon color="error" fontSize="small" />
          ) : (
            <ArrowDropUpOutlinedIcon color="success" fontSize="small" />
          )}
        </Icon>
        <PriceChangePercent value={coin.price_change_percentage_24h}>
          {coin.price_change_percentage_24h.toFixed(4)}
        </PriceChangePercent>
      </Wrapper>
    </Container>
  );
};

export default CoinCard;
