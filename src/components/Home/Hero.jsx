import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <>
      <Box>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4} md={4}>
              <Box
                p={2}
                border="1px solid #2AFC95"
                borderRadius="15px"
                textAlign="center"
                bgcolor="#062A34"
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "16px", md: "20px" },
                  }}
                >
                  Total BNB Stake Contract
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: { xs: "30px", md: "45px" },
                    color: "#2AFC95",
                  }}
                >
                  0
                </Typography>
              </Box>
              <Box
                mt={2}
                p={2}
                border="1px solid #2AFC95"
                borderRadius="15px"
                textAlign="center"
                bgcolor="#062A34"
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: { xs: "16px", md: "20px" },
                  }}
                >
                  Total BNB Stake Contract
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: { xs: "30px", md: "45px" },
                    color: "#2AFC95",
                  }}
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
                border="1px solid #2AFC95"
                borderRadius="15px"
                textAlign="left"
                bgcolor="#062A34"
              >
                <Box
                  sx={{
                    fontWeight: "700",
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  <span
                    style={{
                      color: "#2AFC95",
                      fontWeight: "600",
                      fontSize: { xs: "14px", md: "17px" },
                      marginRight: "0.5rem",
                    }}
                  >
                    Total income:
                  </span>
                  based on your tarrif plan (from 5% to 8% daily)
                </Box>
                <Box
                  sx={{
                    fontWeight: "700",
                    fontSize: { xs: "16px", md: "18px" },
                  }}
                >
                  <span
                    style={{
                      color: "#2AFC95",
                      fontWeight: "600",
                      fontSize: { xs: "14px", md: "17px" },
                      marginRight: "0.5rem",
                    }}
                  >
                    Basic interest rate:
                  </span>
                  +0.5% every 24 hours - only for new deposits
                </Box>
                <Box
                  sx={{
                    fontWeight: "700",
                    fontSize: { xs: "16px", md: "18px" },
                    marginRight: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      color: "#2AFC95",
                      fontWeight: "600",
                      fontSize: { xs: "14px", md: "17px" },
                      marginRight: "0.5rem",
                    }}
                  >
                    Minimal deposit:
                  </span>
                  0.05 BNB, no maximal limit
                </Box>
                <Box
                  sx={{
                    fontWeight: "700",
                    fontSize: { xs: "15px", md: "18px" },
                  }}
                >
                  Earnings every moment, withdraw any time
                  <span
                    style={{
                      color: "#2AFC95",
                      fontWeight: "600",
                      fontSize: { xs: "12px", md: "16px" },
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
      </Box>
    </>
  );
};

export default Hero;
