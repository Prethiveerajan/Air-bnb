import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Modal } from "react-bootstrap";
import Login from "../../Pages/Login";
import Signup from "../../Pages/Signup";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleShowLogin = () => {
    setShowLogin(true);
    handleClose();
  };

  const handleShowSignup = () => {
    setShowSignup(true);
    handleClose();
  };

  const handleCloseLogin = () => setShowLogin(false);

  const handleCloseSignup = () => setShowSignup(false);

  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="profile-menu-flex"
      >
        <MenuRoundedIcon />
        <AccountCircleRoundedIcon />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleShowSignup}>Signup</MenuItem>
        <MenuItem onClick={handleShowLogin}>Login</MenuItem>
        <div
          style={{
            height: "1px",
            backgroundColor: "var(--grey)",
            width: "100%",
          }}
        />
        <MenuItem>Airbnb Your Home</MenuItem>
        <MenuItem>Help</MenuItem>
      </Menu>

      
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Login onClose={handleCloseLogin} />
      </Modal>
      <Modal show={showSignup} onHide={handleCloseSignup}>
        <Signup onClose={handleCloseSignup} />
      </Modal>
    </div>
  );
}
