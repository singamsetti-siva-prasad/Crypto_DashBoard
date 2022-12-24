import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setCryptoCurrency } from "../../features/cryptoCurrencyDropDownSlice";
import { useGetAllCoinsQuery } from "../../features/api/coinApiSlice";
const Container = styled.div`
  height: 50px;
  width: 80%;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 2%;
  border-radius: 10px;
  position: relative;
  margin-bottom: 1%;
`;
const SearchOutPutContainer = styled.div`
  width: 50%;
  max-height: 90px;
  overflow-y: scroll;
  background-color: #c2d1f0;
  padding-left: 1%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  z-index: 9999;
  display: ${(props) => (props.active ? "block" : "none")};
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 4px rgb(51, 102, 204);
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(148, 148, 184);
    outline: 1px solid rgb(51, 102, 204);
  }
`;
const SearchOutPut = styled.p`
  cursor: pointer;
  font-weight: 400;
`;

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  const { data: coinList, isFetching } = useGetAllCoinsQuery();

  const handleClick = (e) => {
    dispatch(setCryptoCurrency(e.target.value));
    setSearchValue("");
  };
  return (
    <Container>
      <Input
        placeholder="Search Crypto Currencies"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SearchOutPutContainer active={searchValue}>
        {coinList &&
          coinList
            .filter((coin) => coin.name.includes(searchValue))
            .map((coin) => (
              <SearchOutPut onClick={handleClick} key={coin.id}>
                {coin.name}
              </SearchOutPut>
            ))}
      </SearchOutPutContainer>
    </Container>
  );
};

export default Searchbar;
