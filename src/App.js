import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//pages
import StatsPage from "./pages/StatsPage";
import CategoriesPage from "./pages/CategoriesPage";
import ArticlesPage from "./pages/ArticlesPage";
import NotificationsPage from "./pages/NotificationsPage";
import SettingsPage from "./pages/SettingsPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import TariffsPage from "./pages/TariffsPage";
import CreateShopPage from "./pages/shop/CreateShopPage";
import ShopsList from "./components/shop/ShopsList";
import ShopsPage from "./pages/shop/ShopsPage";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ff9800",
      main: "#fff",
      dark: "#002884",
      contrastText: "#000",
    },
    secondary: {
      light: "#ff7961",
      main: "#E74C3C",
      dark: "#ba000d",
      contrastText: "#000",
    },
    success: {
      light: "#58D68D",
      main: "#2ECC71",
      dark: "#82E0AA",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Router>
          {/* #########  Routes  ######## */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tariffs" element={<TariffsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* shop */}
            <Route path="/shops" element={<ShopsPage />} />
            <Route path="/shop/create-shop" element={<CreateShopPage />} />

            <Route path="/:shopSlug" element={<ShopsList />} />

            {/* -------------  Dashboard  -------------- */}
            <Route path="/:shopSlug/stats" element={<StatsPage />} />

            <Route path="/:shopSlug/categories" element={<CategoriesPage />} />
            <Route path="/:shopSlug/articles" element={<ArticlesPage />} />
            <Route
              path="/:shopSlug/notifications"
              element={<NotificationsPage />}
            />
            <Route path="/:shopSlug/settings" element={<SettingsPage />} />

            {/* -------------  404 error page  ------------- */}
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
