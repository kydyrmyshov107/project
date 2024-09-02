import { Box } from "@mui/material";
import styled from "styled-components";
const Welcome = () => {
  return (
    <StyledContainer>
      <Box>
        <img src="../../../assets/Mask group.png" alt="" />
        <img src="../../../assets/Mask group.png" alt="" />
      </Box>
    </StyledContainer>
  );
};
const StyledContainer = styled(Box)``;

export default Welcome;
