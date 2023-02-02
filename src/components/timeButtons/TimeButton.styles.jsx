import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
`;

export const Button = styled.button`
  width: 50px;
  height: 30px;
  background-color: #e6faff;
  margin: 1%;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(148, 148, 184);
  }
  @media (max-width: 540px) {
    width: 30px;
    height: 30px;
  }
`;
