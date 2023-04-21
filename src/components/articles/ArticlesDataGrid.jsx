import "devextreme/dist/css/dx.light.css";
import { Column, DataGrid } from "devextreme-react/data-grid";
import ArticleImage from "./data-grid/ArticleImage";
export default function ArticlesDataGrid({ articles }) {
  return (
    <div className="bg-white flex justify-center">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center">
            Vos articles
          </h2>
        </div>
        <DataGrid
          id="dataGrid"
          dataSource={articles}
          keyExpr="id"
          allowColumnReordering={true}
        >
          <Column dataField="images" cellRender={ArticleImage}></Column>
          <Column dataField="title"></Column>
          <Column dataField="price"></Column>
          <Column dataField="rate"></Column>
          <Column dataField="stock"></Column>
          <Column dataField="created_at"></Column>
          <Column dataField="updated_at"></Column>
        </DataGrid>
      </div>
    </div>
  );
}
