/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, styled } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/home/Home";

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  footer: {
    marginTop: "auto",
  },
}));

const Main = styled("main")(({ theme }) => ({
  background: "#f7f9fb",
}));

export default Layout;
