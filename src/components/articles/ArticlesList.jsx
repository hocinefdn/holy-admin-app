import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import AddArticle from "./AddArticle";
import axios from "axios";
import { apiUrl } from "../../constants/api";

export default function ArticlesList() {
  const [openDialog, setOpenDialog] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrl + "/articles")
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => console.log("err :>> ", err));
  }, []);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  return (
    <div className="bg-white flex justify-center">
      <AddArticle setOpenDialog={setOpenDialog} openDialog={openDialog} />
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
            Gérer les articles
          </h2>
          <Button
            variant="contained"
            endIcon={<AddIcon />}
            color="success"
            onClick={() => setOpenDialog(true)}
          >
            Ajouter
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {articles.map((article) => (
            <div key={article.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                  alt={article.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={article.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {article.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{article.color}</p>
                </div>
                <p className="text-lg font-bold text-green-500">
                  {article.price} DA
                </p>
              </div>
              <div className="flex justify-end">
                <IconButton aria-label="delete" color="error">
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
