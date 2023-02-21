import EqualizerIcon from "@mui/icons-material/Equalizer";
import LogoutIcon from "@mui/icons-material/Logout";
import StorefrontIcon from "@mui/icons-material/Storefront";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SellIcon from "@mui/icons-material/Sell";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

export const links = [
  { label: "Statistiques", icon: "stats", link: "/stats" },
  { label: "Boutique", icon: "shop", link: "/shop" },
  { label: "Catégories", icon: "categories", link: "/categories" },
  { label: "Articles", icon: "articles", link: "/articles" },
  { label: "Notifications", icon: "notifications", link: "/notifications" },
  { label: "Paramètres", icon: "settings", link: "/settings" },
  { label: "Déconnexion", icon: "logout", link: "/" },
];

export const linksIcons = (icons) => {
  switch (icons) {
    case "stats":
      return <EqualizerIcon />;
    case "shop":
      return <StorefrontIcon />;
    case "categories":
      return <FormatListBulletedIcon />;
    case "articles":
      return <SellIcon />;
    case "notifications":
      return <NotificationsIcon />;
    case "settings":
      return <SettingsIcon />;
    case "logout":
      return <LogoutIcon />;
    default:
      break;
  }
};
