import React, { useState } from "react";
import styled from "styled-components";
import { useGetExchangeDataQuery } from "../../features/api/marketDataApiSlice";
import { useGetAllCurrenciesQuery } from "../../features/api/CurrencyApiSlice";
const Container = styled.div`
  width: 50%;
  height: 100%;
  margin: 1%;
  box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  @media (max-width: 424px) {
    width: 100%;
    margin: 5%;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Top = styled.p`
  font-weight: 800;
  flex: 2;
  font-size: clamp(1rem, 1vw + 0.5rem, 1.5rem);
  @media (max-width: 768px) {
    font-size: clamp(1rem, 0.8vw + 0.5rem, 1.5rem);
  }
`;
const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 7;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  flex: 50%;
`;
const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const Title = styled.p`
  flex: 4;
  font-weight: 800;
  font-size: 1rem;
  color: ${(props) => (props.variant === "sell" ? "orange" : "green")};
  font-size: clamp(0.5rem, 0.5vw + 0.5rem, 1rem);
  margin-right: 1%;
`;

const DropDown = styled.div`
  flex: 8;
  height: 50px;
  width: 100%;
`;
const Select = styled.select`
  min-width: 50px;
  width: 100%;
  height: 50px;
  overflow: scroll;
  font-weight: 700;
  background-color: #d9d9d9;
  border: none;
  border-radius: 10px;
  font-size: clamp(0.5rem, 0.5vw + 0.5rem, 0.7rem);
  cursor: pointer;
  @media (max-width: 768px) {
    height: 40px;
    font-size: clamp(0.5rem, 0.8vw + 0.5rem, 0.7rem);
  }
`;

const Option = styled.option`
  text-transform: uppercase;
  font-weight: 400;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  justify-content: space-around;
  align-items: center;
  flex: 50%;
  width: 100%;
`;
const Input = styled.input`
  width: 50%;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
  @media (max-width: 768px) {
    height: 40px;
  }
`;
const ConvertedValue = styled.p`
  height: 50px;
  min-width: 200px;
  text-align: center;
  line-height: 60px;
  color: green;
  font-weight: 500;
  @media (max-width: 768px) {
    height: 40px;
    min-width: 150px;
    line-height: 50px;
  }
`;
const Bottom = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex: 2;
  }
`;
const Button = styled.button`
  width: 150px;
  min-height: 50px;
  background-color: blue;
  margin: 1%;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 120px;
    min-height: 40px;
  }
`;

const ExchangeRates = () => {
  const [enteredValue, setEnteredValue] = useState("0");
  const [sellCurrency, setSellCurrency] = useState("btc");
  const [buyCurrency, setBuyCurrency] = useState("btc");
  const [convertedValue, setConvertedValue] = useState(" ");
  console.log(`enteredValue ${enteredValue}`);
  console.log(`sellValue ${sellCurrency.currency}`);
  console.log(`buyValue ${buyCurrency}`);

  const handleSellChange = (e) => {
    setSellCurrency(e.target.value);
  };
  const handleBuyChange = (e) => {
    setBuyCurrency(e.target.value);
  };
  const { data: currencyList, isLoading } = useGetAllCurrenciesQuery();

  const { data: exchangeData, isFetching } = useGetExchangeDataQuery();

  if (isFetching) return "Loading......";
  console.log(exchangeData.rates[sellCurrency].value);

  function ConversionFormula(enteredValue) {
    const convertedValue = (
      (parseFloat(enteredValue) *
        parseFloat(exchangeData && exchangeData.rates[buyCurrency].value)) /
      parseFloat(exchangeData && exchangeData?.rates[sellCurrency].value)
    ).toFixed(2);
    console.log(convertedValue);

    return convertedValue;
  }

  function handleClick() {
    setConvertedValue(ConversionFormula(enteredValue));
  }

  return (
    <Container>
      <Wrapper>
        <Top>Exchange Coins</Top>
        <Middle>
          <Left>
            <DropDownContainer>
              <Title variant="sell">Sell</Title>
              <DropDown variant="sell">
                <Select onChange={handleSellChange} value={sellCurrency}>
                  <Option value="sellCurrency" disabled>
                    BTC
                  </Option>
                  {currencyList &&
                    currencyList.map((currencyName) => (
                      <Option value={currencyName} key={currencyName}>
                        {currencyName.toUpperCase()}
                      </Option>
                    ))}
                </Select>
              </DropDown>
            </DropDownContainer>
            <DropDownContainer>
              <Title variant="buy">Buy</Title>
              <DropDown variant="buy">
                <Select onChange={handleBuyChange} value={buyCurrency}>
                  <Option value="sellCurrency" disabled>
                    BTC
                  </Option>
                  {currencyList &&
                    currencyList.map((currencyName) => (
                      <Option value={currencyName} key={currencyName}>
                        {currencyName.toUpperCase()}
                      </Option>
                    ))}
                </Select>
              </DropDown>
            </DropDownContainer>
          </Left>
          <Right>
            <Input
              placeholder="0"
              onChange={(e) => setEnteredValue(e.target.value)}
            />
            <ConvertedValue>{convertedValue}</ConvertedValue>
          </Right>
        </Middle>
        <Bottom>
          <Button onClick={handleClick}>Exchange</Button>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default ExchangeRates;
