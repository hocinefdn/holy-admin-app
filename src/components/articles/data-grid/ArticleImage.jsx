import React from "react";
import { backendUrl } from "../../../constants/api";
const ArticleImage = (rowInfo) => {
  return (
    <div>
      <img src={`${backendUrl}/${rowInfo.data.images[0].link}`} alt="" />
    </div>
  );
};

export default ArticleImage;
