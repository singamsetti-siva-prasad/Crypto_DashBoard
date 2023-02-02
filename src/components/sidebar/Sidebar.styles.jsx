import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 90%;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 10px 51px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 693px) {
    width: 100vw;
    height: 100%;
  }
`;
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 2%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.p`
  flex: 25%;
  font-size: clamp(1rem, 1vw + 0.5rem, 1.5rem);
  font-weight: 800;
  margin: 3%;
`;

export const Coins = styled.div`
  width: 100%;
  flex: 75%;
  display: flex;
  flex-direction: column;
`;
