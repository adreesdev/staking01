import { Box, Button, Divider, Drawer, Stack } from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import MenuOpenTwoToneIcon from "@mui/icons-material/MenuOpenTwoTone";

export default function NavDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        my={2}
        textAlign="center"
        sx={{ fontWeight: "700", fontSize: "22px" }}
      >
        Logo
      </Box>
      <Divider />
      <Stack direction="column" alignItems="center" gap={5} mt={5}>
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
              color: "green",
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
              color: "green",
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
              color: "green",
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
          }}
        >
          PDF Guide
        </Box>
      </Stack>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuOpenTwoToneIcon sx={{ color: "#fff" }} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
