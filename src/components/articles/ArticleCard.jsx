import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { apiUrl } from "../../constants/api";

const ArticleCard = ({ article }) => {
  const deleteArticle = (articleId) => {
    axios
      .delete(apiUrl + "/articles/" + articleId)
      .then((res) => {
        console.log("res :>> ", res);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  };

  return (
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
        <p className="text-lg font-bold text-green-500">{article.price} DA</p>
      </div>
      <div className="flex justify-end">
        <IconButton
          aria-label="delete"
          color="error"
          onClick={() => deleteArticle(article.id)}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <EditIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ArticleCard;
