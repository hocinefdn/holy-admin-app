import React from "react";
import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const ArticleActions = () => {
  return (
    <div>
      <IconButton
        variant="contained"
        title="Modifier l'article"
        color="info"
        size="small"
      >
        <EditIcon />
      </IconButton>
      <IconButton
        variant="contained"
        title="Modifier l'article"
        color="error"
        size="small"
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default ArticleActions;
