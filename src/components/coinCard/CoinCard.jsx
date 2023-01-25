import React from "react";
import millify from "millify";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import {
  Container,
  Wrapper,
  InfoContainer,
  Info,
  Img,
  CoinName,
  MKTCap,
  Icon,
  PriceChangePercent,
} from "./CoinCard.styles";

const CoinCard = ({ coin }) => {
  const Down = coin.price_change_percentage_24h < 0;

  return (
    <Container data-test="coincard-div">
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
