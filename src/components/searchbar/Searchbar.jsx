import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCryptoCurrency } from "../../features/cryptoCurrencyDropDownSlice";
import { useGetAllCoinsQuery } from "../../features/api/coinApiSlice";
import {
  Container,
  Input,
  SearchOutPutContainer,
  SearchOutPut,
} from "./Searchbar.styles";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  //Fetch coin list data
  const { data: coinList } = useGetAllCoinsQuery();

  const handleClick = (e) => {
    dispatch(setCryptoCurrency(e.target.value));
    setSearchValue("");
  };
  return (
    <Container>
      <Input
        value={searchValue}
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
