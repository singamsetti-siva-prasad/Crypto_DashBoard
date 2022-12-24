import React from "react";
import styled from "styled-components";
import CryptoCurrencyDropDown from "../components/dropdowns/CryptoCurrencyDropDown";
import CurrencyDropDown from "../components/dropdowns/CurrencyDropDown";
import Searchbar from "../components/searchbar/Searchbar";
import TimeButton from "../components/timeButtons/TimeButton";
import ChartTypeDropDown from "../components/dropdowns/ChartTypeDropDown";
import LineChart from "../components/charts/LineChart";
import Sidebar from "../components/sidebar/Sidebar";
import PieChart from "../components/charts/PieChart";
import ExchangeRates from "../components/exchangeRates/ExchangeRates";
import { useSelector } from "react-redux";
import HorizontalBarChart from "../components/charts/HorizontalBarChart";
import VerticalBarChart from "../components/charts/VerticalBarChart";

const Container = styled.div`
  width: 100vw;
  height: fit-content;
  margin: 1%;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  @media (max-width: 693px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Left = styled.div`
  flex: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 693px) {
    flex: 100%;
    width: 100vw;
  }
`;
const Right = styled.div`
  flex: 25%;
  height: 100%;
`;
const Top = styled.div`
  width: 100%;
  flex: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Middle = styled.div`
  width: 98%;
  flex: 70%;
  display: flex;
  flex-direction: column;
  margin: 1%;
  @media (max-width: 693px) {
    flex: 100%;
  }
`;
const ChartTop = styled.div`
  flex: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ChartBottom = styled.div`
  flex: 90%;
  width: 100%;
  height: 100%;
`;

const Bottom = styled.div`
  width: 100%;
  height: 100%;
  flex: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 424px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Home = () => {
  const chartType = useSelector(
    (state) => state.selectChartType.selectedChartType
  );
  return (
    <Container>
      <Wrapper>
        <Left>
          <Top>
            <CurrencyDropDown />
            <Searchbar />
          </Top>
          <Middle>
            <ChartTop>
              <TimeButton />
              <CryptoCurrencyDropDown />
              <ChartTypeDropDown />
            </ChartTop>
            <ChartBottom>
              {chartType === "verticalBarChart" ? (
                <VerticalBarChart />
              ) : chartType === "horizontalBarChart" ? (
                <HorizontalBarChart />
              ) : (
                <LineChart />
              )}
            </ChartBottom>
          </Middle>
          <Bottom>
            <PieChart />
            <ExchangeRates />
          </Bottom>
        </Left>
        <Right>
          <Sidebar />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Home;
