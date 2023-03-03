import { useState } from "react";
import { Link } from "react-router-dom";
// mui
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
// redux
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../../store/reducers/userSlice";

const UserButton = () => {
  const dispatch = useDispatch();

  const userLoged = useSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = useState(null);
  let name = "";
  if (userLoged.userData != null) {
    name = userLoged.userData.lastname + " " + userLoged.userData.firstname;
  }

  //functions
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch(logoutUser());
    window.location = "/";
  };
  return (
    <div>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar sx={{ width: 32, height: 32 }}>{name[0]}</Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/profile" className="flex flex-row items-center">
            <ListItemIcon>
              <Avatar fontSize="small" />
            </ListItemIcon>
            Profil
          </Link>
        </MenuItem>
        <Divider />

        <MenuItem>
          <Link to="/settings" className="flex flex-row items-center">
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            Paramètres
          </Link>
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserButton;
