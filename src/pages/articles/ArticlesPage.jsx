import React, { useEffect, useState } from "react";
import SideBar from "../../components/global/side-bar/SideBar";
import ArticlesDataGrid from "../../components/articles/ArticlesDataGrid";
import axios from "axios";
import { apiUrl } from "../../constants/api";
import RessouceNotFound from "../../components/global/RessouceNotFound";
import AddArticle from "../../components/articles/AddArticle";
import { useSelector } from "react-redux";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const shop = useSelector((state) => state.shop.shopData);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(apiUrl + "/articles/get-shop-articles/" + shop.id)
      .then((res) => {
        setArticles(res.data.articles);
        setIsLoading(false);
      })
      .catch((err) => console.log("err :>> ", err));
  }, [shop.id]);

  return (
    <SideBar
      content={
        <div>
          {articles.length ? (
            <ArticlesDataGrid
              articles={articles}
              setOpenDialog={setOpenDialog}
            />
          ) : (
            <RessouceNotFound
              isLoading={isLoading}
              content={`Aucun article trouvé`}
            />
          )}

          <AddArticle setOpenDialog={setOpenDialog} openDialog={openDialog} />
        </div>
      }
    />
  );
}

export default ArticlesPage;
