import React, { useState } from "react";
import { useGetExchangeDataQuery } from "../../features/api/marketDataApiSlice";
import { useGetAllCurrenciesQuery } from "../../features/api/CurrencyApiSlice";
import {
  Container,
  Wrapper,
  Top,
  Middle,
  Left,
  DropDownContainer,
  Title,
  DropDown,
  Select,
  Option,
  Right,
  Input,
  ConvertedValue,
  Bottom,
  Button,
} from "./ExchangeRates.styles";

const ExchangeRates = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [sellCurrency, setSellCurrency] = useState("btc");
  const [buyCurrency, setBuyCurrency] = useState("btc");
  const [convertedValue, setConvertedValue] = useState(" ");

  const handleSellChange = (e) => {
    setSellCurrency(e.target.value);
  };
  const handleBuyChange = (e) => {
    setBuyCurrency(e.target.value);
  };

  //Fetch currency list data
  const { data: currencyList } = useGetAllCurrenciesQuery();

  const { data: exchangeData, isFetching } = useGetExchangeDataQuery();

  function ConversionFormula(enteredValue) {
    const convertedValue = (
      (parseFloat(enteredValue) *
        parseFloat(exchangeData && exchangeData.rates[buyCurrency].value)) /
      parseFloat(exchangeData && exchangeData?.rates[sellCurrency].value)
    ).toFixed(2);

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
              data-testid="exchangeInput"
              placeholder="Enter value"
              value={enteredValue}
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
