import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setCryptoCurrency } from "../../features/cryptoCurrencyDropDownSlice";
import { useGetAllCoinsQuery } from "../../features/api/coinApiSlice";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 10vh;
  width: 25%;
`;

const Select = styled.select`
  width: 100%;
  height: 50px;
  overflow-y: scroll;
  font-weight: 700;
  background-color: #e6ecff;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  padding: 1%;
  cursor: pointer;
`;

const Option = styled.option`
  font-weight: 400;
`;

const CryptoCurrencyDropDown = () => {
  const cryptoCurrency = useSelector(
    (state) => state.selectCryptoCurrency.selectedcryptoCurrency
  );

  const dispatch = useDispatch();

  //Fetch coin list data
  const { data: coinList } = useGetAllCoinsQuery();

  const handleChange = (e) => {
    dispatch(setCryptoCurrency(e.target.value));
  };

  return (
    <Container>
      <Select onChange={handleChange} value={cryptoCurrency}>
        <Option value="cryptoCurrency" disabled>
          Crypto Currency
        </Option>
        {coinList &&
          coinList.map((coin) => (
            <Option value={coin.id} key={coin.id}>
              {coin.name.toUpperCase()}
            </Option>
          ))}
      </Select>
    </Container>
  );
};

export default CryptoCurrencyDropDown;
