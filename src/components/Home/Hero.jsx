import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <>
      <Container>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4} md={4}>
              <Box
                p={2}
                border="1px solid green"
                borderRadius="15px"
                textAlign="center"
                bgcolor="#2AFC9509"
              >
                <Typography sx={{ fontWeight: "600", fontSize: "20px" }}>
                  Total BNB Stake Contract
                </Typography>
                <Typography
                  sx={{ fontWeight: "900", fontSize: "50px", color: "green" }}
                >
                  0
                </Typography>
              </Box>
              <Box
                mt={2}
                p={2}
                border="1px solid green"
                borderRadius="15px"
                textAlign="center"
                bgcolor="#2AFC9509"
              >
                <Typography sx={{ fontWeight: "600", fontSize: "20px" }}>
                  Total BNB Stake Contract
                </Typography>
                <Typography
                  sx={{ fontWeight: "900", fontSize: "50px", color: "green" }}
                >
                  0
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} md={8}>
              <Stack
                py={5}
                px={2}
                gap={2}
                width="100%"
                height={"100%"}
                border="1px solid green"
                borderRadius="15px"
                textAlign="left"
                bgcolor="#2AFC9509"
              >
                <Box sx={{ fontWeight: "700", fontSize: "18px" }}>
                  <span
                    style={{
                      color: "green",
                      fontWeight: "600",
                      fontSize: "17px",
                    }}
                  >
                    Total income:
                  </span>
                  based on your tarrif plan (from 5% to 8% daily)
                </Box>
                <Box sx={{ fontWeight: "700", fontSize: "18px" }}>
                  <span
                    style={{
                      color: "green",
                      fontWeight: "600",
                      fontSize: "17px",
                    }}
                  >
                    Basic interest rate:
                  </span>
                  +0.5% every 24 hours - only for new deposits
                </Box>
                <Box sx={{ fontWeight: "700", fontSize: "18px" }}>
                  <span
                    style={{
                      color: "green",
                      fontWeight: "600",
                      fontSize: "17px",
                    }}
                  >
                    Minimal deposit:
                  </span>
                  0.05 BNB, no maximal limit
                </Box>
                <Box sx={{ fontWeight: "700", fontSize: "18px" }}>
                  Earnings every moment, withdraw any time
                  <span
                    style={{
                      color: "green",
                      fontWeight: "600",
                      fontSize: "16px",
                    }}
                  >
                    (if you use capitalization of interest you can withdraw only
                    after end of your deposit)
                  </span>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Hero;
