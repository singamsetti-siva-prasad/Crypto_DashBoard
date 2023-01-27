import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 100%;
  margin: 1%;
  box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  @media (max-width: 424px) {
    width: 100%;
    margin: 5%;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Top = styled.p`
  font-weight: 800;
  flex: 2;
  margin: 5px;
  font-size: clamp(1rem, 1vw + 0.5rem, 1.5rem);
  @media (max-width: 768px) {
    font-size: clamp(1rem, 0.8vw + 0.5rem, 1.5rem);
  }
`;
export const Middle = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 7;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  flex: 50%;
`;
export const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Title = styled.p`
  flex: 4;
  font-weight: 800;
  font-size: 1rem;
  color: ${(props) => (props.variant === "sell" ? "orange" : "green")};
  font-size: clamp(0.5rem, 0.5vw + 0.5rem, 1rem);
  margin-right: 1%;
`;

export const DropDown = styled.div`
  flex: 8;
  height: 50px;
  width: 100%;
`;
export const Select = styled.select`
  min-width: 50px;
  width: 100%;
  height: 50px;
  overflow: scroll;
  font-weight: 700;
  background-color: #e6ecff;
  border: none;
  border-radius: 10px;
  font-size: clamp(0.5rem, 0.5vw + 0.5rem, 0.7rem);
  cursor: pointer;
  @media (max-width: 768px) {
    height: 40px;
    font-size: clamp(0.5rem, 0.8vw + 0.5rem, 0.7rem);
  }
`;

export const Option = styled.option`
  text-transform: uppercase;
  font-weight: 400;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2%;
  justify-content: space-around;
  align-items: center;
  flex: 50%;
  width: 100%;
`;
export const Input = styled.input`
  width: 50%;
  height: 50px;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
  @media (max-width: 768px) {
    height: 40px;
  }
`;
export const ConvertedValue = styled.p`
  height: 50px;
  min-width: 200px;
  text-align: center;
  line-height: 60px;
  color: green;
  font-weight: 500;
  @media (max-width: 768px) {
    height: 40px;
    min-width: 150px;
    line-height: 50px;
  }
`;
export const Bottom = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex: 2;
  }
`;
export const Button = styled.button`
  width: 150px;
  min-height: 50px;
  background-color: blue;
  margin: 1%;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 120px;
    min-height: 40px;
  }
`;
