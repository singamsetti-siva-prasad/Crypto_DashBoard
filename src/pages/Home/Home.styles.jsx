import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: fit-content;
  margin: 1%;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  @media (max-width: 693px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const NavbarContainer = styled.div`
  background-color: red;
  height: 10vh;
  width: 100vw;
`;

export const Left = styled.div`
  flex: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 693px) {
    flex: 100%;
    width: 100vw;
  }
`;
export const Right = styled.div`
  flex: 25%;
  height: 100%;
`;
export const Top = styled.div`
  width: 100%;
  flex: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Middle = styled.div`
  width: 98%;
  flex: 70%;
  display: flex;
  flex-direction: column;
  margin: 1%;
  @media (max-width: 693px) {
    flex: 100%;
  }
`;
export const ChartTop = styled.div`
  flex: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const ChartBottom = styled.div`
  flex: 90%;
  width: 100%;
  height: 100%;
`;

export const Bottom = styled.div`
  width: 100%;
  flex: 20%;
  display: flex;
  @media (max-width: 424px) {
    flex-direction: column;
    align-items: center;
  }
`;
