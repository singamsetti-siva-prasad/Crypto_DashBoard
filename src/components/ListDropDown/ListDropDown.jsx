import React, { useState } from "react";
import ArrowDropDownOutlined from "@mui/icons-material/ArrowDropDownOutlined";
import styled from "styled-components";

const Container = styled.div`
  width: fit-content;
  height: 50px;
`;

const DropDown = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
`;
const Icon = styled.div``;

const MenuContainer = styled.div`
  height: 100px;
  width: 100px;
  overflow-y: scroll;
  display: ${(props) => props.whether === false && "none"};
  border: 1px solid;

  border-radius: 10px;
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px grey;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: lightcoral;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(54, 56, 58);
  }
`;
const Menu = styled.ul`
  width: 100%;
  max-height: 100%;
`;
const Item = styled.li`
  width: 100%;
  height: 10%;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: blue;
  }
`;

const ToolTip = styled.div`
  width: fit-content;
  height: fit-content;
  display: none;
  z-index: 9999;
  &:hover {
    display: block;
  }
`;

const ListDropDown = ({ currencyList }) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(setCurrency(e.target.value));
  };
  console.log(currencyList?.[0]);
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <Container>
      <DropDown>
        <ButtonContainer>
          <Button onClick={() => setActive(!active)}>
            CryptoCurrencyDropDown
            <Icon>
              <ArrowDropDownOutlined />
            </Icon>
          </Button>
        </ButtonContainer>
        <MenuContainer whether={active}>
          <Menu>
            {currencyList &&
              currencyList.map((currencyName) => (
                <Item
                  onClick={() => setActive(!active)}
                  value={currencyName}
                  key={currencyName}
                >
                  {currencyName}
                </Item>
              ))}
          </Menu>
        </MenuContainer>
      </DropDown>
    </Container>
  );
};

export default ListDropDown;
