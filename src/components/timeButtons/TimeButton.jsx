import React from "react";
import { useDispatch } from "react-redux";
import { setTime } from "../../features/timeSlice";
import { Container, Button } from "./TimeButton.styles";

const TimeButton = () => {
  const handleClick = (e) => {
    dispatch(setTime(e.target.value));
  };
  const dispatch = useDispatch();

  return (
    <Container>
      <Button data-testid="button1" value={"1"} onClick={handleClick}>
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
