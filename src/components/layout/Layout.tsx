import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <main>main</main>
      <Footer />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  footer {
    margin-top: auto;
  }
`;

export default Layout;
