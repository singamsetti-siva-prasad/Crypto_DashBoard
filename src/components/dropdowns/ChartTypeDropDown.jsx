import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setChartType } from "../../features/chartTypeSlice";

const Container = styled.div`
  height: 10vh;
  width: 25%;
  margin: 1%;
`;
const Select = styled.select`
  width: 100%;
  height: 50px;
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

const ChartTypeDropDown = () => {
  const dispatch = useDispatch();

  //Get Chart type from store
  const chartType = useSelector(
    (state) => state.selectChartType.selectedChartType
  );
  const handleChange = (e) => {
    dispatch(setChartType(e.target.value));
  };
  return (
    <Container>
      <Select value={chartType} onChange={handleChange}>
        <Option value="chartType" disabled>
          Chart Type
        </Option>
        <Option value={"lineChart"}>Line Chart</Option>
        <Option value={"horizontalBarChart"}>Horizontal Bar Chart</Option>
        <Option value={"verticalBarChart"}>Vertical Bar chart </Option>
      </Select>
    </Container>
  );
};

export default ChartTypeDropDown;
