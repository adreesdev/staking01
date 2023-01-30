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
          <Grid item md={3} xs={12}>
            <Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <StarRateIcon
                  sx={{
                    color: "#2AFC95",
                    height: "120px !important",
                    width: "120px",
                  }}
                />
                <Typography variant="h6">Logo Here</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box mt={4}>
              <Typography variant="h6" color="white">
                <u>HOME</u>
              </Typography>
              <Typography variant="h6" color="white">
                <u> FAQS</u>
              </Typography>
              <Typography variant="h6" color="white">
                <u>PRIVACY POLICY</u>
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box mt={4}>
              <Typography variant="h6" color="white">
                <u>HOW TO INVEST</u>
              </Typography>
              <Typography variant="h6" color="white">
                <u> TERMS</u>
              </Typography>
              <Typography variant="h6" color="white">
                <u>CONTACT US</u>
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} xs={12} mt={4}>
            <Box display="flex">
              <LocationOnIcon
                sx={{
                  color: "#2AFC95",
                  marginRight: "0.5rem",
                  fontSize: "2rem !important",
                  marginTop: "3px",
                }}
              ></LocationOnIcon>
              <Box>
                <Typography variant="h6" color="#2AFC95">
                  OFFICE ADDRESS
                </Typography>
                <Typography>26 London Lane, London, England, E8 3FU</Typography>
              </Box>
            </Box>
            <Box display="flex">
              <EmailIcon
                sx={{
                  color: "#2AFC95",
                  marginRight: "0.5rem",
                  fontSize: "2rem !important",
                  marginTop: "3px",
                }}
              ></EmailIcon>
              <Box>
                <Typography variant="h6" color="#2AFC95">
                  E-MAIL ADDRESS
                </Typography>
                <Typography>admin@get-hourly.com</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
