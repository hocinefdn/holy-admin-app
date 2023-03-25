import { useEffect } from "react";
import { Link } from "react-router-dom";
//mui
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { linksIcons } from "./side-bar-links";
// components
import TopBarAdmin from "../top-bar/TopBarAdmin";
// redux
import { useSelector, useDispatch } from "react-redux";
import { setSideBar } from "../../../store/reducers/componentsSlice";
import { LinearProgress } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "sideBarOpen",
})(({ theme, sideBarOpen }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(sideBarOpen && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "sideBarOpen",
})(({ theme, sideBarOpen }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(sideBarOpen && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!sideBarOpen && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function SideBar({ content }) {
  const userLoged = useSelector((state) => state.user);
  const sideBarOpen = useSelector((state) => state.components.sideBar);
  const displayLinearProgress = useSelector(
    (state) => state.components.displayLinearProgress
  );
  const shop = useSelector((state) => state.shop.shopData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userLoged.token == null) {
      window.location.href = "/login";
    }
  }, []);

  const theme = useTheme();
  const handleDrawerOpen = () => {
    dispatch(setSideBar({ value: true }));
  };

  const handleDrawerClose = () => {
    dispatch(setSideBar({ value: false }));
  };

  // ----------------------------   links  -----------------------------------
  const links = [
    {
      label: "Boutiques",
      icon: "shop",
      link: "/shops",
      isDispayed: true,
      isClicked: false,
    },
    {
      label: "Statistiques",
      icon: "stats",
      link: `${shop ? "/" + shop.slug + "/stats" : ""}`,
      isDispayed: shop ? true : false,
      isClicked: false,
    },
    {
      label: "Services",
      icon: "services",
      link: "/services",
      isDispayed: shop ? false : true,
      isClicked: false,
    },
    {
      label: "Catégories",
      icon: "categories",
      link: `${shop ? "/" + shop.slug + "/categories" : ""}`,
      isDispayed: shop ? true : false,
      isClicked: false,
    },
    {
      label: "Articles",
      icon: "articles",
      link: `${shop ? "/" + shop.slug + "/articles" : ""}`,
      isDispayed: shop ? true : false,
      isClicked: false,
    },
    {
      label: "Clients",
      icon: "group",
      link: `${shop ? "/" + shop.slug + "/customers" : ""}`,
      isDispayed: shop ? true : false,
      isClicked: false,
    },
    {
      label: "Style",
      icon: "shop-style",
      link: `${shop ? "/" + shop.slug + "/manage-shop-style" : ""}`,
      isDispayed: shop ? true : false,
      isClicked: false,
    },
    {
      label: "Notifications",
      icon: "notifications",
      link: "/notifications",
      isDispayed: true,
      isClicked: false,
    },
    {
      label: "Paramètres",
      icon: "settings",
      link: `${shop ? "/" + shop.slug + "/settings" : ""}`,
      isDispayed: shop ? true : false,
      isClicked: false,
    },
  ];

  let shopColors = shop ? JSON.parse(shop.style) : "";

  const setIsClicked = (label) => {
    const index = links.findIndex((link) => link.label === label);
    links[index].isClicked = true;
  };
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <CssBaseline />
      <AppBar position="fixed" sideBarOpen={sideBarOpen}>
        <Toolbar
          style={{
            backgroundColor: shopColors.primaryColor + "99",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="sideBarOpen drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 2,
              ...(sideBarOpen && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <TopBarAdmin />
        </Toolbar>

        {displayLinearProgress ? <LinearProgress color="success" /> : ""}
      </AppBar>

      <Drawer variant="permanent" sideBarOpen={sideBarOpen}>
        <DrawerHeader
          style={{
            backgroundColor: shopColors.primaryColor + "99",
          }}
        >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {links.map((link, index) =>
            link.isDispayed ? (
              <Link
                key={`link-${link.label}`}
                to={link.link}
                onClick={() => setIsClicked(link.label)}
              >
                <ListItem
                  key={link.label}
                  disablePadding
                  sx={{
                    display: "block",
                    backgroundColor: link.isClicked ? "grey" : "#fff",
                  }}
                  to={link.link}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: sideBarOpen ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: sideBarOpen ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {linksIcons(link.icon)}
                    </ListItemIcon>
                    <ListItemText
                      primary={link.label}
                      sx={{ opacity: sideBarOpen ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ) : (
              ""
            )
          )}
        </List>
        <Divider />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {content}
      </Box>
    </Box>
  );
}

export default SideBar;
