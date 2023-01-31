import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import btnImg from "../../assets/btnImg.png";
import FileCopyIcon from "@mui/icons-material/FileCopy";
const ImportantPlan = () => {
  return (
    <Box py={2}>
      <Container>
        <Box
          sx={{
            bgcolor: "#04242A",
            padding: { md: "1rem", xs: "0.5rem" },
            border: "1px solid #2AFC95",
            fontSize: { md: "1.2rem", xs: "1rem" },
          }}
        >
          <ol>
            <li>
              Important: Plans return are float and daily profit for a new
              deposit will increase by 0.5% daily
            </li>
            <li style={{ margin: "0.5rem 0rem" }}>
              Minimum deposit amount is 0.05 BNB and you can have multiple
              deposits
            </li>
            <li>
              Earnings every moment, withdraw instantly any time (if you did not
              use capitalization of interest in Plan 4, Plan 5 and Plan 6)
            </li>
          </ol>
        </Box>
        <Box py={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4.5}>
              <Box
                sx={{
                  padding: { md: "2rem ", xs: "1rem " },
                  border: "1px solid #2AFC95",
                  textAlign: "center",
                  bgcolor: "#000D30",
                  height: "100% !important",
                }}
              >
                <Typography variant="h5" mt={4}>
                  Total Stacked BNB
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ color: "#2AFC95", margin: "0.5rem 0rem" }}
                >
                  0
                </Typography>
                <Typography variant="h5">
                  Available BNB for withdrawal
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ color: "#2AFC95", margin: "0.5rem 0rem" }}
                >
                  0.0000
                </Typography>
                <Box
                  sx={{
                    backgroundImage: `url(${btnImg})`,
                    backgroundSize: "100% 100%",
                    padding: "1.2rem",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Stack BNB
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7.5}>
              <Box
                sx={{
                  bgcolor: "#04242A",
                  padding: { md: "1rem 2rem", xs: "1rem" },
                  border: "1px solid #2AFC95",
                  height: "100% !important",
                }}
              >
                <Typography variant="h5" mb={1}>
                  Your Referral Link
                </Typography>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="h6"
                    width="90%"
                    border="1px solid #2AFC95"
                    padding="0.5rem"
                    sx={{ fontSize: "1rem !important" }}
                  >
                    Please connect to your wallet
                  </Typography>
                  <FileCopyIcon
                    width="10%"
                    sx={{
                      border: "1px solid #2AFC95",
                      height: "44px",
                      width: "50px",
                      padding: "0.5rem",
                      display: { md: "block", xs: "none" },
                    }}
                  ></FileCopyIcon>
                </Box>
                <Grid container py={2}>
                  <Grid item md={5} xs={12}>
                    <Typography
                      variant="h6"
                      width="90%"
                      padding="0.5rem 0rem"
                      sx={{ fontSize: "1rem !important" }}
                    >
                      Total Referral Earned
                    </Typography>
                    <Typography variant="h4" sx={{ color: "#2AFC95" }}>
                      0
                    </Typography>
                    <Typography
                      variant="h6"
                      width="90%"
                      padding="0.5rem 0rem"
                      sx={{ fontSize: "1rem !important" }}
                    >
                      Invited Users by You
                    </Typography>
                    <Typography variant="h4" sx={{ color: "#2AFC95" }}>
                      0
                    </Typography>
                    <Typography
                      variant="h6"
                      width="90%"
                      padding="0.5rem 0rem"
                      sx={{ fontSize: "1rem !important" }}
                    >
                      Total Referral Withdrawn
                    </Typography>
                    <Typography variant="h4" sx={{ color: "#2AFC95" }}>
                      0
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{
                      bgcolor: "#04233B",
                      padding: "1rem",
                      border: "1px solid #2AFC95",
                      marginTop: { md: "0rem", xs: "1rem" },
                    }}
                    item
                    md={7}
                    xs={12}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "1.1rem !important" }}
                      mb={2}
                    >
                      Earn for promotion BNBstake
                    </Typography>

                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px !important" }}
                      mb={2}
                    >
                      You will receive:
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "14px !important" }}
                      mb={2}
                    >
                      5% from each level 1 referral depositss 2.5% from each
                      level 2 referral deposits 0.5% from each level 3 referral
                      deposits
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "1rem !important" }}
                      color="#2AFC95"
                    >
                      Note! You need to have at least 1 deposit to start receive
                      earnings
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ImportantPlan;
