import { Search } from "../assets/icon";
import styled from "styled-components";
export const InputSearch = () => {
  return (
    <Input>
      <Search />
      <input type="text" placeholder="Поиск медицинского оборудования" />
    </Input>
  );
};

const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 19.5rem;
  height: 36px;
  padding: 0 8px;
  border-radius: 10px;
  box-shadow: inset 0px 0px 3px 0px rgba(50, 87, 164, 0.25);
  background: rgb(255, 255, 255);
  svg {
    color: #ec2428;
  }

  input {
    width: 100%;
    border: none;
    outline: none;

    color: rgb(17, 17, 17);

    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0%;
    text-align: left;

    &::placeholder {
      color: black;
    }
  }
`;
