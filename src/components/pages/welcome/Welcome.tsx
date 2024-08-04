import { Box } from "@mui/material";
import styled from "styled-components";
const Welcome = () => {
  return (
    <StyledContainer>
      <Box>
        {/* <img src="/src/assets/metrax logo 1.png" alt="" /> */}
      </Box>

      <Box>
        <img
          src="https://s3-alpha-sig.figma.com/img/bccb/3dbd/8544185380774bd985fe0c3ac8674be2?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V7XMTtzMxv2aAUoC2ESrDMJ4M5fShmdLc4a9y779TVa0U4wZafBCRXQQzOApi2fr3p~ImwjdmNWGvgwLq5PfCrpPRhXdXndsWUqgM6hdDmhcNT0hVbd4NeziNByPPQM4cNlp11vyI5ZP1MIPROe88xYlWAaTpHt1UwqD~iOVODRbwgdDLKbuiYAroolLSgEzb-~-WXXO60W~UAVDASLRBGtLLBCKbZ9lIZ8rAq7a9qEGjf950snuqCBBU3ktHKsExuifM~hdr0VW3fraJgCc4M0bDBPDxoO0F-nynoqD-N7SPiy404PHrFg0irt6LeE3UQN6irfPZsWhbC0W4oNzeQ__"
          alt=""
        />
      </Box>
    </StyledContainer>
  );
};
const StyledContainer = styled(Box)``;

export default Welcome;
