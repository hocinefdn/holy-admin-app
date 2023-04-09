import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import SaveIcon from "@mui/icons-material/Save";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
import {
  CircularProgress,
  FilledInput,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import AddImages from "./AddImages";
import axios from "axios";
import { apiUrl } from "../../constants/api";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddArticle({ openDialog, setOpenDialog }) {
  const shop = useSelector((state) => state.shop.shopData);
  const [article, setArticle] = useState({
    title: "",
    description: "",
    price: 0,
    stock: 0,
    details: { test: "test" },
    categoryId: null,
    shopId: shop.id,
  });
  const [articleImages, setArtcileImages] = useState(null);
  const [allCategories, setAllCategories] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const dataFetch = async () => {
      await axios
        .get(apiUrl + "/categories/getAll")
        .then((res) => {
          setAllCategories(res.data);
        })
        .catch((err) => console.log("err :>> ", err));
    };
    dataFetch();
  }, []);

  const addArticle = () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("articleImages", articleImages);

    //  article data
    formData.append("title", article.title);
    formData.append("description", article.description);
    formData.append("price", article.price);
    formData.append("stock", article.stock);
    formData.append("details", article.details);
    formData.append("categoryId", article.categoryId);
    formData.append("shopId", article.shopId);

    axios
      .post(apiUrl + "/articles", formData)
      .then((res) => {
        setIsLoading(false);
        console.log("res :>> ", res);
        setOpenDialog(false);
      })
      .catch((err) => {
        console.log("err :>> ", err.response.data);
      });
  };
  return (
    <div>
      <Dialog
        fullScreen
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setOpenDialog(false)}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Ajouter un nouvel article
            </Typography>
            <Button
              variant="contained"
              autoFocus
              color="success"
              onClick={addArticle}
              startIcon={<SaveIcon />}
            >
              Enregistrer
            </Button>
          </Toolbar>
        </AppBar>
        <Box>
          {isLoading ? (
            <div className="text-center p-2">
              <CircularProgress color="success" />
            </div>
          ) : (
            ""
          )}
          {/* ####################################   Add article form   #################################"" */}
          <Paper elevation={3} className="p-4 flex m-3">
            <div className="w-1/2 p-2">
              <h2 className="text-center text-xl mb-2">
                Informations de l'article
              </h2>
              {/* --------------  Title  ------------- */}
              <TextField
                id="title"
                required
                label="Titre"
                placeholder="Titre"
                variant="filled"
                color="secondary"
                margin="dense"
                size="small"
                fullWidth
                onChange={(e) => {
                  setArticle({ ...article, title: e.target.value });
                }}
              />
              {/* --------------------  Description   ------------------- */}
              <TextField
                id="description"
                label="Description"
                placeholder="Description"
                multiline
                rows={4}
                fullWidth
                color="secondary"
                variant="filled"
                margin="dense"
                onChange={(e) => {
                  setArticle({ ...article, description: e.target.value });
                }}
              />
              <div className="flex justify-between">
                {/* ---------------------   Price   --------------- */}
                <FormControl
                  variant="filled"
                  color="secondary"
                  margin="dense"
                  size="small"
                  required
                  onChange={(e) => {
                    setArticle({ ...article, price: e.target.value });
                  }}
                >
                  <InputLabel htmlFor="price">Prix</InputLabel>
                  <FilledInput
                    id="price"
                    endAdornment={
                      <InputAdornment position="end">DA</InputAdornment>
                    }
                  />
                </FormControl>
                {/* -----------------  Stock  ---------------- */}
                <TextField
                  id="stock"
                  required
                  label="Stock"
                  placeholder="Stock"
                  color="secondary"
                  variant="filled"
                  margin="dense"
                  size="small"
                  type="number"
                  onChange={(e) => {
                    setArticle({ ...article, stock: e.target.value });
                  }}
                />

                {/* ------------------  category  ----------------- */}
                <FormControl
                  variant="filled"
                  sx={{ m: 1, minWidth: 120 }}
                  color="secondary"
                  size="small"
                >
                  <InputLabel id="demo-simple-select-filled-label">
                    Catégorie
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    onChange={(e) =>
                      setArticle({ ...article, categoryId: e.target.value })
                    }
                    defaultValue={""}
                  >
                    {allCategories ? (
                      allCategories.map((category) => (
                        <MenuItem
                          key={`menu-item-${category.id}`}
                          value={category.id}
                        >
                          {category.name}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem disabled>Aucun</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="w-1/2 p-2">
              <h2 className="text-center text-xl mb-2">Images de l'article</h2>
              <AddImages setArtcileImages={setArtcileImages} />
            </div>
          </Paper>
        </Box>
      </Dialog>
    </div>
  );
}
