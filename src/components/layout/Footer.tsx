import { Box, styled, Typography } from "@mui/material";
import { Call, Heart, Telegram, WhatApp } from "../../assets/icon";

const arrOne = [
  { text: "О компании" },
  { text: "Производители" },
  { text: "Доставка" },
  { text: "Оплата" },
];

const arrTwo = [
  { text: "Каталог" },
  { text: "Новости" },
  { text: "Реквизиты" },
  { text: "Контакты" },
];

const Footer = () => {
  return (
    <StyleContainer>
      <Box className="box">
        <Box className="start">
          <Box className="footer_end">
            <Heart />
            <Typography variant="h5" color="primary">
              boksmed
            </Typography>
          </Box>
          <Box className="buttons">
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
        <Box className="arrOne">
          {arrOne.map((item) => (
            <div>
              <Typography>{item.text}</Typography>
            </div>
          ))}
        </Box>
        <Box className="arrOne">
          {arrTwo.map((item) => (
            <div>
              <Typography>{item.text}</Typography>
            </div>
          ))}
        </Box>
        <Box className="arrTwo">
          <Typography>Заказать обратный звонок</Typography>
          <Typography>
            Россия, Удмуртская Республика <br /> 426011, г. Ижевск, ул.
            Пушкинская 290 <br />
            тел. 8 (3412) 65-08-77
          </Typography>
        </Box>
        <Box className="arrTwo">
          <Typography>Политика конфиденциальности</Typography>
          <Typography>
            ООО «Boksmed» © 2015 - 2022. <br /> Сайт носит информационный
            характер <br /> и не является публичной офертой.
          </Typography>
        </Box>
      </Box>
    </StyleContainer>
  );
};

const StyleContainer = styled(Box)`
  background: rgb(35, 35, 35);
  color: rgb(255, 255, 255);

  .box {
    width: 100%;
    max-width: 1380px;
    margin-inline: auto;
    padding: 40px 20px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    .start {
      display: flex;
      flex-direction: column;
      gap: 50px;
      .footer_end {
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;
      }

      .buttons {
        display: flex;
        align-items: center;
        gap: 6px;
        button {
          background: #3257a4;
          padding: 5px;
          border-radius: 50%;
          border: none;
          outline: none;
          cursor: pointer;
        }
      }
    }
    .arrOne {
      display: flex;
      flex-direction: column;
      gap: 20px;
      p {
        font-size: 15px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0%;
        text-align: left;
        cursor: pointer;
      }
    }

    .arrTwo {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
  }
`;

export default Footer;
