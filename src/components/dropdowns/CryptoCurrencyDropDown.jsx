import React, { useState } from "react";
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
`;

const Option = styled.option`
  text-transform: uppercase;
  font-weight: 400;

  /* font-style: ${(props) =>
    props.variant === "head" ? "italic" : "normal"}; */
`;

const CryptoCurrencyDropDown = () => {
  const dispatch = useDispatch();

  const { data: coinList, isFetching } = useGetAllCoinsQuery();

  const handleChange = (e) => {
    dispatch(setCryptoCurrency(e.target.value));
  };
  // const selectedCoin = useSelector(
  //   (state) => state.selectCryptoCurrency.selectedcryptoCurrency
  // );
  // console.log(selectedCoin);
  return (
    <Container>
      <Select onChange={handleChange}>
        <Option disabled selected hidden variant="head">
          Crypto Currency
        </Option>
        {coinList &&
          coinList.map((coin) => (
            <Option value={coin.id} key={coin.id}>
              {coin.name}
            </Option>
          ))}
      </Select>
    </Container>
  );
};

export default CryptoCurrencyDropDown;
