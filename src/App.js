import {
  createBrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
//pages
import StatsPage from "./pages/StatsPage";
import ShopPage from "./pages/ShopPage";
import CategoriesPage from "./pages/CategoriesPage";
import ArticlesPage from "./pages/ArticlesPage";
import NotificationsPage from "./pages/NotificationsPage";
import SettingsPage from "./pages/SettingsPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/stats",
    element: <StatsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/articles",
    element: <ArticlesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/notifications",
    element: <NotificationsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
