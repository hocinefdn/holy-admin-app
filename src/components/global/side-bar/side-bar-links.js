import EqualizerIcon from "@mui/icons-material/Equalizer";
import StorefrontIcon from "@mui/icons-material/Storefront";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SellIcon from "@mui/icons-material/Sell";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupIcon from "@mui/icons-material/Group";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";

export const linksIcons = (icons) => {
  switch (icons) {
    case "shop":
      return <StorefrontIcon />;
    case "stats":
      return <EqualizerIcon />;
    case "services":
      return <HomeRepairServiceIcon />;
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
    case "shop-style":
      return <FormatPaintIcon />;

    default:
      break;
  }
};
