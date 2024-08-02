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
  {
    text: "О компании",
  },
  {
    text: "Производители ",
  },
  {
    text: "Доставка ",
  },
  {
    text: "Оплата",
  },
  {
    text: "Новости ",
  },
  {
    text: "Реквизиты ",
  },
  {
    text: "Контакты ",
  },
];

const capble = [
  {
    icon: <Line />,
    title: "Сравнения",
  },
  {
    icon: <ShoppingCart />,
    title: "Корзина",
  },
  {
    icon: <User />,
    title: "Личный кабинет",
  },
];

const Header = () => {
  return (
    <SideBar>
      <HeaderSup>
        <div className="start">
          <Heart />
          <p>boksmed</p>
        </div>

        <div className="lines">
          <input type="text" />
          <label className="toggle">
            <div id="bar1" className="bars"></div>
            <div id="bar2" className="bars"></div>
            <div id="bar3" className="bars"></div>
          </label>
          <p>КАТАЛОГ</p>
        </div>

        <>
          <InputSearch />
        </>

        <div className="word">
          <p> Заказать обратный звонок</p>
        </div>
        <div className="last">
          <p>8 (3412) 65-08-77</p>
          <div className="clicks">
            <button>
              <WhatApp />
            </button>
            <button>
              <Telegram />
            </button>
            <button>
              <Call />
            </button>
          </div>
        </div>
      </HeaderSup>
      <SupHeader>
        <div className="words">
          {arr.map((item) => (
            <div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="end">
          {capble.map((el) => (
            <div className="two">
              <button>{el.icon}</button>
              <p>{el.title}</p>
            </div>
          ))}
        </div>
      </SupHeader>
    </SideBar>
  );
};

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
`;

const HeaderSup = styled.header`
  width: 100%;
  max-width: 1380px;
  margin-inline: auto;
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.start {
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

  div.lines {
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

    #bar2 {
      /* width: 75%; */
    }
    p {
      color: rgb(17, 17, 17);
      font-size: 15xpx;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
    }
  }

  div.word {
    p {
      color: rgb(50, 87, 164);
      font-size: 17px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
      text-decoration-line: underline;
      cursor: pointer;
    }
  }

  div.last {
    display: flex;
    align-items: center;
    gap: 30px;
    p {
      color: rgb(17, 17, 17);
      font-size: 16px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
    }
    div.clicks {
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

const SupHeader = styled.div`
  width: 100%;
  max-width: 1380px;
  margin-inline: auto;
  padding-inline: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div.words {
    display: flex;
    align-items: center;
    gap: 30px;
    p {
      color: rgb(17, 17, 17);
      font-size: 16px;
      font-weight: 400;
      line-height: 18px;
      letter-spacing: 0%;
      text-align: left;
      cursor: pointer;
    }
  }

  div.end {
    display: flex;
    align-items: center;
    gap: 15px;
    div.two {
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
