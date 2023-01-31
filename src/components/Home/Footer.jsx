import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box py={2} bgcolor="#000D2F" padding="2rem">
      <Container>
        <Grid container spacing={2}>
          <Grid item md={3} sm={6} xs={12}>
            <Box>
              <Box
                mt={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { md: "center", xs: "left" },
                  alignItems: { md: "center", xs: "left" },
                }}
              >
                <StarRateIcon
                  sx={{
                    color: "#2AFC95",
                    height: "100px !important",
                    width: "100px",
                  }}
                />
                <Typography variant="h6">Logo Here</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box mt={5}>
              <Typography
                variant="h6"
                color="white"
                sx={{ fontSize: "1rem !important" }}
              >
                <u>HOME</u>
              </Typography>
              <Typography
                variant="h6"
                color="white"
                sx={{ fontSize: "1rem !important", margin: "0.7rem 0rem" }}
              >
                <u> FAQS</u>
              </Typography>
              <Typography
                variant="h6"
                color="white"
                sx={{ fontSize: "1rem !important" }}
              >
                <u>PRIVACY POLICY</u>
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <Box mt={4}>
              <Typography
                variant="h6"
                color="white"
                sx={{ fontSize: "1rem !important" }}
              >
                <u>HOW TO INVEST</u>
              </Typography>
              <Typography
                variant="h6"
                color="white"
                sx={{ fontSize: "1rem !important", margin: "0.7rem 0rem" }}
              >
                <u> TERMS</u>
              </Typography>
              <Typography
                variant="h6"
                color="white"
                sx={{ fontSize: "1.1rem !important" }}
              >
                <u>CONTACT US</u>
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12} mt={4}>
            <Box>
              <Box display="flex">
                <LocationOnIcon
                  sx={{
                    color: "#2AFC95",
                    marginRight: "0.5rem",
                    fontSize: "1.5rem !important",
                    textAlign: { md: "left", xs: "center" },
                  }}
                ></LocationOnIcon>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "1rem !important",
                    }}
                    color="#2AFC95"
                  >
                    OFFICE ADDRESS
                  </Typography>
                  <Typography>
                    26 London Lane, London, England, E8 3FU
                  </Typography>
                </Box>
              </Box>
              <Box display="flex">
                <EmailIcon
                  sx={{
                    color: "#2AFC95",
                    marginRight: "0.5rem",
                    fontSize: "1.5rem !important",
                    marginTop: "3px",
                  }}
                ></EmailIcon>
                <Box>
                  <Typography
                    variant="h6"
                    color="#2AFC95"
                    sx={{ fontSize: "1rem !important" }}
                  >
                    E-MAIL ADDRESS
                  </Typography>
                  <Typography>admin@get-hourly.com</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
