import { Box, Container, Hidden, Stack } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import NavDrawer from "./Drawer";

export default function Navbar() {
  return (
    <Box my={5}>
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ fontWeight: "600", fontSize: "22px" }}>Logo</Box>
          <Hidden mdDown>
            <Stack direction="row" alignItems="center" gap={5}>
              <Box
                border="1px solid #2AFC95"
                borderRadius="20px"
                sx={{
                  fontWeight: "700",
                  fontSize: "14px",
                  padding: "10px 20px",
                }}
              >
                1BNB=$300.87
              </Box>
              <Stack
                direction="row"
                gap={0.5}
                sx={{ fontWeight: "700", fontSize: "14px" }}
              >
                <TelegramIcon
                  sx={{
                    color: "#2AFC95",
                  }}
                />
                <Box>Telegram</Box>
              </Stack>
              <Stack
                direction="row"
                gap={0.5}
                sx={{ fontWeight: "700", fontSize: "14px" }}
              >
                <AssignmentOutlinedIcon
                  sx={{
                    color: "#2AFC95",
                  }}
                />
                <Box>Audit</Box>
              </Stack>
              <Stack
                direction="row"
                gap={0.5}
                sx={{ fontWeight: "700", fontSize: "14px" }}
              >
                <HelpOutlineOutlinedIcon
                  sx={{
                    color: "#2AFC95",
                  }}
                />
                <Box>Audit</Box>
              </Stack>
              <Box
                sx={{
                  background: " linear-gradient(-75deg, #0558DC,#0DDFA6 )",
                  fontWeight: "700",
                  fontSize: "14px",
                  padding: "10px 20px",
                  borderRadius: "35px",
                  cursor: "pointer",
                }}
              >
                PDF Guide
              </Box>
            </Stack>
          </Hidden>
          <Hidden mdUp>
            <NavDrawer />
          </Hidden>
        </Stack>
      </Container>
    </Box>
  );
}
