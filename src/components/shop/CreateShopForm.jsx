import { useState } from "react";
import axios from "axios";
// mui
import { Button, LinearProgress, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { apiUrl } from "../../constants/api.js";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayLinearProgress } from "../../store/reducers/componentsSlice.js";
export default function CreateShopForm() {
  const userLoged = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  // console.log("userLoged :>> ", userLoged);
  const [shop, setShop] = useState({
    name: "",
    description: "",
    style: { primaryColor: "#F1948A", secondaryColor: "#E74C3C" },
    details: { test: "test" },
    userId: userLoged.id,
  });

  const createShop = () => {
    dispatch(setDisplayLinearProgress({ value: true }));
    axios
      .post(apiUrl + "/shops", shop)
      .then((res) => {
        console.log("res.data :>> ", res.message);
        dispatch(setDisplayLinearProgress({ value: false }));
        window.location.href = "/shop";
      })
      .catch((err) => console.log("err :>> ", err.response.data.message));
  };
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Nom</dt>
            <TextField
              id="name"
              label="Nom"
              variant="filled"
              size="small"
              color="secondary"
              onChange={(e) => setShop({ ...shop, name: e.target.value })}
            />
          </div>

          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <TextField
              id="filled-multiline-static"
              label="Description"
              multiline
              rows={4}
              variant="filled"
              className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
              onChange={(e) =>
                setShop({ ...shop, description: e.target.value })
              }
            />
          </div>
          <div className=" text-gray-500 bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium ">Style</dt>
            <div className="flex items-center">
              <span className="mr-2">Couleur primaire</span>
              <input
                type="color"
                name="primaryColor"
                id="primary-color"
                // value={shop.style.primaryColor}
                className="cursor-pointer"
                onChange={(e) =>
                  setShop({
                    ...shop,
                    style: { ...shop.style, primaryColor: e.target.value },
                  })
                }
              />
            </div>
            <div className="flex items-center">
              <span className="mr-2">Couleur secondaire</span>
              <input
                type="color"
                name="secondaryColor"
                id="secondary-color"
                // value={shop.style.secondaryColor}
                className="cursor-pointer"
                onChange={(e) =>
                  setShop({
                    ...shop,
                    style: { ...shop.style, secondaryColor: e.target.value },
                  })
                }
              />
            </div>
          </div>
        </dl>
      </div>

      <div className="px-4 py-5 sm:px-6 flex justify-end">
        <Button
          title="Modifier"
          variant="contained"
          endIcon={<EditIcon />}
          color="secondary"
          onClick={createShop}
        >
          Enregister
        </Button>
      </div>
    </div>
  );
}
