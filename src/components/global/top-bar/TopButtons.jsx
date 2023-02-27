import { Badge, Box, IconButton } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React from "react";
import UserButton from "./UserButton";

function TopButtons() {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={8} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </IconButton>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
      </IconButton>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <UserButton />
    </Box>
  );
}

export default TopButtons;
