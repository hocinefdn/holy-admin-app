import React from "react";
import SideBar from "../scenes/global/SideBar";
import ArticlesList from "../components/articles/ArticlesList";
function ArticlesPage() {
  return <SideBar content={<ArticlesList />}></SideBar>;
}

export default ArticlesPage;
