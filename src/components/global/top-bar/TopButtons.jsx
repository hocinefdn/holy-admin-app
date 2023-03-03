import React from "react";
// mui
import { Badge, Box, Button, IconButton, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// components
import UserButton from "./UserButton";

function TopButtons() {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <Button size="medium" color="inherit">
        <Badge badgeContent={8} color="error">
          <AddShoppingCartIcon />
          <Typography variant="button" marginRight={1}>
            Commandes
          </Typography>
        </Badge>
      </Button>
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
