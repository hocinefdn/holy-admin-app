import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TopButtons from "./TopButtons";

export default function TopBar() {
  return (
    <Box display="flex" justifyContent="space-between" width="100%">
      <Box display="flex" alignItems="center">
        <Typography variant="h6" noWrap component="div">
          Tableau de bord
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <TopButtons />
      </Box>
    </Box>
  );
}
