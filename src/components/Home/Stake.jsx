import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import binanceImg from "../../assets/binance.png";
import metamaskImg from "../../assets/metamask.png";

const logos = [binanceImg, metamaskImg, binanceImg, metamaskImg];

const Stake = () => {
  return (
    <Box py={2} mb={3}>
      <Container>
        <Typography variant="h3" margin="1rem 0rem">
          Stake
        </Typography>
        <Grid container spacing={1}>
          {logos.map((logoimg) => {
            return (
              <Grid item md={3} xs={6}>
                <Box>
                  <img src={logoimg} alt="abc" width="100%" height="50px"></img>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Stake;
