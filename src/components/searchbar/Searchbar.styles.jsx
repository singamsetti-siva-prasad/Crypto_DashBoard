import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  width: 80%;
`;
export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 2%;
  border-radius: 10px;
  position: relative;
  margin-bottom: 1%;
`;
export const SearchOutPutContainer = styled.div`
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
export const SearchOutPut = styled.p`
  cursor: pointer;
  font-weight: 400;
`;
