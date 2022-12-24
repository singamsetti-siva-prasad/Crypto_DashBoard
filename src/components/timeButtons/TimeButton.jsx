import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setTime } from "../../features/timeSlice";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  height: 50px;
`;

const Button = styled.button`
  width: 50px;
  height: 25px;
  background-color: #e6faff;
  margin: 1%;
  border: none;
  border-radius: 10px;
  padding: 5px;
  &:hover {
    background-color: rgb(148, 148, 184);
  }
  cursor: pointer;
`;

const TimeButton = () => {
  const handleClick = (e) => {
    dispatch(setTime(e.target.value));
  };
  const dispatch = useDispatch();
  const selectedTime = useSelector((state) => state.selectTime.selectedTime);
  console.log(selectedTime);
  return (
    <Container>
      <Button value={"1"} onClick={handleClick}>
        1d
      </Button>
      <Button value={"7"} onClick={handleClick}>
        7d
      </Button>
      <Button value={"14"} onClick={handleClick}>
        2w
      </Button>
      <Button value={"30"} onClick={handleClick}>
        1m
      </Button>
      <Button value={"180"} onClick={handleClick}>
        6m
      </Button>
      <Button value={"365"} onClick={handleClick}>
        1y
      </Button>
    </Container>
  );
};

export default TimeButton;
