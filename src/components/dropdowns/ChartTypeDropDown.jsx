import React, { useState } from "react";
import styled from "styled-components";

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
`;

const Option = styled.option``;

const ChartTypeDropDown = () => {
  const [first, setfirst] = useState("");
  return (
    <Container>
      <Select value={first} onChange={(e) => setfirst(e.target.value)}>
        <Option value="first" disabled>
          Chart type
        </Option>
        <Option value={"line_chart"}>Line</Option>
        <Option value={"bar_chart_horizontal"}>Bar chart horizontal</Option>
        <Option value={"bar_chart_vertical"}>Bar chart Vertical</Option>
      </Select>
    </Container>
  );
};

export default ChartTypeDropDown;
