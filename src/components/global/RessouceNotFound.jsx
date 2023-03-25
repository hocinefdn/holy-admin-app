import { CircularProgress } from "@mui/material";
import React from "react";

const RessouceNotFound = ({ isLoading, content }) => {
  return (
    <div className="text-2xl text-center">
      {isLoading ? (
        <div>
          <CircularProgress color="success" size={70} thickness={5} />
        </div>
      ) : (
        <div className="text-2xl">{content}</div>
      )}
    </div>
  );
};

export default RessouceNotFound;
