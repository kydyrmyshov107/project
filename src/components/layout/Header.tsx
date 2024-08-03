import { Box } from "@mui/material";
import styled from "styled-components";
import {
  Call,
  Heart,
  Line,
  ShoppingCart,
  Telegram,
  User,
  WhatApp,
} from "../../assets/icon";
import { InputSearch } from "../../ui/InputSearch";

const arr = [
  { text: "О компании" },
  { text: "Производители" },
  { text: "Доставка" },
  { text: "Оплата" },
  { text: "Новости" },
  { text: "Реквизиты" },
  { text: "Контакты" },
];

const capble = [
  { icon: <Line />, title: "Сравнения" },
  { icon: <ShoppingCart />, title: "Корзина" },
  { icon: <User />, title: "Личный кабинет" },
];

const Header = () => {
  return (
    <SideBar>
      <HeaderSup>
        <Box className="start">
          <Heart />
          <p>boksmed</p>
        </Box>

        <Box className="lines">
          <input type="text" />
          <label className="toggle">
            <Box id="bar1" className="bars" />
            <Box id="bar2" className="bars" />
            <Box id="bar3" className="bars" />
          </label>
          <p>КАТАЛОГ</p>
        </Box>

        <InputSearch />

        <Box className="word">
          <p>Заказать обратный звонок</p>
        </Box>
        <Box className="last">
          <p>8 (3412) 65-08-77</p>
          <Box className="clicks">
            <button>
              <WhatApp />
            </button>
            <button>
              <Telegram />
            </button>
            <button>
              <Call />
            </button>
          </Box>
        </Box>
      </HeaderSup>
      <SupHeader>
        <Box className="words">
          {arr.map((item) => (
            <Box key={item.text}>
              <p>{item.text}</p>
            </Box>
          ))}
        </Box>
        <Box className="end">
          {capble.map((el) => (
            <Box className="two" key={el.title}>
              <button>{el.icon}</button>
              <p>{el.title}</p>
            </Box>
          ))}
        </Box>
      </SupHeader>
    </SideBar>
  );
};

const SideBar = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
`;

const HeaderSup = styled(Box)`
  width: 100%;
  max-width: 1380px;
  margin-inline: auto;
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .start {
    display: flex;
    align-items: center;
    gap: 3px;
    svg {
      width: 27px;
      height: 23px;
    }

    p {
      color: rgb(50, 87, 164);
      font-size: 25px;
    }
  }

  .lines {
    display: flex;
    align-items: center;
    gap: 4px;
    input {
      display: none;
    }

    .toggle {
      position: relative;
      width: 30px;
      height: 30px;
      cursor: pointer;
      display: flex;
      flex-direction: column-reverse;
      align-items: flex-start;
      justify-content: center;
      gap: 6px;
      transition-duration: 0.5s;
    }

    .bars {
      width: 100%;
      height: 3px;
      background-color: #3257a4;
      border-radius: 4px;
    }

    #bar2 {
      transition-duration: 0.8s;
    }

    #bar1 {
      width: 55%;
    }

    p {
      color: rgb(17, 17, 17);
      font-size: 15px;
      font-weight: 400;
      line-height: 18px;
      text-align: left;
    }
  }

  .word {
    p {
      color: rgb(50, 87, 164);
      font-size: 17px;
      font-weight: 400;
      line-height: 18px;
      text-align: left;
      text-decoration-line: underline;
      cursor: pointer;
    }
  }

  .last {
    display: flex;
    align-items: center;
    gap: 30px;
    p {
      color: rgb(17, 17, 17);
      font-size: 16px;
      font-weight: 400;
      line-height: 18px;
      text-align: left;
    }
    .clicks {
      display: flex;
      align-items: center;
      gap: 5px;
      button {
        background: #3257a4;
        border: none;
        outline: none;
        padding: 5px;
        border-radius: 50%;
        cursor: pointer;
        svg {
          color: white;
        }
      }
    }
  }
`;

const SupHeader = styled(Box)`
  width: 100%;
  max-width: 1380px;
  margin-inline: auto;
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .words {
    display: flex;
    align-items: center;
    gap: 30px;
    p {
      color: rgb(17, 17, 17);
      font-size: 16px;
      font-weight: 400;
      line-height: 18px;
      text-align: left;
      cursor: pointer;
    }
  }

  .end {
    display: flex;
    align-items: center;
    gap: 15px;
    .two {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 3px;
      button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        svg {
          width: 27px;
          height: 26px;
          color: #0556a8;
        }
      }
    }
  }
`;

export default Header;
