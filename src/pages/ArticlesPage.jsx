import React from "react";
import SideBar from "../components/global/side-bar/SideBar";
import ArticlesList from "../components/articles/ArticlesList";
function ArticlesPage() {
  return <SideBar content={<ArticlesList />}></SideBar>;
}

export default ArticlesPage;
