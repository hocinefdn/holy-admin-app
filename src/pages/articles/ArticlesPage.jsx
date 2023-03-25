import React, { useEffect, useState } from "react";
import SideBar from "../../components/global/side-bar/SideBar";
import ArticlesList from "../../components/articles/ArticlesList";
import axios from "axios";
import { apiUrl } from "../../constants/api";
import RessouceNotFound from "../../components/global/RessouceNotFound";
import AddArticle from "../../components/articles/AddArticle";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const shop = useSelector((state) => state.shop.shopData);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(apiUrl + "/articles/get-shop-articles/" + shop.id)
      .then((res) => {
        setArticles(res.data.articles);
        setIsLoading(false);
      })
      .catch((err) => console.log("err :>> ", err));
  }, []);

  return (
    <SideBar
      content={
        <div>
          <div className="flex justify-end">
            <Button
              variant="contained"
              endIcon={<AddIcon />}
              color="success"
              onClick={() => setOpenDialog(true)}
            >
              Ajouter
            </Button>
          </div>
          {articles.length ? (
            <ArticlesList articles={articles} />
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
