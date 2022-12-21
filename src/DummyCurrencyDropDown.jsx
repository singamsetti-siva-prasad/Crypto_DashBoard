import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setCurrency } from "./features/currencyDropDownSlice";
import { useGetAllCurrenciesQuery } from "./features/api/CurrencyApiSlice";
import ListDropDown from "./components/ListDropDown/ListDropDown";
const Container = styled.div`
  height: 50px;
  width: 100px;
`;

const DummyCurrencyDropDown = () => {
  const {
    data: currencyList,
    isLoading,
    isSuccess,

    error,
  } = useGetAllCurrenciesQuery();
  if (isLoading) return "loading.....";
  const { NameList } = currencyList;
  console.log(`namelist ${NameList}`);

  return (
    <Container>
      {error ? (
        <>something went wrong..</>
      ) : isLoading ? (
        <>Loading plz wait..</>
      ) : currencyList && currencyList.length > 0 ? (
        <ListDropDown currencyList={currencyList} />
      ) : null}
    </Container>
  );
};

export default DummyCurrencyDropDown;
