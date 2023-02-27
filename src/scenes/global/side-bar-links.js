import EqualizerIcon from "@mui/icons-material/Equalizer";
import LogoutIcon from "@mui/icons-material/Logout";
import StorefrontIcon from "@mui/icons-material/Storefront";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SellIcon from "@mui/icons-material/Sell";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";

export const links = [
  { label: "Statistiques", icon: "stats", link: "/stats" },
  { label: "Boutique", icon: "shop", link: "/shop" },
  // { label: "Catégories", icon: "categories", link: "/categories" },
  { label: "Articles", icon: "articles", link: "/articles" },
  { label: "Clients", icon: "group", link: "/customers" },
  { label: "Notifications", icon: "notifications", link: "/notifications" },
  { label: "Paramètres", icon: "settings", link: "/settings" },
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
    case "group":
      return <GroupIcon />;
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
