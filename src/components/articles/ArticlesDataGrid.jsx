import "devextreme/dist/css/dx.light.css";
import { Column, DataGrid, Item, Toolbar } from "devextreme-react/data-grid";
import ArticleImage from "./data-grid/ArticleImage";
import { Button } from "devextreme-react/button";
import ArticleActions from "./data-grid/ArticleActions";
export default function ArticlesDataGrid({ articles, setOpenDialog }) {
  return (
    <div className="bg-white flex justify-center">
      <div className="py-2">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
          Vos articles
        </h2>

        <DataGrid
          id="dataGrid"
          dataSource={articles}
          keyExpr="id"
          showBorders={true}
          showRowLines={true}
          showColumnHeaders={true}
        >
          <Toolbar>
            <Item location="before">
              <Button
                icon="add"
                type="success"
                hint="Ajouter un article"
                onClick={() => setOpenDialog(true)}
              />
            </Item>
          </Toolbar>
          <Column dataField="images" cellRender={ArticleImage}></Column>
          <Column dataField="title"></Column>
          <Column dataField="price"></Column>
          <Column dataField="rate"></Column>
          <Column dataField="stock"></Column>
          <Column dataField="created_at"></Column>
          <Column dataField="updated_at"></Column>
          <Column dataField="Actions" cellRender={ArticleActions}></Column>
        </DataGrid>
      </div>
    </div>
  );
}
