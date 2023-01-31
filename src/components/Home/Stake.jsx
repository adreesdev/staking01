import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import binancelogo from "../../assets/binancelogo.png";

import metamask from "../../assets/metamask1.png";

const logos = [binancelogo, metamask, binancelogo, metamask];

const Stake = () => {
  return (
    <Box py={2} mb={3}>
      <Container>
        <Typography variant="h3" margin="1rem 0rem">
          Stake
        </Typography>
        <Grid container spacing={2}>
          {logos.map((logoimg) => {
            return (
              <Grid item md={3} xs={6}>
                <Box>
                  <img
                    src={logoimg}
                    alt="abc"
                    width="150px"
                    height="50px"
                  ></img>
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
