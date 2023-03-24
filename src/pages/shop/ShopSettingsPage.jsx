import { Button, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SideBar from "../../components/global/side-bar/SideBar";
import { useSelector } from "react-redux";
export default function ShopInfo() {
  const shop = useSelector((state) => state.shop.shopData);

  return (
    <SideBar
      content={
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
                  value={shop.name}
                />
              </div>

              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <TextField
                  id="filled-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  variant="filled"
                  className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"
                  value={shop.description}
                />
              </div>
            </dl>
          </div>

          <div className="px-4 py-5 sm:px-6 flex justify-end">
            <Button title="Modifier" variant="contained" endIcon={<EditIcon />}>
              Modifier
            </Button>
          </div>
        </div>
      }
    />
  );
}
